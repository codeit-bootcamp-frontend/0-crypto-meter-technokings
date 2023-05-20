import React from "react";

import { SDiv } from "@styles";

const CoinChartCustomTooltip = ({ active, payload, isMobile }) => {
  if (active && payload && payload.length) {
    const { tickDate, tickPrice } = payload[0].payload;
    return (
      <SDiv tooltip br={8} jct col act pd="8px">
        <p
          key="tickDate"
          style={{
            color: "#A2A7B7",
            fontWeight: "500",
            fontSize: isMobile ? "10px" : "12px",
            lineHeight: isMobile ? "12px" : "14px",
            display: "flex",
            alignItems: "center",
            margin: "0px",
          }}
        >
          {tickDate}
        </p>
        <p
          key="tickPrice"
          style={{
            fontWeight: "500",
            fontSize: isMobile ? "13px" : "14px",
            lineHeight: "18px",
            display: "flex",
            alignItems: "center",
            letterSpacing: "-0.3px",
            color: "#FFFFFF",
            margin: "0px",
          }}
        >
          {tickPrice}
        </p>
      </SDiv>
    );
  }
  return null;
};

export default CoinChartCustomTooltip;
