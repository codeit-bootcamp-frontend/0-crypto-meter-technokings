import { produce } from "immer";
import { create } from "zustand";

import * as PAGE from "./mockData";

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
const getCoinsByPage = async (pageNum, coinsPerPage, currency) => {
  const response = await mockAxiosMarkets(
    currency,
    coinsPerPage,
    pageNum,
    "market_cap_desc"
  );
  return response;
};

const coinStore = (set, get) => ({
  coinDB: {},
  /**
   * @param {number} pagiNationNum
   * @param {string} currency
   * @returns {boolean} 인자로 받은 페이지네이션 넘버에 해당하는 페이지네이션이 coinDB에 있는지 여부를 반환
   */
  checkCache: (pagiNationNum, currency) => {
    if (pagiNationNum === 0) return true;
    const { coinDB } = get();
    if (`${currency}_${pagiNationNum}` in coinDB) return true;
    return false;
  },
  /**
   * @param {coinObject[]} coinList 180개 코인 객체가 담긴 배열
   * @param {number} paginationNum 해당 배열이 몇 번째 페이지에 저장될 지
   * @param {string} currency 화폐 단위
   * @description 파라미터로 받은 정보를 coinDB에 저장
   */
  saveDataInCoinDB: (coinList, paginationNum, currency) => {
    set(
      produce((draft) => {
        // eslint-disable-next-line no-param-reassign
        draft.coinDB[`${currency}_${paginationNum}`] = coinList;
      })
    );
  },
  /**
   * @param {number} pageNum 테이블에 있는 페이지 번호 (30개가 한 페이지)
   * @param {string} currency 선택한 화폐 단위
   * @returns {coinObject[]} 파라미터로 받은 페이지 번호를 토대로 coinDB에서 30개를 추출한 배열 반환
   */
  getCoinListByPageNum: (pageNum, currency) => {
    const { coinDB } = get();
    const paginationNum = Math.ceil(
      pageNum / import.meta.env.VITE_PAGES_PER_PAGINATION
    );
    const startIdx =
      ((pageNum - 1) % import.meta.env.VITE_PAGES_PER_PAGINATION) *
      import.meta.env.VITE_COINS_PER_PAGE;
    const coinList = coinDB[`${currency}_${paginationNum}`].slice(
      startIdx,
      startIdx + import.meta.env.VITE_COINS_PER_PAGE
    );
    return coinList;
  },
  /**
   * @param {number} pageNum 테이블에 있는 페이지 번호 (30개가 한 페이지)
   * @param {string} currency 선택한 화폐 단위
   * @description 요청한 페이지가 coinDB에 있는지 확인 후 없으면 api요청을 통해 coinDB를 갱신 후 요청한 페이지를 반환
   */
  getPage: async (pageNum, currency) => {
    const { checkCache, saveDataInCoinDB, getCoinListByPageNum } = get();
    // 캐시 체킹 대상 페이지네이션 넘버 2개 추출
    const pagesPerPagination = import.meta.env.VITE_PAGES_PER_PAGINATION;
    // 6, 12와 같이 6과 나누어 떨어지는 숫자들은 다르게 처리
    const currentPaginationNum =
      pageNum % pagesPerPagination !== 0
        ? Math.ceil(pageNum / pagesPerPagination)
        : pageNum / pagesPerPagination;
    const previousPaginationNum =
      pageNum % pagesPerPagination !== 0
        ? Math.floor(pageNum / pagesPerPagination)
        : pageNum / pagesPerPagination - 1;
    // 캐시 미스가 나면 api요청을 통해 없는 페이지네이션을 가져와서 coinDB에 저장
    if (!checkCache(previousPaginationNum, currency)) {
      try {
        const newPagination = await getCoinsByPage(
          previousPaginationNum,
          import.meta.env.VITE_COINS_PER_PAGE,
          currency
        );
        saveDataInCoinDB(newPagination, previousPaginationNum, currency);
      } catch (err) {
        throw new Error(err);
      }
    }
    if (!checkCache(currentPaginationNum, currency)) {
      try {
        const newPagination = await getCoinsByPage(
          currentPaginationNum,
          import.meta.env.VITE_COINS_PER_PAGE,
          currency
        );
        saveDataInCoinDB(newPagination, currentPaginationNum, currency);
      } catch (err) {
        throw new Error(err);
      }
    }
    return getCoinListByPageNum(pageNum, currency);
  },
});

const useCoinStore = create(coinStore);
export default useCoinStore;
