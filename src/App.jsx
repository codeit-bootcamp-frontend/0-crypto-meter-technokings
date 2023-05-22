import React, { Suspense, lazy } from "react";

import "./App.css";

import styled from "styled-components";

import { Gnb, DefaultChartImage, InputBoard, TableSection } from "@components";
import { SDiv } from "@styles";

const CoinChart = lazy(() => import("@components/CoinChart/CoinChart"));

const App = () => {
  return (
    <S.AppWrapper>
      <Gnb />
      <S.Contents>
        <S.InputWrapper>
          <InputBoard />
        </S.InputWrapper>
        <S.ContentsWrapper col g={24}>
          <Suspense fallback={<DefaultChartImage />}>
            <CoinChart />
          </Suspense>
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
  margin: 0 auto 46px;
`;

S.Contents = styled(SDiv)`
  display: flex;
  align-items: start;
  gap: 24px;

  @media only screen and (max-width: 1200px) {
    align-items: stretch;
    flex-direction: column;
    margin-top: 10px;
  }
`;

S.InputWrapper = styled(SDiv)`
  position: sticky;
  top: 100px;
  z-index: 30px;
`;

S.ContentsWrapper = styled(SDiv)`
  min-width: 0;
`;

export default App;
