import React from 'react';
import './Insights.css';

const Insights = ({ data }) => {
  const findBiggestMovements = (data) => {
    let biggestIncrease = { ...data[0], type: 'increase' };
    let biggestDecrease = { ...data[0], type: 'decrease' };

    data.forEach((item) => {
      if (item.change > biggestIncrease.change) {
        biggestIncrease = { ...item, type: 'increase' };
      }
      if (item.change < biggestDecrease.change) {
        biggestDecrease = { ...item, type: 'decrease' };
      }
    });

    return { biggestIncrease, biggestDecrease };
  };

  const { biggestIncrease, biggestDecrease } = findBiggestMovements(data);

  return (
    <div className="insights-container">
      <h3>Key Insights</h3>
      
      <div className="insights-grid">
        <div className="insight-card highlight-increase">
          <div className="insight-icon">📈</div>
          <div className="insight-content">
            <span className="insight-title">Biggest Price Increase</span>
            <span className="insight-detail">
              {biggestIncrease.month}: +${biggestIncrease.change.toFixed(2)}
            </span>
            <span className="insight-description">
              This was the largest month-over-month increase during the period.
            </span>
          </div>
        </div>

        <div className="insight-card highlight-decrease">
          <div className="insight-icon">📉</div>
          <div className="insight-content">
            <span className="insight-title">Biggest Price Decrease</span>
            <span className="insight-detail">
              {biggestDecrease.month}: ${biggestDecrease.change.toFixed(2)}
            </span>
            <span className="insight-description">
              This was the largest month-over-month decrease during the period.
            </span>
          </div>
        </div>

        <div className="insight-card full-width">
          <div className="insight-icon">💡</div>
          <div className="insight-content">
            <span className="insight-title">Price Volatility Analysis</span>
            <span className="insight-description">
              Gas prices in New York showed typical seasonal patterns during this period. 
              Summer months often see higher demand due to travel, while winter months 
              may experience lower prices. External factors such as crude oil prices, 
              refinery capacity, and regional supply dynamics also influence price movements.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
