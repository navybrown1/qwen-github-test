# New York Gasoline Prices Dashboard

An interactive, modern dashboard visualizing gasoline price changes in New York from May 2025 through May 2026.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📊 Features

- **Hero Section** - Strong title with gradient styling
- **Summary Cards** - Starting price, ending price, highest, lowest, and overall change
- **Interactive Line Chart** - Toggle between line and area views with hover tooltips
- **Month-by-Month Table** - Detailed breakdown with trend indicators
- **Key Insights** - Analysis of biggest price movements
- **Source Note** - Data disclaimer and recommended sources

## 🎨 Design

- Dark premium dashboard style
- Smooth gradients and glassmorphism cards
- Responsive layout (mobile-friendly)
- Hover effects and subtle animations
- Professional portfolio-ready design

## 📁 Project Structure

```
src/
├── App.jsx                 # Main application component
├── App.css                 # Dashboard styles
├── index.css               # Global styles
├── main.jsx                # Entry point
├── components/
│   ├── SummaryCards.jsx    # Price summary cards
│   ├── SummaryCards.css
│   ├── PriceChart.jsx      # Interactive chart
│   ├── PriceChart.css
│   ├── DataTable.jsx       # Monthly data table
│   ├── DataTable.css
│   ├── Insights.jsx        # Key insights section
│   ├── Insights.css
│   ├── SourceNote.jsx      # Data source disclaimer
│   └── SourceNote.css
└── data/
    └── newYorkGasPrices.js # Gas price data
```

## ⚠️ Data Notice

This dashboard uses **sample data** for demonstration purposes. Before publication, replace with verified data from:

- U.S. Energy Information Administration (EIA): https://www.eia.gov/petroleum/gasdiesel/
- AAA Gas Prices: https://gasprices.aaa.com/
- New York State Energy Research and Development Authority

## 🛠️ Tech Stack

- **Framework**: React 19 with Vite
- **Charting**: Recharts
- **Package Manager**: npm
- **Styling**: CSS3 with custom properties

## 📄 License

MIT
