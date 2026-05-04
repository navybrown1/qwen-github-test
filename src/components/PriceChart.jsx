import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area } from 'recharts';
import './PriceChart.css';

const PriceChart = ({ data }) => {
  const [viewMode, setViewMode] = useState('line');

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const price = payload[0].value;
      const prevData = data.find(d => d.month === label);
      const change = prevData?.change || 0;
      
      return (
        <div className="custom-tooltip">
          <p className="tooltip-label">{label}</p>
          <p className="tooltip-price">${price.toFixed(2)}</p>
          <p className={`tooltip-change ${change >= 0 ? 'positive' : 'negative'}`}>
            {change >= 0 ? '+' : ''}${change.toFixed(2)} from previous month
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="chart-container">
      <div className="chart-header">
        <h3>Price Trend Over Time</h3>
        <div className="view-toggle">
          <button 
            className={viewMode === 'line' ? 'active' : ''}
            onClick={() => setViewMode('line')}
          >
            Line
          </button>
          <button 
            className={viewMode === 'area' ? 'active' : ''}
            onClick={() => setViewMode('area')}
          >
            Area
          </button>
        </div>
      </div>
      
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              dataKey="month" 
              stroke="rgba(255,255,255,0.5)"
              tick={{ fontSize: 12 }}
              interval={0}
              angle={-45}
              textAnchor="end"
              height={60}
            />
            <YAxis 
              stroke="rgba(255,255,255,0.5)"
              tick={{ fontSize: 12 }}
              domain={['dataMin - 0.2', 'dataMax + 0.2']}
              tickFormatter={(value) => `$${value.toFixed(2)}`}
            />
            <Tooltip content={<CustomTooltip />} />
            {viewMode === 'line' ? (
              <Line 
                type="monotone" 
                dataKey="price" 
                stroke="#8b5cf6" 
                strokeWidth={3}
                dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 5 }}
                activeDot={{ r: 7, fill: '#a78bfa' }}
              />
            ) : (
              <Area 
                type="monotone" 
                dataKey="price" 
                stroke="#8b5cf6" 
                strokeWidth={3}
                fill="url(#colorPrice)"
                dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 5 }}
                activeDot={{ r: 7, fill: '#a78bfa' }}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PriceChart;
