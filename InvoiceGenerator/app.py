from datetime import date
from pathlib import Path
import sys
import threading
import webbrowser

from flask import Flask, jsonify, render_template, request, send_file
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas


APP_DIR = Path(__file__).resolve().parent
if hasattr(sys, "_MEIPASS"):
    APP_DIR = Path(sys._MEIPASS)

app = Flask(
    __name__,
    template_folder=str(APP_DIR / "templates"),
    static_folder=str(APP_DIR / "static"),
)

GREEN = colors.HexColor("#278643")
DARK_GREEN = colors.HexColor("#1E672F")
LIGHT_GREEN = colors.HexColor("#EEF5F0")
BORDER = colors.HexColor("#BFCAC2")
TEXT = colors.HexColor("#333333")


def money(value):
    try:
        return f"${float(value or 0):,.2f}"
    except (TypeError, ValueError):
        return "$0.00"


def text(value, fallback=""):
    if value is None:
        return fallback
    value = str(value).strip()
    return value or fallback


def as_number(value):
    try:
        return float(value)
    except (TypeError, ValueError):
        return 0.0


def calculate_amount(quantity_text, rate):
    quantity_text = text(quantity_text).lower()
    import re

    match = re.search(r"[\d.]+", quantity_text)
    quantity = float(match.group()) if match else 0.0
    if "min" in quantity_text:
        return quantity / 60 * rate
    if "km" in quantity_text:
        return quantity * rate
    return quantity * rate


def draw_label_value(c, x, y, label, value, label_width=43 * mm, value_width=57 * mm):
    row_height = 10 * mm
    c.setStrokeColor(BORDER)
    c.setLineWidth(0.5)
    c.rect(x, y - row_height, label_width + value_width, row_height)
    c.line(x + label_width, y, x + label_width, y - row_height)
    c.setFillColor(colors.black)
    c.setFont("Helvetica-Bold", 8)
    c.drawString(x + 3 * mm, y - 6.5 * mm, text(label))
    c.setFont("Helvetica", 8)
    c.drawString(x + label_width + 3 * mm, y - 6.5 * mm, text(value))
    return y - row_height


def wrap_text(c, value, width, font="Helvetica", size=8):
    words = str(value).split()
    lines = []
    current = ""
    for word in words:
        candidate = f"{current} {word}".strip()
        if stringWidth(candidate, font, size) <= width:
            current = candidate
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines or [""]


