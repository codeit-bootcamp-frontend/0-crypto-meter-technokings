import React, { useState } from "react";

import useUserInputStore from "@/stores/userInputStore";

import GnbPresenter from "./GnbPresenter";

const Gnb = () => {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const { selectedCurrency, setSelectedCurrency } = useUserInputStore(
    (state) => ({
      selectedCurrency: state.selectedCurrency,
      setSelectedCurrency: state.setSelectedCurrency,
    })
  );
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
      selectedCurrency={selectedCurrency}
      onSelectOption={setSelectedCurrency}
    />
  );
};

export default Gnb;
