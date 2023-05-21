import { create } from "zustand";

import * as PAGE from "./mockData";

const mockAxiosMarkets = (currency, coinsPerPage, pageNum) => {
  // eslint-disable-next-line max-len
  // 'BASE_URL/coins/markets?vs_currency=krw&order=market_cap_desc&per_page=180&page=2&sparkline=false&locale=en'
  return new Promise((resolve) => {
    setTimeout(() => {
      // 파라미터 받은대로 요청 후 가져옴
      resolve(`${PAGE[`${currency}_${pageNum}`]}`);
    }, 500);
  });
};

const coinStore = (set, get) => ({
  coinDB: {},
  checkCache: (pageNationNum, currency) => {
    const { coinDB } = get();
    if (`${currency}_${pageNationNum}` in coinDB.keys()) return true;
    return false;
  },
  getPage: (pageNum, currency) => {
    const { checkCache } = get();
    if (!checkCache(Math.floor(pageNum / 6), currency)) callApiAndSetCoinDB;
    if (!checkCache(Math.ceil(pageNum / 6), currency)) callApiAndSetCoinDB;
    return;
  },
});

const useCoinStore = create(coinStore);
export default useCoinStore;
