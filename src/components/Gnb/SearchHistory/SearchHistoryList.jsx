import React from "react";

import styled from "styled-components";

import { SDiv, colors } from "@styles";

import SearchHistoryListItem from "./SearchHistoryListItem";

const SearchHistoryList = ({ history }) => {
  return (
    <S.HistoryListWrapper>
      {history.map((item) => (
        <SearchHistoryListItem key={item.id} record={item} />
      ))}
    </S.HistoryListWrapper>
  );
};

const S = {};

S.HistoryListWrapper = styled(SDiv)`
  max-height: 526px;
  overflow-y: auto;

  &::-webkit-scrollbar-button {
    width: 0;
    height: 0;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: ${colors.gray2};
  }

  @media only screen and (max-width: 768px) {
    max-height: 513px;
  }
`;

export default SearchHistoryList;