def build_invoice(data):
    pdf_path = APP_DIR / "generated-invoice.pdf"
    c = canvas.Canvas(str(pdf_path), pagesize=A4)
    width, height = A4
    left = 14 * mm
    right = width - 14 * mm

    logo_path = APP_DIR / "static" / "hummblecare-logo.png"
    if logo_path.exists():
        c.drawImage(str(logo_path), left, height - 25 * mm, 17 * mm, 17 * mm, preserveAspectRatio=True, mask="auto")
    c.setFillColor(GREEN)
    c.setFont("Helvetica-Bold", 16)
    c.drawString(left + 22 * mm, height - 17 * mm, "HUMMBLE CARE")
    c.setFillColor(DARK_GREEN)
    c.setFont("Helvetica-Bold", 22)
    c.drawRightString(right, height - 18 * mm, "INVOICE")

    c.setFillColor(TEXT)
    c.setFont("Helvetica", 8)
    abn = text(data.get("abn"), "56 667 512 129")
    address = text(data.get("address"), "27 Liverpool Street, Point Cook VIC 3030")
    email = text(data.get("email"), "Hummblecare8@gmail.com")
    phone = text(data.get("phone"), "0406 235 095")
    c.drawString(left + 22 * mm, height - 25 * mm, f"ABN: {abn}")
    c.drawString(left + 22 * mm, height - 29 * mm, address)
    c.drawString(left + 22 * mm, height - 33 * mm, f"Email: {email}  |  Phone: {phone}")

    y = height - 48 * mm
    c.setFillColor(GREEN)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(left, y, "INVOICE DETAILS")
    y -= 5 * mm

    content_width = right - left
    pair_width = content_width / 2
    label_width = 37 * mm
    value_width = pair_width - label_width
    details = [
        ("Invoice number", text(data.get("invoiceNumber"), "AS-02")),
        ("Invoice date", text(data.get("invoiceDate"), date.today().strftime("%d %B %Y"))),
        ("Payment due date", text(data.get("paymentDueDate"), date.today().strftime("%d %B %Y"))),
        ("Participant name", text(data.get("participantName"), "Anhad Singh")),
        ("NDIS number", text(data.get("ndisNumber"), "430781715")),
        ("Plan manager / payer", text(data.get("planManager"), "Lead Consulting")),
    ]

    row_height = 9 * mm
    c.setStrokeColor(BORDER)
    c.setLineWidth(0.5)
    for row in range(3):
        y_top = y - row * row_height
        y_bottom = y_top - row_height
        for column in range(2):
            x = left + column * pair_width
            c.rect(x, y_bottom, pair_width, row_height)
            c.line(x + label_width, y_top, x + label_width, y_bottom)
            left_index = row
            right_index = row + 3
            label, value = details[left_index if column == 0 else right_index]
            c.setFillColor(colors.black)
            c.setFont("Helvetica-Bold", 7.5)
            c.drawString(x + 2.5 * mm, y_bottom + 3 * mm, label)
            c.setFont("Helvetica", 7.5)
            c.drawString(x + label_width + 2.5 * mm, y_bottom + 3 * mm, value)

    y -= 3 * row_height + 7 * mm
    c.setFillColor(GREEN)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(left, y, "SERVICE DETAILS")
    y -= 5 * mm

    service_details = [
        ("Support provided", text(data.get("supportProvided"), "Allied Health Assistant – Therapy Assistant Level 2")),
        ("AHA / worker name", text(data.get("workerName"), "Sharanjit Kaur")),
        ("Service location", text(data.get("serviceLocation"), "56 Amsterdam Avenue, Tarneit")),
    ]
    right_service_details = [
        ("Date of service", text(data.get("serviceDate"), date.today().strftime("%d %B %Y"))),
        ("Supervising therapist", text(data.get("supervisor"), "Maryam")),
        ("Next appointment", text(data.get("nextAppointment"), "")),
    ]

    row_height = 10 * mm
    for row in range(3):
        y_top = y - row * row_height
        y_bottom = y_top - row_height
        for column in range(2):
            x = left + column * pair_width
            c.rect(x, y_bottom, pair_width, row_height)
            c.line(x + label_width, y_top, x + label_width, y_bottom)
            label, value = (service_details if column == 0 else right_service_details)[row]
            c.setFillColor(colors.black)
            c.setFont("Helvetica-Bold", 7.5)
            c.drawString(x + 2.5 * mm, y_bottom + 5.5 * mm, label)
            c.setFont("Helvetica", 7.5)
            for line_index, line in enumerate(wrap_text(c, value, value_width - 5 * mm, size=7.5)):
                c.drawString(x + label_width + 2.5 * mm, y_bottom + 5.5 * mm - line_index * 3.5 * mm, line)

    y -= 3 * row_height + 8 * mm
    c.setFillColor(GREEN)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(left, y, "NDIS SUPPORT DETAILS")
    y -= 5 * mm

    columns = [
        ("Date", 26 * mm),
        ("Description", 55 * mm),
        ("NDIS support item", 34 * mm),
        ("Quantity", 20 * mm),
        ("Rate", 22 * mm),
        ("Amount", 25 * mm),
    ]
    table_left = left
    table_width = sum(size for _, size in columns)
    table_height = 8 * mm
    c.setFillColor(GREEN)
    c.rect(table_left, y - table_height, table_width, table_height, fill=1, stroke=0)
    x = table_left
    c.setFillColor(colors.white)
    c.setFont("Helvetica-Bold", 7.5)
    for label, col_width in columns:
        c.drawString(x + 2 * mm, y - 5.5 * mm, label)
        x += col_width
    y -= table_height

    subtotal = 0.0
    rows = data.get("services") or []
    c.setFillColor(colors.black)
    c.setFont("Helvetica", 7)
    for service in rows:
        quantity_text = text(service.get("quantity"), "0")
        rate = as_number(service.get("rate"))
        amount = as_number(service.get("amount"))
        if amount == 0:
            amount = calculate_amount(quantity_text, rate)
        subtotal += amount

        description = text(service.get("description"))
        item_number = text(service.get("supportItem"))
        row_lines = max(
            len(wrap_text(c, description, columns[1][1] - 4 * mm, size=7)),
            len(wrap_text(c, item_number, columns[2][1] - 4 * mm, size=7)),
            1,
        )
        row_height = max(9 * mm, row_lines * 4 * mm + 3 * mm)
        c.setStrokeColor(BORDER)
        c.rect(table_left, y - row_height, table_width, row_height)
        x = table_left
        values = [
            text(service.get("date")),
            description,
            item_number,
            quantity_text,
            text(service.get("rateDisplay"), money(rate)),
            money(amount),
        ]
        for index, ((_, col_width), value) in enumerate(zip(columns, values)):
            c.line(x + col_width, y, x + col_width, y - row_height)
            c.setFont("Helvetica", 7)
            if index in (1, 2):
                lines = wrap_text(c, value, col_width - 4 * mm, size=7)
                for line_index, line in enumerate(lines):
                    c.drawString(x + 2 * mm, y - 5 * mm - line_index * 3.2 * mm, line)
            else:
                c.drawString(x + 2 * mm, y - 5 * mm, value)
            x += col_width
        y -= row_height

    gst = as_number(data.get("gst"))
    total = subtotal + gst
    y -= 5 * mm
    c.setFillColor(TEXT)
    c.setFont("Helvetica", 8)
    c.drawRightString(right, y, f"GST: {money(gst)}")
    y -= 8 * mm
    c.setFillColor(GREEN)
    c.setFont("Helvetica-Bold", 16)
    c.drawRightString(right, y, f"INVOICE TOTAL: {money(total)}")

    y -= 13 * mm
    c.setFillColor(GREEN)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(left, y, "PAYMENT DETAILS")
    y -= 5 * mm
    c.setFillColor(TEXT)
    c.setFont("Helvetica", 8)
    c.drawString(left, y, f"Bank: {text(data.get('bankName'), 'Commonwealth Bank')}")
    c.drawString(left, y - 4 * mm, f"BSB: {text(data.get('bsb'), '067 873')}")
    c.drawString(left, y - 8 * mm, f"Account number: {text(data.get('accountNumber'), '22068085')}")

    c.setFillColor(colors.black)
    c.setFont("Helvetica", 6)
    c.drawString(left, 12 * mm, ".")
    c.showPage()
    c.save()
    return pdf_path


@app.get("/")
def index():
    return render_template("index.html")


@app.post("/api/pdf")
def pdf_api():
    data = request.get_json(silent=True) or {}
    pdf_path = build_invoice(data)
    return send_file(pdf_path, mimetype="application/pdf", as_attachment=request.args.get("download") == "1")


@app.post("/api/download")
def download_pdf():
    data = request.get_json(silent=True) or {}
    pdf_path = build_invoice(data)
    invoice_number = text(data.get("invoiceNumber"), "invoice").replace("/", "-").replace(" ", "-")
    return send_file(
        pdf_path,
        mimetype="application/pdf",
        as_attachment=True,
        download_name=f"{invoice_number}.pdf",
    )


@app.get("/health")
def health():
    return jsonify(status="ok")


if __name__ == "__main__":
    if hasattr(sys, "_MEIPASS"):
        threading.Timer(1.0, lambda: webbrowser.open("http://127.0.0.1:5001")).start()
        app.run(host="127.0.0.1", port=5001, debug=False, use_reloader=False)
    else:
        threading.Timer(1.0, lambda: webbrowser.open("http://127.0.0.1:5001")).start()
        app.run(host="127.0.0.1", port=5001, debug=False, use_reloader=False)
