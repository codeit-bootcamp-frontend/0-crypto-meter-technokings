/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import DROPDOWN_LIST from "@/data/dropdownList";
import useUserInputStore from "@/stores/userInputStore";
import scrollTop from "@/utils/scrollTop";

import InputBoardPresenter from "./InputBoardPresenter";

const InputBoard = () => {
  const {
    selectedCoinInfo,
    selectedDate,
    setSelectedDate,
    selectedMoney,
    setSelectedMoney,
    selectedCurrency,
    calculateMoney,
    setCalculatedMoney,
    saveRecord,
    resetAll,
  } = useUserInputStore((state) => ({
    selectedCoinInfo: state.selectedCoinInfo,
    selectedDate: state.selectedDate,
    setSelectedDate: state.setSelectedDate,
    selectedMoney: state.selectedMoney,
    setSelectedMoney: state.setSelectedMoney,
    selectedCurrency: state.selectedCurrency,
    calculateMoney: state.calculateMoney,
    setCalculatedMoney: state.setCalculatedMoney,
    saveRecord: state.saveRecord,
    resetAll: state.resetAll,
  }));

  const increaseMoney = (inc) => {
    setSelectedMoney(selectedMoney + Number(inc));
  };

  const handleSubmit = () => {
    scrollTop();
    calculateMoney()
      .then((res) => {
        setCalculatedMoney(res);
        saveRecord(
          selectedDate,
          new Date(),
          selectedMoney,
          res,
          selectedCoinInfo,
          selectedCurrency
        );
      })
      .catch((err) => {
        alert(err.message);
        resetAll();
      });
  };

  const InputBordPresenterProps = {
    selectedCoinInfo,
    selectedDate,
    selectedMoney,
    selectedCurrency,
    dropdownCoinOptionList: DROPDOWN_LIST,
    onSubmit: handleSubmit,
    onChangeMoney: setSelectedMoney,
    onClickIncreaseMoney: increaseMoney,
    onChangeDate: setSelectedDate,
  };
  return <InputBoardPresenter {...InputBordPresenterProps} />;
};

export default InputBoard;
