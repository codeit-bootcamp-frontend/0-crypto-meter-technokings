import React, { useState } from "react";

import mockMarkets from "@/data/mockMarkets";

import TablePresenter from "./TablePresenter";

const Table = () => {
  const [pageNum, setPageNum] = useState(1);
  const mockTableData = mockMarkets.map((mockMarket) => {
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
  });
  const shownStartIdx = ((pageNum % 6) - 1) * 30;

  const shownTableData = mockTableData.slice(shownStartIdx, shownStartIdx + 30);

  return <TablePresenter dataSet={shownTableData} />;
};

export default Table;
