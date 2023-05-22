/* eslint-disable react/require-default-props */
import React from "react";

import styled from "styled-components";

import { SDiv } from "@styles";

import CoinChartArea from "./CoinChartArea";
import CoinChartHeader from "./CoinChartHeader";
import CoinHistoryUserSelect from "./CoinHistoryUserSelect";
import DefaultChartImage from "./DefaultChartImage";

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
  if (Object.keys(chartData).length === 0) {
    return <DefaultChartImage />;
  }
  return (
    <S.ChartWrapper col full br={25} white>
      <S.Inner pos="relative">
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
  max-width: ${(props) => (props.maxW ? `${props.maxW}px` : "none")};
  margin: 36px 48px 70px;
  @media only screen and (max-width: 1200px) {
    margin: 36px 12px 0;
  }
  @media only screen and (max-width: 768px) {
    margin: 32px 12px 0;
  }
`;

export default CoinChartPresenter;
