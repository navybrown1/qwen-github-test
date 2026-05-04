import React from 'react';
import './SummaryCards.css';

const SummaryCards = ({ summary }) => {
  const cards = [
    {
      label: 'Starting Price',
      value: `$${summary.startPrice}`,
      subtext: 'May 2025',
      icon: '📍'
    },
    {
      label: 'Ending Price',
      value: `$${summary.endPrice}`,
      subtext: 'May 2026',
      icon: '🏁'
    },
    {
      label: 'Highest Price',
      value: `$${summary.highestPrice}`,
      subtext: 'Peak during period',
      icon: '📈'
    },
    {
      label: 'Lowest Price',
      value: `$${summary.lowestPrice}`,
      subtext: 'Lowest point',
      icon: '📉'
    },
    {
      label: 'Overall Change',
      value: `${summary.overallChange > 0 ? '+' : ''}$${summary.overallChange}`,
      subtext: `${summary.overallChangePercent}%`,
      icon: summary.overallChange >= 0 ? '↗️' : '↘️',
      trendClass: summary.overallChange > 0 ? 'positive' : summary.overallChange < 0 ? 'negative' : 'neutral'
    }
  ];

  return (
    <div className="summary-cards-container">
      {cards.map((card, index) => (
        <div 
          key={index} 
          className={`summary-card ${card.trendClass || ''}`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="card-icon">{card.icon}</div>
          <div className="card-content">
            <span className="card-label">{card.label}</span>
            <span className="card-value">{card.value}</span>
            <span className="card-subtext">{card.subtext}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;
