const form = document.querySelector("#invoiceForm");
const serviceRows = document.querySelector("#serviceRows");
const preview = document.querySelector("#pdfPreview");
const previewStatus = document.querySelector("#previewStatus");
const subtotalDisplay = document.querySelector("#subtotalDisplay");
let previewTimer;
let previewUrl;

const defaultServices = [
  {
    date: "2026-11-06",
    description: "NDIS – Therapy Assistant Level 2 – Direct Service",
    supportItem: "15_008_0118_1_3",
    quantity: "1 hour",
    rate: "86.79",
    rateDisplay: "$86.79",
  },
  {
    date: "2026-11-06",
    description: "Provider travel – labour",
    supportItem: "15_008_0118_1_3_PT",
    quantity: "50 min",
    rate: "43.40",
    rateDisplay: "$43.40/hr",
  },
  {
    date: "2026-11-06",
    description: "Provider travel – non-labour vehicle costs",
    supportItem: "15_799_0118_1_3",
    quantity: "26 km",
    rate: "0.99",
    rateDisplay: "$0.99/km",
  },
];

function parseDate(value) {
  if (!value) return "";
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en-AU", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
}

function parseQuantity(quantity) {
  const match = String(quantity).match(/[\d.]+/);
  return match ? Number(match[0]) : 0;
}

function calculateLineAmount(service) {
  const quantity = parseQuantity(service.quantity);
  const rate = Number(service.rate) || 0;
  if (String(service.quantity).includes("min")) return (quantity / 60) * rate;
  if (String(service.quantity).includes("km")) return quantity * rate;
  return quantity * rate;
}

function calculateSubtotal() {
  return [...serviceRows.querySelectorAll(".service-row")].reduce((total, row) => {
    const quantity = row.querySelector('[name="quantity"]').value;
    const rate = Number(row.querySelector('[name="rate"]').value) || 0;
    let amount;
    if (quantity.toLowerCase().includes("min")) amount = (parseQuantity(quantity) / 60) * rate;
    else if (quantity.toLowerCase().includes("km")) amount = parseQuantity(quantity) * rate;
    else amount = parseQuantity(quantity) * rate;
    return total + amount;
  }, 0);
}

function createServiceRow(service = {}) {
  const row = document.createElement("div");
  row.className = "service-row";
  row.innerHTML = `
    <label>Date<input name="date" type="date" value="${service.date || ""}" /></label>
    <label>Description<input name="description" value="${escapeHtml(service.description || "")}" /></label>
    <label>NDIS support item<input name="supportItem" value="${escapeHtml(service.supportItem || "")}" /></label>
    <label>Quantity<input name="quantity" value="${escapeHtml(service.quantity || "")}" /></label>
    <label>Rate<input name="rate" type="number" min="0" step="0.01" value="${escapeHtml(service.rate || "0")}" /></label>
    <button class="remove-row" type="button" aria-label="Remove service">Remove</button>
  `;
  row.querySelector(".remove-row").addEventListener("click", () => {
    row.remove();
    queuePreview();
  });
  row.querySelectorAll("input").forEach((input) => input.addEventListener("input", queuePreview));
  serviceRows.appendChild(row);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function getFormData() {
  const data = Object.fromEntries(new FormData(form).entries());
  data.invoiceDate = parseDate(data.invoiceDate);
  data.paymentDueDate = parseDate(data.paymentDueDate);
  data.serviceDate = parseDate(data.serviceDate);

  data.services = [...serviceRows.querySelectorAll(".service-row")].map((row) => {
    const quantity = row.querySelector('[name="quantity"]').value;
    const rate = Number(row.querySelector('[name="rate"]').value) || 0;
    const amount = calculateLineAmount({ quantity, rate });
    let rateDisplay = `$${rate.toFixed(2)}`;
    if (quantity.toLowerCase().includes("min")) rateDisplay = `$${rate.toFixed(2)}/hr`;
    if (quantity.toLowerCase().includes("km")) rateDisplay = `$${rate.toFixed(2)}/km`;
    return {
      date: parseDate(row.querySelector('[name="date"]').value),
      description: row.querySelector('[name="description"]').value,
      supportItem: row.querySelector('[name="supportItem"]').value,
      quantity,
      rate,
      rateDisplay,
      amount,
    };
  });
  data.gst = Number(data.gst) || 0;
  subtotalDisplay.value = `$${calculateSubtotal().toFixed(2)}`;
  return data;
}

async function updatePreview() {
  previewStatus.textContent = "Updating...";
  try {
    const response = await fetch("/api/pdf", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(getFormData()),
    });
    if (!response.ok) throw new Error("Could not generate PDF");
    const blob = await response.blob();
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    previewUrl = URL.createObjectURL(blob);
    preview.src = previewUrl;
    previewStatus.textContent = "Up to date";
  } catch (error) {
    previewStatus.textContent = "Preview unavailable";
  }
}

function queuePreview() {
  clearTimeout(previewTimer);
  previewStatus.textContent = "Updating...";
  previewTimer = setTimeout(updatePreview, 350);
}

form.addEventListener("input", queuePreview);
document.querySelector("#addService").addEventListener("click", () => {
  createServiceRow({
    date: "2026-11-06",
    description: "",
    supportItem: "",
    quantity: "1 hour",
    rate: "0",
  });
  queuePreview();
});

document.querySelector("#downloadPdf").addEventListener("click", async () => {
  const response = await fetch("/api/download", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(getFormData()),
  });
  if (!response.ok) return;
  const blob = await response.blob();
  const filename = response.headers
    .get("Content-Disposition")
    ?.match(/filename="?([^"]+)"?/)?.[1] || "invoice.pdf";
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
});

defaultServices.forEach(createServiceRow);
updatePreview();
