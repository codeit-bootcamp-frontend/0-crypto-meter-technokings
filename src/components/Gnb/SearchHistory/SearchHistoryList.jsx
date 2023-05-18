import { SDiv, colors } from "@styles";
import React from "react";
import styled from "styled-components";
import SearchHistoryListItem from "./SearchHistoryListItem";

const SearchHistoryList = ({ history }) => {
  return (
    <S.HistoryListWrapper h={526}>
      {history.map((item) => (
        <SearchHistoryListItem key={item.id} record={item} />
      ))}
    </S.HistoryListWrapper>
  );
};

const S = {};

S.HistoryListWrapper = styled(SDiv)`
  overflow-y: scroll;

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
`;

export default SearchHistoryList;
