/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import { DUMMY_OPTIONS } from "./Dropdown/Dropdown";
import InputBoardPresenter from "./InputBoardPresenter";

const InputBoard = () => {
  const subscribedUserInput = {
    // TODO: zustand userInput store에서 구독할 상태들
    selectedCoinId: "Bitcoin",
    historyDate: "",
    selectMoney: 0,
    selectMoneyToCalc: 0,
  };
  const subscribedCoinList = {
    // TODO: zustand coinList store에서 구독할 상태
    dropdownCoinOptionList: DUMMY_OPTIONS,
  };
  const handleClickSubmit = (e) => {
    e.preventDefault();
    // TOOD: selectMoney 기반으로 계산해서 store에 update
  };
  const { selectedCoinId, historyDate, selectMoney, selectMoneyToCalc } =
    subscribedUserInput;
  const { dropdownCoinOptionList } = subscribedCoinList;
  const InputBordPresenterProps = {
    selectedCoinId,
    historyDate,
    selectMoney,
    selectMoneyToCalc,
    dropdownCoinOptionList,
    handleClickSubmit,
  };

  return <InputBoardPresenter {...InputBordPresenterProps} />;
};

export default InputBoard;
