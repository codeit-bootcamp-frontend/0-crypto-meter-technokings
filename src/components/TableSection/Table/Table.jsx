import React, { useCallback, useEffect, useMemo, useState } from "react";

import { shallow } from "zustand/shallow";

import useAsync from "@/hooks/useAsync";
import useMarketData from "@/hooks/useMarketData";
import { getGlobal, getMarkets } from "@/services/api";
import useCoinStore from "@/stores/coinStore";
import useUserInputStore from "@/stores/userInputStore";

import TablePresenter from "./TablePresenter";

const Table = () => {
  const { selectedCurrency: currency } = useUserInputStore(
    (state) => ({
      selectedCurrency: state.selectedCurrency,
    }),
    shallow
  );

  const {
    data: globalData,
    loading: globalLoading,
    error: globalError,
    callAsyncFunction: getGlobalData,
  } = useAsync(getGlobal);

  const [pageNum, setPageNum] = useState(1);
  const [endPageIdx, setEndPageIdx] = useState();

  const { coins } = useMarketData(currency, pageNum);

  useEffect(() => {
    getGlobalData();
  }, [getGlobalData]);

  useEffect(() => {
    if (globalData) {
      setEndPageIdx(
        Math.floor(globalData.data.active_cryptocurrencies / 30) + 1
      );
    }
  }, [globalData]);

  /// pagination 하기 전에 있던 코드들
  const [sortKey, setSortKey] = useState("rank");
  const [isAscend, setIsAscend] = useState(true);
  const [sortStates, setSortStates] = useState({
    rank: null,
    name: null,
    price: null,
    marketCap: null,
    volume24h: null,
    change1h: null,
    change24h: null,
    change7d: null,
  });

  const sortedCoins = [...coins].sort((a, b) => {
    // 1. 정렬 값이 문자열일 때
    if (sortKey === "name") {
      if (a[sortKey] > b[sortKey]) return isAscend ? 1 : -1;
      return isAscend ? -1 : 1;
    }
    // 2. 정렬 값이 숫자일 때(0이 아닌 falsy는 맨 뒤로)
    if (!a[sortKey] && a[sortKey] !== 0) return 1;
    if (!b[sortKey] && b[sortKey] !== 0) return -1;
    return isAscend ? a[sortKey] - b[sortKey] : b[sortKey] - a[sortKey];
  });

  const handleSortClick = (colKey) => {
    if (colKey === sortKey && sortStates[colKey] !== null) {
      setIsAscend((prev) => !prev);
    } else {
      setSortKey(colKey);
      setIsAscend(true);
    }

    const updatedSortStates = {
      rank: null,
      name: null,
      price: null,
      marketCap: null,
      volume24h: null,
      change1h: null,
      change24h: null,
      change7d: null,
    };
    if (sortStates[colKey] === null) {
      updatedSortStates[colKey] = true;
    } else if (sortStates[colKey] === true) {
      updatedSortStates[colKey] = false;
    } else {
      updatedSortStates[colKey] = true;
    }
    setSortStates(updatedSortStates);
  };

  const handleChangePageClick = (num) => {
    setPageNum(num);
    setSortStates({
      rank: null,
      name: null,
      price: null,
      marketCap: null,
      volume24h: null,
      change1h: null,
      change24h: null,
      change7d: null,
    });
    setIsAscend(true);
    setSortKey("rank");
  };

  const handleClickChangePagination = () => {};

  if (sortedCoins === []) return null;
  return (
    <TablePresenter
      coins={sortedCoins}
      sortStates={sortStates}
      pageNum={pageNum}
      onSort={handleSortClick}
      onChangePage={handleChangePageClick}
      onPagination={handleClickChangePagination}
      currency={currency}
    />
  );
};

export default Table;
