import React, { useMemo, useState } from "react";

import mockMarkets from "@/data/mockMarkets";

import TablePresenter from "./TablePresenter";

const Table = () => {
  const [pageNum, setPageNum] = useState(6);
  const [sortKey, setSortKey] = useState("market_cap_rank");
  const [isAscend, setIsAscend] = useState(true);
  const [sortStates, setSortStates] = useState({
    market_cap_rank: "none",
    name: "none",
    current_price: "none",
    fully_diluted_valuation: "none",
    total_volume: "none",
    price_change_percentage_1h_in_currency: "none",
    price_change_percentage_24h_in_currency: "none",
    price_change_percentage_7d_in_currency: "none",
  });

  // Todo
  // ==== getPage(pageNum, currency)로 대체 =====
  const mockDataSet = useMemo(
    () =>
      mockMarkets.map((mockMarket) => {
        return {
          market_cap_rank: mockMarket.market_cap_rank, // 화폐 순위
          symbol: mockMarket.symbol, // 화폐 symbol
          name: mockMarket.name, // 화폐 이름
          image: mockMarket.image, // 화폐 이미지
          current_price: mockMarket.current_price, // 화폐 가격
          fully_diluted_valuation: mockMarket.fully_diluted_valuation, // 총 시가
          total_volume: mockMarket.total_volume, // 24시간 거래량
          price_change_percentage_1h_in_currency:
            mockMarket.price_change_percentage_1h_in_currency, // 1시간 변동폭
          price_change_percentage_24h_in_currency:
            mockMarket.price_change_percentage_24h_in_currency, // 24시간 변동폭
          price_change_percentage_7d_in_currency:
            mockMarket.price_change_percentage_7d_in_currency, // 7일 변동폭
        };
      }),
    []
  );

  const presentPageDataSet = mockDataSet.slice(
    (pageNum - 1) * 30,
    (pageNum - 1) * 30 + 30
  );
  // ================

  const handleSortClick = (colKey) => {
    if (colKey === sortKey && sortStates[colKey] !== "none") {
      setIsAscend((prev) => !prev);
    } else {
      setSortKey(colKey);
      setIsAscend(true);
    }

    const updatedSortStates = {
      market_cap_rank: "none",
      name: "none",
      current_price: "none",
      fully_diluted_valuation: "none",
      total_volume: "none",
      price_change_percentage_1h_in_currency: "none",
      price_change_percentage_24h_in_currency: "none",
      price_change_percentage_7d_in_currency: "none",
    };
    if (sortStates[colKey] === "none") {
      updatedSortStates[colKey] = "ascend";
    } else if (sortStates[colKey] === "ascend") {
      updatedSortStates[colKey] = "descend";
    } else {
      updatedSortStates[colKey] = "ascend";
    }
    setSortStates(updatedSortStates);
  };

  const sortedDataSet = [...presentPageDataSet].sort((a, b) => {
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

  const handleChangePageClick = (num) => {
    setPageNum(num);
    setSortStates({
      market_cap_rank: "none",
      name: "none",
      current_price: "none",
      fully_diluted_valuation: "none",
      total_volume: "none",
      price_change_percentage_1h_in_currency: "none",
      price_change_percentage_24h_in_currency: "none",
      price_change_percentage_7d_in_currency: "none",
    });
    setIsAscend(true);
    setSortKey("market_cap_rank");
  };

  const handlePaginationClick = (direction, device) => {};

  return (
    <TablePresenter
      dataSet={sortedDataSet}
      sortStates={sortStates}
      pageNum={pageNum}
      onSort={handleSortClick}
      onChangePage={handleChangePageClick}
      onPagination={handlePaginationClick}
    />
  );
};

export default Table;
