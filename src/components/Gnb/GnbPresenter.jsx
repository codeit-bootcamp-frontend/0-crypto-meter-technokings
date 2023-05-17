import React from "react";

import styled, { css } from "styled-components";

import MainLogo from "@components/SVGComponents/MainLogo";
import { SDiv, SText, colors } from "@styles";
import Select from "./Select/Select";
import GnbButton from "./GnbButton";
import { RestoreIcon } from "@components";

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
      </S.GnbWrapper>
    </header>
  );
};

const S = {};

S.GnbWrapper = styled(SDiv)``;

S.ButtonWrapper = styled(SDiv)``;

export default GnbPresenter;
