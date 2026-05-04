import React from 'react';
import './SourceNote.css';

const SourceNote = ({ source }) => {
  return (
    <div className="source-note-container">
      <div className="data-disclaimer verified">
        <span className="disclaimer-icon">✅</span>
        <span className="disclaimer-text">
          <strong>Verified public data loaded.</strong> {source.note}
        </span>
      </div>
      
      <div className="sources-section">
        <h4>Data Sources</h4>
        <ul>
          {source.recommendedSources.map((src, index) => (
            <li key={index}>{src}</li>
          ))}
        </ul>
      </div>
      
      <p className="note-text">
        Prices represent regular gasoline in New York, shown in dollars per gallon. Local station prices can be higher or lower than statewide averages because of taxes, supply, brand, location, and timing.
      </p>
    </div>
  );
};

export default SourceNote;
