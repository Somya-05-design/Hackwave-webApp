@echo off
echo 🚀 Setting up Zeda.io Clone Project...
echo ======================================

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ first.
    echo    Visit: https://nodejs.org/
    pause
    exit /b 1
)

REM Check Node.js version
for /f "tokens=1,2 delims=." %%a in ('node --version') do set NODE_VERSION=%%a
set NODE_VERSION=%NODE_VERSION:~1%
if %NODE_VERSION% lss 18 (
    echo ❌ Node.js version 18+ is required. Current version: 
    node --version
    echo    Please upgrade Node.js to continue.
    pause
    exit /b 1
)

echo ✅ Node.js 
node --version
echo detected

REM Check if npm is installed
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm is not installed. Please install npm first.
    pause
    exit /b 1
)

echo ✅ npm 
npm --version
echo detected

REM Install dependencies
echo 📦 Installing dependencies...
npm install

if %errorlevel% equ 0 (
    echo ✅ Dependencies installed successfully!
) else (
    echo ❌ Failed to install dependencies. Please check the error above.
    pause
    exit /b 1
)

REM Create .env.local if it doesn't exist
if not exist .env.local (
    echo 🔧 Creating .env.local file...
    (
        echo # Environment variables for Zeda.io Clone
        echo NEXT_PUBLIC_APP_NAME=Zeda Clone
        echo NEXT_PUBLIC_APP_URL=http://localhost:3000
    ) > .env.local
    echo ✅ .env.local created
)

echo.
echo 🎉 Setup completed successfully!
echo.
echo To start the development server, run:
echo    npm run dev
echo.
echo To build for production, run:
echo    npm run build
echo.
echo To start production server, run:
echo    npm start
echo.
echo 🌐 Open http://localhost:3000 in your browser
echo.
echo 📚 Check README.md for more information
pause
