import React from 'react';
import './App.css';
import SummaryCards from './components/SummaryCards';
import PriceChart from './components/PriceChart';
import DataTable from './components/DataTable';
import Insights from './components/Insights';
import SourceNote from './components/SourceNote';
import { newYorkGasPrices, calculateSummary, dataSource } from './data/newYorkGasPrices';

function App() {
  const summary = calculateSummary(newYorkGasPrices);

  return (
    <div className="dashboard">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>
            <span className="hero-icon">⛽</span>
            New York Gasoline Prices
          </h1>
          <p className="hero-subtitle">
            Interactive Dashboard: May 2025 — May 2026
          </p>
          <div className="hero-badge">
            Real-time Price Tracking & Analysis
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Summary Cards */}
        <section className="section">
          <SummaryCards summary={summary} />
        </section>

        {/* Price Chart */}
        <section className="section">
          <PriceChart data={newYorkGasPrices} />
        </section>

        {/* Data Table */}
        <section className="section">
          <DataTable data={newYorkGasPrices} />
        </section>

        {/* Insights */}
        <section className="section">
          <Insights data={newYorkGasPrices} />
        </section>

        {/* Source Note */}
        <section className="section">
          <SourceNote source={dataSource} />
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>Dashboard created for demonstration purposes</p>
      </footer>
    </div>
  );
}

export default App;
