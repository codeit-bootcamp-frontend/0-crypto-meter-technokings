import { useEffect, useState } from "react";

import { shallow } from "zustand/shallow";

import { getMarkets } from "@/services/api";
import useCoinStore from "@/stores/coinStore";

import useAsync from "./useAsync";

const coinsNumPerPagination =
  Number(import.meta.env.VITE_PAGES_PER_PAGINATION) *
  Number(import.meta.env.VITE_COINS_PER_PAGE);
const coinsNumPerPage = Number(import.meta.env.VITE_COINS_PER_PAGE);

/**
 * API 요청을 보내고 받은 데이터를 가공, addPage
 * @param {string} - 화폐 단위
 * @param {number} - coin 데이터를 받을 페이지 번호
 * @returns {object} coins 데이터를 반환
 */
const useMarketData = (currency, pageNum) => {
  const [coins, setCoins] = useState([]);
  const { addPageToCache, checkCache, getPageSlice } = useCoinStore(
    (state) => ({
      addPageToCache: state.addPageToCache,
      checkCache: state.checkCache,
      getPageSlice: state.getPageSlice,
    }),
    shallow
  );
  const paginationNum = Math.floor((pageNum - 1) / 6) + 1;
  const {
    data,
    loading,
    error,
    callAsyncFunction: getMarketData,
  } = useAsync(getMarkets);

  const [prevData, setPrevData] = useState();

  useEffect(() => {
    if (checkCache(paginationNum, currency)) {
      const startIdx = Math.floor(((pageNum - 1) % 6) * coinsNumPerPage);
      setCoins(
        getPageSlice(paginationNum, currency, startIdx, coinsNumPerPage)
      );
    } else {
      getMarketData(currency, coinsNumPerPagination, paginationNum);
    }
  }, [
    checkCache,
    currency,
    getMarketData,
    getPageSlice,
    pageNum,
    paginationNum,
  ]);

  useEffect(() => {
    if (data && prevData !== data) {
      const trimmedMarketData = data.map((item) => ({
        id: item.id,
        rank: item.market_cap_rank,
        symbol: item.symbol,
        name: item.name,
        image: item.image,
        price: item.current_price,
        marketCap: item.fully_diluted_valuation,
        volume24h: item.total_volume,
        change1h: item.price_change_percentage_1h_in_currency,
        change24h: item.price_change_percentage_24h_in_currency,
        change7d: item.price_change_percentage_7d_in_currency,
      }));
      setPrevData(data);
      addPageToCache(trimmedMarketData, paginationNum, currency);
      const startIdx = Math.floor(((pageNum % 6) - 1) * coinsNumPerPage);
      setCoins(
        getPageSlice(paginationNum, currency, startIdx, coinsNumPerPage)
      );
    }
  }, [
    addPageToCache,
    currency,
    data,
    getPageSlice,
    pageNum,
    paginationNum,
    prevData,
  ]);

  return { coins };
};

export default useMarketData;
