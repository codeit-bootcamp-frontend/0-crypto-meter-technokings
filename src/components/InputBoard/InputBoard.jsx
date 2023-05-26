/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useState, useEffect } from "react";

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
    isResetClicked,
    isCurrencyChanged,
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
    isResetClicked: state.isResetClicked,
    isCurrencyChanged: state.isCurrencyChanged,
  }));
  const [inputMoney, setInputMoney] = useState(0);
  const [inputDate, setInputDate] = useState(() => {
    const today = new Date();
    const fiveYearsAgo = new Date(today.toLocaleDateString());

    fiveYearsAgo.setFullYear(
      today.getFullYear() - Number(import.meta.env.VITE_PAST_YEARS)
    );
    return fiveYearsAgo;
  });
  const [inputCoin, setInputCoin] = useState({
    id: "bitcoin",
    name: "Bitcoin",
    imageUrl:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const modalRef = useRef(null);

  const increaseMoney = (inc) => {
    setInputMoney(inputMoney + Number(inc));
  };
  const resetInput = () => {
    setInputCoin({
      id: "bitcoin",
      name: "Bitcoin",
      imageUrl:
        "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    });
    setInputDate(() => {
      const today = new Date();
      const fiveYearsAgo = new Date(today.toLocaleDateString());

      fiveYearsAgo.setFullYear(
        today.getFullYear() - Number(import.meta.env.VITE_PAST_YEARS)
      );
      return fiveYearsAgo;
    });
    setInputMoney(0);
  };
  const handleSubmit = () => {
    calculateMoney(inputCoin, inputMoney, inputDate)
      .then((res) => {
        scrollTop();
        setCalculatedMoney(res);
        saveRecord(
          selectedDate,
          new Date(),
          selectedMoney,
          res,
          selectedCoinInfo,
          selectedCurrency
        );
        setSelectedCoinInfo(inputCoin);
        setSelectedMoney(inputMoney);
        setSelectedDate(inputDate);
      })
      .catch((err) => {
        modalRef.current?.showModal();
        setErrorMsg(err.message);
      });
  };
  useOutsideClick(modalRef, () => {});
  const InputBordPresenterProps = {
    inputCoinInfo: inputCoin,
    inputDate,
    inputMoney,
    selectedCurrency,
    dropdownCoinOptionList: DROPDOWN_LIST,
    onSubmit: handleSubmit,
    onChangeMoney: setInputMoney,
    onClickIncreaseMoney: increaseMoney,
    onChangeDate: setInputDate,
    onSelectOption: setInputCoin,
  };
  useEffect(() => {
    setInputDate(selectedDate);
  }, [selectedDate]);
  useEffect(() => {
    setInputMoney(selectedMoney);
  }, [selectedMoney]);
  useEffect(() => {
    setInputCoin(selectedCoinInfo);
  }, [selectedCoinInfo]);
  useEffect(() => {
    resetInput();
  }, [isResetClicked]);
  useEffect(() => {
    setInputMoney(0);
  }, [isCurrencyChanged]);
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
