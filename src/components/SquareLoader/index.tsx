import React from "react";

const SquareLoader: React.FC = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader-grid">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className={`square square-${i + 1}`}></div>
        ))}
      </div>
    </div>
  );
};

export default SquareLoader;
