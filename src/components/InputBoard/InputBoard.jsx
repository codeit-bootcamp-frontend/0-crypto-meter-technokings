/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";

import useUserInputStore from "@/stores/userInputStore";

import { DUMMY_OPTIONS } from "./Dropdown/Dropdown";
import InputBoardPresenter from "./InputBoardPresenter";

const MOCK_USER_SELECT_STORE = {
  selectedCoinId: "bitcoin",
  historyDate: new Date(),
  selectMoney: 0,
  selectMoneyToCalc: 0,
};

const MOCK_COINLIST_STORE = {
  coinCurrency: "krw",
  dropdownCoinOptionList: DUMMY_OPTIONS,
};

const InputBoard = () => {
  const { selectedCoinInfo, selectedDate, selectedMoney, selectedCurrency } =
    useUserInputStore((state) => ({
      selectedCoinInfo: state.selectedCoinInfo,
      selectedDate: state.selectedDate,
      selectedMoney: state.selectedMoney,
      selectedCurrency: state.selectedCurrency,
    }));

  const [tempUserSelect, setTempUserSelect] = useState(MOCK_USER_SELECT_STORE);
  // eslint-disable-next-line no-unused-vars
  const [tempCoinList, setTempCoinList] = useState(MOCK_COINLIST_STORE);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TOOD: selectMoney, historyDate, 기반으로 계산해서 store에 update
    const newMoney = tempUserSelect.selectMoney * 100; // TODO: 임시값, 추후에 api요청하고 차액을 계산
    setTempUserSelect({
      ...tempUserSelect,
      selectedMoneyToCalc: newMoney,
    });
  };
  // TODO: 아래 임시 세터 함수들 전부 zustand store의 set으로 구현
  const handleChangeHistoryDate = (newDate) => {
    setTempUserSelect({ ...tempUserSelect, historyDate: newDate });
  };

  const handleChangeSelectMoney = (newMoney) => {
    setTempUserSelect({ ...tempUserSelect, selectMoney: newMoney });
  };

  const handleChangeSelectedCoin = (newCoinId) => {
    setTempUserSelect({ ...tempUserSelect, selectedCoinId: newCoinId });
  };

  const InputBordPresenterProps = {
    selectedCoinInfo,
    selectedDate,
    selectedMoney,
    selectedCurrency,
    selectMoneyToCalc: tempUserSelect.selectMoneyToCalc,
    dropdownCoinOptionList: tempCoinList.dropdownCoinOptionList,
    onSubmit: handleSubmit,
    onChangeMoney: handleChangeSelectMoney,
    onChangeDate: handleChangeHistoryDate,
    onChangeCoin: handleChangeSelectedCoin,
  };

  return <InputBoardPresenter {...InputBordPresenterProps} />;
};

export default InputBoard;
