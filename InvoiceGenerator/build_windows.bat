@echo off
setlocal
cd /d "%~dp0"

python --version >nul 2>&1
if errorlevel 1 (
    echo Python is required. Install Python 3 from python.org and enable "Add Python to PATH".
    pause
    exit /b 1
)

python -m pip install --upgrade pip
python -m pip install -r requirements.txt
python -m PyInstaller --noconfirm --clean invoice_generator.spec

if exist "dist\HummbleCare-Invoice-Generator.exe" (
    echo.
    echo Build complete:
    echo %~dp0dist\HummbleCare-Invoice-Generator.exe
) else (
    echo.
    echo Build failed. Review the messages above.
)
pause
