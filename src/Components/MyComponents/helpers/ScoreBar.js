import React from "react";

const ScoreBar = ({ onSelect, setScoreBarVisible }) => {
    const scores = [1, 2, 3, 4, 5];
    
    return (
      <div className="score-bar">
        {scores.map(score => (
          <button
            key={score}
            className="score-button"
            onClick={() => onSelect(score)}
          >
            {score}
          </button>
        ))}
        
      </div>
    );
  };
  

export default ScoreBar;