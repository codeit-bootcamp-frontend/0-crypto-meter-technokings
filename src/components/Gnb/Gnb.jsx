import React, { useState } from "react";

import useUserInputStore from "@/stores/userInputStore";
import scrollTop from "@/utils/scrollTop";

import GnbPresenter from "./GnbPresenter";

const Gnb = () => {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const {
    selectedCurrency,
    setSelectedCurrency,
    resetAll,
    // setSelectedMoney,
    setCalculatedMoney,
    calculatedMoney,
    setIsResetClicked,
    setIsCurrencyChanged,
  } = useUserInputStore((state) => ({
    selectedCurrency: state.selectedCurrency,
    setSelectedCurrency: state.setSelectedCurrency,
    resetAll: state.resetAll,
    setSelectedMoney: state.setSelectedMoney,
    setCalculatedMoney: state.setCalculatedMoney,
    calculatedMoney: state.calculatedMoney,
    setIsResetClicked: state.setIsResetClicked,
    setIsCurrencyChanged: state.setIsCurrencyChanged,
  }));
  const handleHistoryClick = () => {
    setIsHistoryOpen((prev) => !prev);
  };
  const handleResetClick = () => {
    setIsResetClicked();
    resetAll();
    scrollTop();
  };
  const handleSelectCurrency = (newCurrency) => {
    setSelectedCurrency(newCurrency);
    setIsCurrencyChanged();
    // setSelectedMoney(0);
    if (calculatedMoney !== -1) {
      setCalculatedMoney(0);
    }
  };

  return (
    <GnbPresenter
      isHistoryOpen={isHistoryOpen}
      onResetClick={handleResetClick}
      onHistoryClick={handleHistoryClick}
      selectedCurrency={selectedCurrency}
      onSelectOption={handleSelectCurrency}
    />
  );
};

export default Gnb;
