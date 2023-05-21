import { create } from "zustand";

import formatDateToString from "@/utils/formatDate";
import formatMoneyToString from "@/utils/formatMoney";

import { MOCK_HISTORY_DATA_AFTER, MOCK_HISTORY_DATA_BEFORE } from "./mockData";

const mockAxiosHistory = (coinId, date) => {
  // https://api.coingecko.com/api/v3/coins/bitcoin/history?date=30-12-2022
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        date === "21-05-2023"
          ? MOCK_HISTORY_DATA_AFTER
          : MOCK_HISTORY_DATA_BEFORE
      );
    }, 500);
  });
};
/**
 *
 * @param {number} coinId
 * @param {string} dateString
 * @param {string} currency
 * @example getPriceAtDate("bitcoin", "18-05-2023", "krw") => 20982847.247772843
 * @returns 해당 코인의 해당 날짜의 가격을 화폐단위로 리턴
 */
const getPriceAtDate = async (coinId, dateString, currency) => {
  const response = await mockAxiosHistory(coinId, dateString);
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
  // default: 5년 전 오늘 날짜
  selectedDate: (() => {
    const today = new Date();
    const fiveYearsAgo = new Date(today.toLocaleDateString());

    fiveYearsAgo.setFullYear(today.getFullYear() - 5);
    return fiveYearsAgo;
  })(),
  selectedMoney: 1500,
  calculatedMoney: -1,
  selectedCurrency: "krw",
  /**
   * @description userInputStore의 상태값들을 토대로 사용자가 입력한 금액이 지금은 얼마가 되었는지 계산
   */
  calculateMoney: async () => {
    try {
      const {
        selectedDate,
        selectedMoney,
        selectedCoinInfo,
        selectedCurrency,
        saveRecord,
      } = get();
      // API 요청을 통해 선택한 시점의 가격과 현재 가격을 가져옴
      const todayDate = new Date();
      const querifiedSelectedDate = formatDateToString(selectedDate, true); // dd-MM-yyyy 형태로 포맷
      const querifiedTodayDate = formatDateToString(todayDate, true);
      const coinPriceResponses = await Promise.all([
        getPriceAtDate(
          selectedCoinInfo.id,
          querifiedSelectedDate,
          selectedCurrency
        ),
        getPriceAtDate(
          selectedCoinInfo.id,
          querifiedTodayDate,
          selectedCurrency
        ),
      ]);
      const [beforePrice, todayPrice] = coinPriceResponses;
      // calculatedMoney 를 계산: 오늘 가격 * (selectedMoney / 선택한 날짜의 가격)
      const calculatedMoney = (
        todayPrice *
        (selectedMoney / beforePrice)
      ).toFixed(2);
      set({ calculatedMoney });
      saveRecord(
        selectedDate,
        todayDate,
        selectedMoney,
        calculatedMoney,
        selectedCoinInfo.name,
        selectedCurrency
      );
    } catch (error) {
      throw new Error(error);
    }
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
    coinName,
    currency
  ) => {
    // records 가 null이면 빈 배열로 시작
    const storedRecords = JSON.parse(localStorage.getItem("records")) || [];
    // 새로운 레코드 생성
    const newRecord = {
      id: storedRecords.length,
      coinName,
      past: {
        date: formatDateToString(pastDate),
        money: formatMoneyToString(Math.round(pastMoney), currency),
      },
      future: {
        date: formatDateToString(futureDate),
        money: formatMoneyToString(Math.round(futureMoney), currency),
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
