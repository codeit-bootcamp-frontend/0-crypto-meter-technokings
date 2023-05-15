import React from "react";

import PriceChangeContainer from "./PriceChangeContainer";

const PriceChange = ({ change = -0.03 }) => {
  return <PriceChangeContainer change={change} />;
};

export default PriceChange;
