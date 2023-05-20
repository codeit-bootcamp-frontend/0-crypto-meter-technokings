import React from "react";

import styled from "styled-components";

import { SButton, SDiv, SHeading4, SText, colors } from "@styles";

import SearchHistoryList from "./SearchHistoryList";

const SearchHistoryPresenter = ({ history, onDelete }) => {
  return (
    <S.SearchHistoryWrapper
      br={16}
      w={520}
      bd={`1px solid ${colors.gray2}`}
      bg={colors.white}
    >
      <S.HistoryHeader row sb act h={64} pdl={28} pdr={28}>
        <SHeading4>검색 기록</SHeading4>
        <SButton onClick={onDelete}>
          <SText b3 g7>
            기록 모두 지우기
          </SText>
        </SButton>
      </S.HistoryHeader>
      <SearchHistoryList history={history} />
    </S.SearchHistoryWrapper>
  );
};

const S = {};

S.SearchHistoryWrapper = styled(SDiv)`
  position: absolute;
  top: 76px;
  right: 56px;
`;

S.HistoryHeader = styled(SDiv)`
  border-bottom: 1px solid ${colors.gray2};
`;

export default SearchHistoryPresenter;
