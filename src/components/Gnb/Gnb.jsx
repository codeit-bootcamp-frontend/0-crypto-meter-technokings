import React, { useState } from "react";

import useUserInputStore from "@/stores/userInputStore";

import GnbPresenter from "./GnbPresenter";

const Gnb = () => {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const { selectedCurrency, setSelectedCurrency, resetAll } = useUserInputStore(
    (state) => ({
      selectedCurrency: state.selectedCurrency,
      setSelectedCurrency: state.setSelectedCurrency,
      resetAll: state.resetAll,
    })
  );
  const handleHistoryClick = () => {
    setIsHistoryOpen((prev) => !prev);
  };

  return (
    <GnbPresenter
      isHistoryOpen={isHistoryOpen}
      onResetClick={resetAll}
      onHistoryClick={handleHistoryClick}
      selectedCurrency={selectedCurrency}
      onSelectOption={setSelectedCurrency}
    />
  );
};

export default Gnb;
