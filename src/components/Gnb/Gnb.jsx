import React, { useState } from "react";

import GnbPresenter from "./GnbPresenter";

const Gnb = ({ handleResetClick = () => {} }) => {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const handleHistoryClick = () => {
    setIsHistoryOpen((prev) => !prev);
    // show modal
  };
  return (
    <GnbPresenter
      isHistoryOpen={isHistoryOpen}
      onResetClick={handleResetClick}
      onHistoryClick={handleHistoryClick}
    />
  );
};

export default Gnb;
