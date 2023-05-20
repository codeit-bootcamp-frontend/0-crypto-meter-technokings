import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import { SDiv } from "@styles";

import CoinChartArea from "./CoinChartArea";
import CoinChartHeader from "./CoinChartHeader";
import CoinHistoryUserSelect from "./CoinHistoryUserSelect";

const CoinChartPresenter = ({
  coinName,
  coinImageUrl,
  yyyy,
  MM,
  dd,
  trimdUserSelectMoney,
  trimedUserSelectCalcMoney,
  toLocaleDate,
  toLocaleTime,
  isGray,
  isGreen,
  coinCurrency,
  chartData,
  handleClickChangeChipQuery,
}) => {
  if (!chartData) {
    // TODOS: chartData가 없을 때, 보여줄 화면 UI 코드 작성
  }
  return (
    <S.ChartWrapper col w={100} h={100} br={25} maxW={1379} maxH={733} white>
      <S.Inner pos="relative" mg="36px 48px 0px">
        <CoinChartHeader coinName={coinName} coinImageUrl={coinImageUrl} />
        <CoinHistoryUserSelect
          yyyy={yyyy}
          MM={MM}
          dd={dd}
          trimdUserSelectMoney={trimdUserSelectMoney}
          trimedUserSelectCalcMoney={trimedUserSelectCalcMoney}
          toLocaleDate={toLocaleDate}
          toLocaleTime={toLocaleTime}
          isGray={isGray}
          isGreen={isGreen}
        />
        <CoinChartArea
          isGreen={isGreen}
          coinCurrency={coinCurrency}
          chartData={chartData}
          handleClickChangeChipQuery={handleClickChangeChipQuery}
        />
      </S.Inner>
    </S.ChartWrapper>
  );
};

CoinChartPresenter.propTypes = {
  coinName: PropTypes.string.isRequired,
  coinImageUrl: PropTypes.string.isRequired,
  yyyy: PropTypes.string.isRequired,
  MM: PropTypes.string.isRequired,
  dd: PropTypes.string.isRequired,
  trimdUserSelectMoney: PropTypes.string.isRequired,
  trimedUserSelectCalcMoney: PropTypes.string.isRequired,
  toLocaleDate: PropTypes.string.isRequired,
  toLocaleTime: PropTypes.string.isRequired,
  isGray: PropTypes.bool.isRequired,
  isGreen: PropTypes.bool.isRequired,
  coinCurrency: PropTypes.string.isRequired,
  chartData: PropTypes.arrayOf(
    PropTypes.shape({
      areaValue: PropTypes.number.isRequired,
      tickDate: PropTypes.string.isRequired,
      tickPrice: PropTypes.string.isRequired,
      xAxisDate: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleClickChangeChipQuery: PropTypes.func.isRequired,
};

const S = {};

S.ChartWrapper = styled(SDiv)`
  width: ${(props) => (props.w ? `${props.w}%` : "auto")};
  height: ${(props) => (props.h ? `${props.h}%` : "auto")};
  max-height: ${(props) => (props.maxH ? `${props.maxH}px` : "auto")};
  max-width: ${(props) => (props.maxW ? `${props.maxW}px` : "auto")};
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
