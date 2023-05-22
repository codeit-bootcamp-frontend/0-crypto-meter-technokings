import React from "react";

import SearchHistoryPresenter from "./SearchHistoryPresenter";

const MOCK_HISTORY = [
  {
    id: 1,
    coin: {
      name: "Bitcoin",
      image:
        "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    },
    before: { date: new Date(2022, 10, 4), money: 10000 },
    after: { date: new Date(2022, 10, 4), money: 20000 },
  },
  {
    id: 2,
    coin: {
      name: "Ethereum",
      image:
        "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    },
    before: { date: new Date(2022, 10, 4), money: 20000 },
    after: { date: new Date(2022, 10, 4), money: 20000 },
  },
  {
    id: 3,
    coin: {
      name: "Tether",
      image:
        "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
    },
    before: { date: new Date(2022, 10, 4), money: 30000 },
    after: { date: new Date(2022, 10, 4), money: 50 },
  },
  {
    id: 4,
    coin: {
      name: "BNB",
      image:
        "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850",
    },
    before: { date: new Date(2022, 10, 4), money: 10000 },
    after: { date: new Date(2022, 10, 4), money: 20000 },
  },
  {
    id: 5,
    coin: {
      name: "Bitcoin",
      image:
        "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    },
    before: { date: new Date(2022, 10, 4), money: 10000 },
    after: { date: new Date(2022, 10, 4), money: 20000 },
  },
  {
    id: 6,
    coin: {
      name: "Bitcoin",
      image:
        "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    },
    before: { date: new Date(2022, 10, 4), money: 10000 },
    after: { date: new Date(2022, 10, 4), money: 20000 },
  },
  {
    id: 7,
    coin: {
      name: "Ethereum",
      image:
        "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    },
    before: { date: new Date(2022, 10, 4), money: 20000 },
    after: { date: new Date(2022, 10, 4), money: 20000 },
  },
  {
    id: 8,
    coin: {
      name: "Tether",
      image:
        "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
    },
    before: { date: new Date(2022, 10, 4), money: 30000 },
    after: { date: new Date(2022, 10, 4), money: 50 },
  },
  {
    id: 9,
    coin: {
      name: "BNB",
      image:
        "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850",
    },
    before: { date: new Date(2022, 10, 4), money: 10000 },
    after: { date: new Date(2022, 10, 4), money: 20000 },
  },
  {
    id: 10,
    coin: {
      name: "Bitcoin",
      image:
        "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    },
    before: { date: new Date(2022, 10, 4), money: 10000 },
    after: { date: new Date(2022, 10, 4), money: 20000 },
  },
];

const SearchHistory = () => {
  // todo: mock 대신 localStorage해서 get 받아올 것
  // coinCurrency에 따라 다른 history를 받아야 함

  const handleDeleteHistoryClick = () => {
    // todo: localStorage 초기화
  };

  return (
    <SearchHistoryPresenter
      history={MOCK_HISTORY}
      onDelete={handleDeleteHistoryClick}
    />
  );
};

export default SearchHistory;
