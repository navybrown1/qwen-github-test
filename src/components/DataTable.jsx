import React from 'react';
import './DataTable.css';

const DataTable = ({ data }) => {
  const getTrendIndicator = (change) => {
    if (change > 0.05) return { symbol: '↑', class: 'up', text: 'Increased' };
    if (change < -0.05) return { symbol: '↓', class: 'down', text: 'Decreased' };
    return { symbol: '→', class: 'stable', text: 'Stable' };
  };

  return (
    <div className="table-container">
      <h3>Month-by-Month Breakdown</h3>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Month</th>
              <th>Price ($/gal)</th>
              <th>Change</th>
              <th>Trend</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => {
              const trend = getTrendIndicator(row.change);
              return (
                <tr key={index} style={{ animationDelay: `${index * 0.05}s` }}>
                  <td className="month-cell">{row.month}</td>
                  <td className="price-cell">${row.price.toFixed(2)}</td>
                  <td className={`change-cell ${trend.class}`}>
                    {row.change >= 0 ? '+' : ''}${row.change.toFixed(2)}
                  </td>
                  <td className="trend-cell">
                    <span className={`trend-badge ${trend.class}`}>
                      {trend.symbol} {trend.text}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
