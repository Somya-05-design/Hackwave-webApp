#!/bin/bash

echo "🚀 Setting up Zeda.io Clone Project..."
echo "======================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    echo "   Please upgrade Node.js to continue."
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ npm $(npm -v) detected"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
else
    echo "❌ Failed to install dependencies. Please check the error above."
    exit 1
fi

# Create .env.local if it doesn't exist
if [ ! -f .env.local ]; then
    echo "🔧 Creating .env.local file..."
    cat > .env.local << EOF
# Environment variables for Zeda.io Clone
NEXT_PUBLIC_APP_NAME=Zeda Clone
NEXT_PUBLIC_APP_URL=http://localhost:3000
EOF
    echo "✅ .env.local created"
fi

echo ""
echo "🎉 Setup completed successfully!"
echo ""
echo "To start the development server, run:"
echo "   npm run dev"
echo ""
echo "To build for production, run:"
echo "   npm run build"
echo ""
echo "To start production server, run:"
echo "   npm start"
echo ""
echo "🌐 Open http://localhost:3000 in your browser"
echo ""
echo "📚 Check README.md for more information"
