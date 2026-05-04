import React from 'react';
import './SourceNote.css';

const SourceNote = ({ source }) => {
  return (
    <div className="source-note-container">
      <div className="data-disclaimer">
        <span className="disclaimer-icon">⚠️</span>
        <span className="disclaimer-text">
          <strong>Sample data used for dashboard demonstration.</strong> Replace with verified EIA or AAA monthly data before publication.
        </span>
      </div>
      
      <div className="sources-section">
        <h4>Recommended Data Sources</h4>
        <ul>
          {source.recommendedSources.map((src, index) => (
            <li key={index}>{src}</li>
          ))}
        </ul>
      </div>
      
      <p className="note-text">
        Data represents average regular gasoline prices in New York State. 
        Prices are per gallon in USD.
      </p>
    </div>
  );
};

export default SourceNote;
