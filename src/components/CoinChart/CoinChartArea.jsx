/* eslint-disable react/require-default-props */
import React, { useState } from "react";

import styled from "styled-components";

import { SDiv } from "@styles";
import { jst } from "@styles/block.style";

import CoinChartCanvas from "./CoinChartCanvas";
import SelectDurationChip from "./CoinSelectDurationChip";

const CoinChartArea = ({ coinCurrency, isGreen, chartData, onClickChip }) => {
  const queriesData = ["max", "365", "31", "7", "1"];
  const queriesText = ["전체", "1년", "1개월", "1주", "1일"];

  const [chipAll, setChipAll] = useState(
    Array.from({ length: queriesData.length }, (_, i) => i === 0)
  );

  return (
    <S.ChartWrapper full mgt={26} h={351}>
      <S.ChipWrapper jed g={8}>
        {chipAll.map((isClicked, idx) => (
          <SelectDurationChip
            key={queriesText[idx]}
            chipText={queriesText[idx]}
            isClicked={isClicked}
            handleClickChipButton={() => {
              setChipAll(
                Array.from({ length: queriesData.length }, (_, i) => i === idx)
              );
              onClickChip(queriesData[idx]);
            }}
          />
        ))}
      </S.ChipWrapper>
      <CoinChartCanvas
        coinCurrency={coinCurrency}
        isGreen={isGreen}
        chartData={chartData}
      />
    </S.ChartWrapper>
  );
};
const S = {};

S.ChartWrapper = styled(SDiv)`
  max-width: 910px;
  @media only screen and (max-width: 768px) {
    margin-top: 48px;
    height: 298px;
  }
`;
S.ChipWrapper = styled(SDiv)`
  @media only screen and (max-width: 768px) {
    ${jst}
  }
`;

export default CoinChartArea;
