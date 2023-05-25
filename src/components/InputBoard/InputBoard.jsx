/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useState } from "react";

import styled from "styled-components";

import DROPDOWN_LIST from "@/data/dropdownList";
import useOutsideClick from "@/hooks/useOutsideClick";
import useUserInputStore from "@/stores/userInputStore";
import scrollTop from "@/utils/scrollTop";

import InputBoardPresenter from "./InputBoardPresenter";

const InputBoard = () => {
  const {
    selectedCoinInfo,
    setSelectedCoinInfo,
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
    setSelectedCoinInfo: state.setSelectedCoinInfo,
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
  const [errorMsg, setErrorMsg] = useState("");
  const modalRef = useRef(null);

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
        modalRef.current?.showModal();
        setErrorMsg(err.message);
        resetAll();
      });
  };
  useOutsideClick(modalRef, () => {});
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
    onSelectOption: setSelectedCoinInfo,
  };
  return (
    <>
      <InputBoardPresenter {...InputBordPresenterProps} />
      <S.Dialog
        ref={modalRef}
        onClick={() => {
          modalRef.current.close();
        }}
      >
        {errorMsg}
      </S.Dialog>
    </>
  );
};

const S = {};

S.Dialog = styled.dialog`
  border: none;
  border-radius: 12px;
  padding: 80px 20px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.38);
  animation: showModal 1s;
  &::backdrop {
    background: rgba(0, 0, 0, 0.5);
  }

  @keyframes showModal {
    0% {
      transform: scale(0);
    }
    60% {
      transform: scale(1.1);
    }
    80% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(1);
    }
  }
  &.hide {
    animation: hideModal 1s;
  }
  @keyframes hideModal {
    0% {
      transform: scale(1);
    }
    20% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(0);
    }
  }
`;
export default InputBoard;
