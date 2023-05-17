import React, { useState } from "react";

import GnbPresenter from "./GnbPresenter";

const Gnb = () => {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const handleHistoryClick = () => {
    setIsHistoryOpen((prev) => !prev);
  };

  const handleResetClick = () => {
    // todo: 전역 userStore 초기화
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
