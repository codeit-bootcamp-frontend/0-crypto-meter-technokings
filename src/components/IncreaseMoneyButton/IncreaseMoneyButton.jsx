import React from "react";

import IncreaseMoneyButtonContainer from "./IncreaseMoneyButtonContainer";

const IncreaseMoneyButton = ({ money = 100000 }) => {
  return <IncreaseMoneyButtonContainer money={money} />;
};

export default IncreaseMoneyButton;
