So we want to make a simple locally deployed and working pdf invoice generator web app we want a simple UI that allows user to change the field values which will have some defaules in there and then the fields for customer values and thena. table to add in the services and their charges i have a pdf sample invoice template that we want to use and the UI should be simple and easy to use and the only purpose will be to generate the pdf and user can download it we can also maybe give a side by side view for the invoice generator so on left user can keep adding and editing values while on right side can preview the INvoice pdf and then a download button to just download the pdf.
## Run locally

```bash
cd InvoiceGenerator
python3 -m pip install -r requirements.txt
python3 app.py
```

Open `http://127.0.0.1:5001`.

The app is intentionally local-only. Edit business details, invoice details, service details, and NDIS support lines on the left. The PDF preview updates automatically on the right, and **Download PDF** saves the generated invoice.

## Build a Windows `.exe`

### Option 1: Build on a Windows PC

1. Copy the `InvoiceGenerator` folder to the Windows PC.
2. Install Python 3.11 and enable **Add Python to PATH**.
3. Double-click `build_windows.bat`.
4. Share `dist\HummbleCare-Invoice-Generator.exe`.

The user does not need Python or to install anything else. Double-click the `.exe` to start the app; it opens the browser automatically.

### Option 2: Build through GitHub Actions

Use the **Build Windows Invoice Generator** workflow in GitHub Actions, then download the `HummbleCare-Invoice-Generator-Windows` artifact. Gmail can be used to share the downloaded `.exe`.
