import React from "react";

import styled from "styled-components";

import { SButton, SDiv, SHeading4, SText, colors } from "@styles";

import SearchHistoryList from "./SearchHistoryList";

const SearchHistoryPresenter = ({ history, onDelete }) => {
  // Todo: zustand 화폐로 다루기
  const currency = "krw";
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
  z-index: 20;

  @media only screen and (max-width: 1200px) {
    right: 24px;
  }

  @media only screen and (max-width: 768px) {
    top: 64px;
    right: 16px;
    border-radius: 12px;
    width: 343px;
  }
`;

S.HistoryHeader = styled(SDiv)`
  border-bottom: 1px solid ${colors.gray2};

  @media only screen and (max-width: 768px) {
    height: 58px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export default SearchHistoryPresenter;
