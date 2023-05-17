import React from "react";

import styled from "styled-components";

import { RestoreIcon, MainLogo } from "@components";
import { SDiv, SText } from "@styles";
import Select from "./Select/Select";
import GnbButton from "./GnbButton";
import SearchHistory from "./SearchHistory/SearchHistory";

const GnbPresenter = ({ isHistoryOpen, onResetClick, onHistoryClick }) => {
  return (
    <header>
      <S.GnbWrapper row sb act h={100} pdl={57} pdr={60}>
        <MainLogo />
        <S.ButtonWrapper row g={16}>
          <GnbButton onClick={onResetClick} isHistoryOpen={false}>
            <RestoreIcon />
            <SText b3>다시 계산하기</SText>
          </GnbButton>
          <Select />
          <GnbButton onClick={onHistoryClick} isHistoryOpen={isHistoryOpen}>
            <SText b3>검색기록</SText>
          </GnbButton>
        </S.ButtonWrapper>
        {isHistoryOpen && <SearchHistory />}
      </S.GnbWrapper>
    </header>
  );
};

const S = {};

S.GnbWrapper = styled(SDiv)`
  position: relative;
`;

S.ButtonWrapper = styled(SDiv)``;

export default GnbPresenter;
