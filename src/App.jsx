import React from "react";

import "./App.css";

import styled from "styled-components";

import { Gnb, InputBoard, TableSection, CoinChartWrapper } from "@components";
import { SDiv } from "@styles";

const App = () => {
  return (
    <S.AppWrapper>
      <Gnb />
      <S.Contents>
        <InputBoard />
        <S.ContentsWrapper col g={24}>
          <CoinChartWrapper />
          <TableSection />
        </S.ContentsWrapper>
      </S.Contents>
    </S.AppWrapper>
  );
};

const S = {};

S.AppWrapper = styled(SDiv)`
  width: 100%;
  max-width: calc(1379px + 445px + 24px);
  margin: 0 auto;
`;

S.Contents = styled(SDiv)`
  display: flex;
  align-items: start;
  gap: 24px;
  padding-left: 36px;
  padding-right: 36px;
  padding-bottom: 46px;

  @media only screen and (max-width: 1200px) {
    padding-top: 10px;
    padding-right: 24px;
    padding-left: 24px;
    align-items: stretch;
    flex-direction: column;
  }
  @media only screen and (max-width: 768px) {
    padding-right: 16px;
    padding-left: 16px;
  }
`;

S.ContentsWrapper = styled(SDiv)`
  min-width: 0;
`;

export default App;
