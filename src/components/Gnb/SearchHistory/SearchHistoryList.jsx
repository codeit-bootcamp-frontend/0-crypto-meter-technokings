import { SDiv } from "@styles";
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
`;

export default SearchHistoryList;
