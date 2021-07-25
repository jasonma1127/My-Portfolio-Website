import React from "react";
import PortfoliosCard from "../Components/PortfoliosCard";
import Title from "../Components/Title";

function PortfoliosPage() {
  return (
    <div className="portfolios-page">
      <div className="title-section">
        <Title title="portfolios" span="portfolios" />
      </div>
      <div className="content-section">
        <PortfoliosCard title="Project A" description="This is a great project" />
        <PortfoliosCard title="Project B" description="This is a great project" />
        <PortfoliosCard title="Project C" description="This is a great project" />
        <PortfoliosCard title="Project D" description="This is a great project" />
        <PortfoliosCard title="Project E" description="This is a great project" />
        <PortfoliosCard title="Project F" description="This is a great project" />
      </div>
    </div>
  );
}

export default PortfoliosPage;
