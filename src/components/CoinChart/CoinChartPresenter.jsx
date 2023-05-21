/* eslint-disable react/require-default-props */
import React from "react";

import styled from "styled-components";

import { SDiv } from "@styles";

import CoinChartArea from "./CoinChartArea";
import CoinChartHeader from "./CoinChartHeader";
import CoinHistoryUserSelect from "./CoinHistoryUserSelect";

const CoinChartPresenter = ({
  coinName,
  coinImageUrl,
  formattedDate,
  trimmedUserSelectMoney,
  trimmedUserSelectCalcMoney,
  toLocaleDate,
  toLocaleTime,
  isGray,
  isGreen,
  coinCurrency,
  chartData,
  onClickChip,
}) => {
  if (!chartData) {
    // TODOS: chartData가 없을 때, 보여줄 화면 UI 코드 작성
  }
  return (
    <S.ChartWrapper col full br={25} white>
      <S.Inner pos="relative" mg="36px 48px 70px">
        <CoinChartHeader coinName={coinName} coinImageUrl={coinImageUrl} />
        <CoinHistoryUserSelect
          formattedDate={formattedDate}
          trimmedUserSelectMoney={trimmedUserSelectMoney}
          trimmedUserSelectCalcMoney={trimmedUserSelectCalcMoney}
          toLocaleDate={toLocaleDate}
          toLocaleTime={toLocaleTime}
          isGray={isGray}
          isGreen={isGreen}
        />
        <CoinChartArea
          isGreen={isGreen}
          coinCurrency={coinCurrency}
          chartData={chartData}
          onClickChip={onClickChip}
        />
      </S.Inner>
    </S.ChartWrapper>
  );
};
const S = {};

S.ChartWrapper = styled(SDiv)`
  height: 100%;
  max-width: 1379px;
  max-height: 733px;
`;
S.Inner = styled(SDiv)`
  position: ${(props) => (props.pos ? `${props.pos}` : "static")};

  @media only screen and (max-width: 1200px) {
    marign: 36px 36px 0px;
  }
  @media only screen and (max-width: 768px) {
    margin: 32px 20px 0px;
  }
`;

export default CoinChartPresenter;
