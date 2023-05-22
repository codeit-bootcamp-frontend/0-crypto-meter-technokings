/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from "react";

import * as PAGE from "@/stores/mockData";
import useUserInputStore from "@/stores/userInputStore";

import InputBoardPresenter from "./InputBoardPresenter";

const MOCK_USER_SELECT_STORE = {
  selectedCoinId: "bitcoin",
  historyDate: new Date(),
  selectMoney: 0,
  selectMoneyToCalc: 0,
};

// eslint-disable-next-line no-unused-vars
const mockAxiosMarkets = (currency, coinsPerPage, pageNum, order) => {
  // eslint-disable-next-line max-len
  // 'BASE_URL/coins/markets?vs_currency=krw&order=market_cap_desc&per_page=180&page=2&sparkline=false&locale=en'
  return new Promise((resolve) => {
    setTimeout(() => {
      // 파라미터 받은대로 요청 후 가져옴
      resolve(PAGE[`${currency}_${pageNum}`]);
    }, 500);
  });
};
/**
 * @param {number} pageNum 페이지네이션 넘버 (180개 단위 페이지)
 * @param {number} coinsPerPage 페이지 당 가져올 코인 갯수(180)
 * @param {string} currency 선택한 화폐 단위
 * @returns axios get 요청으로 가져온 180개 코인 리스트 반환
 */
// eslint-disable-next-line no-unused-vars
const getCoinsByPage = async (pageNum, coinsPerPage, currency) => {
  const response = await mockAxiosMarkets(
    currency,
    coinsPerPage,
    pageNum,
    "market_cap_desc"
  );
  return response;
};

const InputBoard = () => {
  const {
    selectedCoinInfo,
    setSelectedCoinInfo,
    selectedDate,
    selectedMoney,
    selectedCurrency,
  } = useUserInputStore((state) => ({
    selectedCoinInfo: state.selectedCoinInfo,
    setSelectedCoinInfo: state.setSelectedCoinInfo,
    selectedDate: state.selectedDate,
    selectedMoney: state.selectedMoney,
    selectedCurrency: state.selectedCurrency,
  }));
  const [tempUserSelect, setTempUserSelect] = useState(MOCK_USER_SELECT_STORE);
  const [dropdownList, setDropdownList] = useState([]);
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

  const handleChangeSelectedCoin = (newCoinInfo) => {
    setSelectedCoinInfo(newCoinInfo);
  };

  useEffect(() => {
    const getDropdownList = async () => {
      const response = await getCoinsByPage(
        1,
        import.meta.VITE_COINS_PER_PAGE,
        "krw"
      );
      return response.map((coinInfo) => ({
        id: coinInfo.id,
        name: coinInfo.name,
        imageUrl: coinInfo.image,
      }));
    };

    getDropdownList().then((coins) => setDropdownList(coins));
  }, []);

  const InputBordPresenterProps = {
    selectedCoinInfo,
    selectedDate,
    selectedMoney,
    selectedCurrency,
    selectMoneyToCalc: tempUserSelect.selectMoneyToCalc,
    dropdownCoinOptionList: dropdownList,
    onSubmit: handleSubmit,
    onChangeMoney: handleChangeSelectMoney,
    onChangeDate: handleChangeHistoryDate,
    onChangeCoin: handleChangeSelectedCoin,
  };
  return <InputBoardPresenter {...InputBordPresenterProps} />;
};

export default InputBoard;
