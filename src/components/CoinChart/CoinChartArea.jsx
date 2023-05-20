import React, { useState } from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import { SDiv } from "@styles";

import CoinChartCanvas from "./CoinChartCanvas";
import SelectDurationChip from "./CoinSelectDurationChip";

const CoinChartArea = ({
  coinCurrency,
  isGreen,
  chartData,
  handleClickChangeChipQuery,
}) => {
  // chip 버튼을 클릭하면, query에 맞게 UI로 보여줄 텍스트 데이터를 매칭했습니다.
  const queries = [
    ["max", "전체"],
    ["365", "1년"],
    ["31", "1개월"],
    ["7", "일주일"],
    ["1", "1일"],
  ];
  // chip 버튼을 눌렀을 때, 기존 눌려 있던 버튼을 초기화하려고 배열을 state로 사용했습니다.
  const [chipAll, setChipAll] = useState(
    Array.from({ length: queries.length }, (_, i) => i === 0)
  );

  return (
    <S.ChartWrapper full mgt={26} maxW={910} h={351}>
      <S.ChipWrapper jed g={8}>
        {chipAll.map((isClicked, idx) => (
          <SelectDurationChip
            key={queries[idx][1]}
            chipText={queries[idx][1]}
            isClicked={isClicked}
            handleClickChipButton={() => {
              setChipAll(
                Array.from({ length: chipAll.length }, (_, i) => i === idx)
              );
              handleClickChangeChipQuery(queries[idx][0]);
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

CoinChartArea.propTypes = {
  coinCurrency: PropTypes.string.isRequired,
  isGreen: PropTypes.bool.isRequired,
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
  max-width: ${(props) => (props.maxW ? `${props.maxW}px` : "auto")};
  @media only screen and (max-width: 768px) {
    margin-top: 48px;
    height: 298px;
  }
`;
S.ChipWrapper = styled(SDiv)`
  @media only screen and (max-width: 768px) {
    justify-content: flex-start;
  }
`;

export default CoinChartArea;
