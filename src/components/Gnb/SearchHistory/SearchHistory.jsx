import React, { useCallback, useState } from "react";

import CURRENCY_OPTIONS from "@/data/currencyOptions";

import SearchHistoryPresenter from "./SearchHistoryPresenter";

const SearchHistory = ({ currency }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedFilterList, setSelectedFilterList] = useState([currency]);

  const handleDeleteHistoryClick = () => {
    const history = JSON.parse(localStorage.getItem("records"));
    if (!history) return;
    const deleteResult = history.filter((record) => {
      return !selectedFilterList.includes(record.currency);
    });
    setSelectedFilterList([currency]);
    localStorage.setItem("records", JSON.stringify(deleteResult));
  };
  const getFilteredHistory = useCallback(() => {
    if (!localStorage.getItem("records")) return [];
    return JSON.parse(localStorage.getItem("records")).filter(
      (record) =>
        // eslint-disable-next-line implicit-arrow-linebreak
        selectedFilterList.includes(record.currency)
      // eslint-disable-next-line function-paren-newline
    );
  }, [selectedFilterList]);
  const handleToggleCheckBox = (value) => {
    let newList;
    if (selectedFilterList.includes(value)) {
      newList = selectedFilterList.filter((option) => option !== value);
      setSelectedFilterList(newList);
      return;
    }
    setSelectedFilterList((prev) => [...prev, value]);
  };

  return (
    <SearchHistoryPresenter
      history={getFilteredHistory()}
      onDelete={handleDeleteHistoryClick}
      isFilterOpen={showFilter}
      onClickFilter={() => {
        setShowFilter((prev) => !prev);
      }}
      isFiltered={selectedFilterList.length !== CURRENCY_OPTIONS.length}
      onChangeFilterOption={handleToggleCheckBox}
      currency={currency}
      selectedFilterList={selectedFilterList}
    />
  );
};

export default SearchHistory;
