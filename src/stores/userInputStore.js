import { create } from "zustand";

import { getHistory } from "@/services/api";
import formatDateToString from "@/utils/formatDate";
import formatMoneyToString from "@/utils/formatMoney";

/**
 *
 * @param {number} coinId
 * @param {string} dateString
 * @param {string} currency
 * @example getPriceAtDate("bitcoin", "18-05-2023", "krw") => 20982847.247772843
 * @returns 해당 코인의 해당 날짜의 가격을 화폐단위로 리턴
 */
const getPriceAtDate = async (coinId, dateString, currency) => {
  const response = await getHistory(coinId, dateString);
  if (response.market_data === undefined) {
    const parts = dateString.split("-");
    const day = parts[0];
    const month = parts[1];
    const year = parts[2];

    const formattedDate = `${year}년 ${month}월 ${day}일`;
    throw new Error(`${formattedDate}에 해당 코인 가격 정보가 없습니다.`);
  }
  const price = response.market_data.current_price[currency];
  return price.toFixed(2);
};

const userInputStore = (set, get) => ({
  // default: BitCoin
  selectedCoinInfo: {
    id: "bitcoin",
    name: "Bitcoin",
    imageUrl:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
  },
  setSelectedCoinInfo: (newCoinInfo) => {
    set(() => ({ selectedCoinInfo: newCoinInfo }));
  },
  // default: 5년 전 오늘 날짜
  selectedDate: (() => {
    const today = new Date();
    const fiveYearsAgo = new Date(today.toLocaleDateString());

    fiveYearsAgo.setFullYear(today.getFullYear() - 5);
    return fiveYearsAgo;
  })(),
  setSelectedDate: (newDate) => {
    set(() => ({ selectedDate: newDate }));
  },
  selectedMoney: 0,
  setSelectedMoney: (newMoney) => {
    set(() => ({ selectedMoney: newMoney }));
  },
  calculatedMoney: -1,
  setCalculatedMoney: (calcResult) => {
    set(() => ({
      calculatedMoney: calcResult,
    }));
  },
  selectedCurrency: "krw",
  setSelectedCurrency: (newCurrency) => {
    set(() => ({ selectedCurrency: newCurrency }));
  },
  /**
   * @description userInputStore의 상태값들을 토대로 사용자가 입력한 금액이 지금은 얼마가 되었는지 계산
   */
  calculateMoney: async (inputCoin, inputMoney, inputDate) => {
    const { selectedCurrency } = get();
    // API 요청을 통해 선택한 시점의 가격과 현재 가격을 가져옴
    const todayDate = new Date();
    const querifiedSelectedDate = formatDateToString(inputDate, true); // dd-MM-yyyy 형태로 포맷
    const querifiedTodayDate = formatDateToString(todayDate, true);
    const coinPriceResponses = await Promise.all([
      getPriceAtDate(inputCoin.id, querifiedSelectedDate, selectedCurrency),
      getPriceAtDate(inputCoin.id, querifiedTodayDate, selectedCurrency),
    ]);
    const [beforePrice, todayPrice] = coinPriceResponses;
    // calculatedMoney 를 계산: 오늘 가격 * (selectedMoney / 선택한 날짜의 가격)
    return Number((todayPrice * (inputMoney / beforePrice)).toFixed(2));
  },
  /**
   * @param {Date} pastDate 사용자 입력 과거 날짜
   * @param {Date} futureDate 게산한 날짜
   * @param {number} pastMoney 사용자 입력 과거 금액
   * @param {number} futureMoney 계산한 현재 가치
   * @param {string} coinName 코인 이름
   * @param {string} currency 화폐단위
   * @description 로컬 스토리지에 검색 기록을 저장
   */
  saveRecord: (
    pastDate,
    futureDate,
    pastMoney,
    futureMoney,
    coinInfo,
    currency
  ) => {
    // records 가 null이면 빈 배열로 시작
    const storedRecords = JSON.parse(localStorage.getItem("records")) || [];
    // 새로운 레코드 생성
    const newRecord = {
      id: storedRecords.length,
      coinInfo: {
        name: coinInfo.name,
        imageUrl: coinInfo.imageUrl,
      },
      before: {
        dateString: formatDateToString(pastDate),
        moneyString: formatMoneyToString(Math.round(pastMoney), currency),
      },
      after: {
        dateString: formatDateToString(futureDate),
        moneyString: formatMoneyToString(Math.round(futureMoney), currency),
      },
      currency,
    };

    // 새로운 레코드를 배열에 추가
    storedRecords.push(newRecord);

    // 업데이트된 배열을 다시 로컬 스토리지에 저장
    localStorage.setItem("records", JSON.stringify(storedRecords));
  },
  /**
   * @description userInputStore 상태들을 전부 초기화
   */
  resetAll: () => {
    // store의 초기값으로 리셋
    set({
      selectedCoinInfo: {
        id: "bitcoin",
        name: "Bitcoin",
        imageUrl:
          "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
      },
      selectedDate: (() => {
        const today = new Date();
        const fiveYearsAgo = new Date(today.toLocaleDateString());
        fiveYearsAgo.setFullYear(today.getFullYear() - 5);
        return fiveYearsAgo;
      })(),
      selectedMoney: 0,
      calculatedMoney: -1,
      selectedCurrency: "krw",
    });
  },
});

const useUserInputStore = create(userInputStore);
export default useUserInputStore;
