/* eslint-disable react/require-default-props */
import React from "react";

import styled from "styled-components";

import { h3 } from "@/styles/text.style";
import { colors, SDiv, SText } from "@styles";

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
  if (Object.keys(chartData).length === 0) {
    return (
      <S.ChartWrapper flex full br={25} white>
        <S.Inner pos="relative" mg="36px 48px 70px" maxW={910}>
          <S.NullTextWrapper>
            <SDiv />
            입력한 코인 정보가 없습니다.
            <SDiv row>
              <S.NullText h3>보드에서&nbsp;</S.NullText>
              <S.NullText h3 green>
                코인 정보
              </S.NullText>
              <S.NullText h3>를 입력해보세요.</S.NullText>
            </SDiv>
          </S.NullTextWrapper>
          <SDiv full pd="80px">
            <img
              src="/null_chart.png"
              alt="null chart"
              style={{ maxWidth: "100%", height: "auto", display: "block" }}
            />
          </SDiv>
        </S.Inner>
      </S.ChartWrapper>
    );
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
  max-width: ${(props) => (props.maxW ? `${props.maxW}px` : "none")};

  @media only screen and (max-width: 1200px) {
    marign: 36px 36px 0px;
  }
  @media only screen and (max-width: 768px) {
    margin: 32px 20px 0px;
  }
`;
S.NullTextWrapper = styled(SDiv)`
  ${h3}
  position: absolute;
  top: 36px;
  left: -12px;
  color: ${colors.gray6};

  @media only screen and (max-width: 768px) {
    left: 16px;
  }
`;

S.NullText = styled(SText)``;

export default CoinChartPresenter;
