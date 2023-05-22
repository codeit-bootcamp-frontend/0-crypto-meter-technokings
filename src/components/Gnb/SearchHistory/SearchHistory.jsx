import React from "react";

import SearchHistoryPresenter from "./SearchHistoryPresenter";

const SearchHistory = () => {
  // todo: mock 대신 localStorage해서 get 받아올 것
  // coinCurrency에 따라 다른 history를 받아야 함

  const handleDeleteHistoryClick = () => {
    // todo: localStorage 초기화
  };

  return (
    <SearchHistoryPresenter
      history={JSON.parse(localStorage.getItem("records")) ?? []}
      onDelete={handleDeleteHistoryClick}
    />
  );
};

export default SearchHistory;
