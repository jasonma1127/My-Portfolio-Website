import React from "react";

function PortfoliosCard(props) {
  return (
    <div className="portfolios-card">
      <div className="portfolios-card-inner">
        <div className="portfolios-card-front">
          <div className="portfolios-content">
            <h2 className="portfolios-title">{props.title}</h2>
            <p>{props.description}</p>
          </div>
        </div>
        <div className="portfolios-card-back">
          <button>Check It Out</button>
        </div>
      </div>
    </div>
  );
}

export default PortfoliosCard;
