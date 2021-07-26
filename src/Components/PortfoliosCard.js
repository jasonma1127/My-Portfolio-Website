import React from "react";

function PortfoliosCard(props) {
  return (
    <div className="portfolios-card">
      <div className="portfolios-content">
        <h2 className="portfolios-title">{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <div className="portfolios-btn">
        <button>Check It Out</button>
      </div>
    </div>
  );
}

export default PortfoliosCard;
