import React from "react";

import styled from "styled-components";

import { SDiv, colors } from "@styles";

const CoinChartLoader = ({ isGreen = true }) => {
  return (
    <S.ChartWrapper ct full br={25} white isGreen={isGreen}>
      <SDiv col>
        <svg>
          <rect />
        </svg>
      </SDiv>
    </S.ChartWrapper>
  );
};
const S = {};

S.ChartWrapper = styled(SDiv)`
  height: 733px;
  max-width: 1379px;
  max-height: 733px;

  & svg {
    margin: 20px auto 0;
    width: 100px;
    height: 100px;
  }
  & svg rect {
    width: 100px;
    height: 100px;
    fill: none;
    stroke-width: 100px;
    stroke: ${(props) => (props.isGreen ? colors.lightgreen : colors.lightred)};
    stroke-dasharray: 100;
    stroke-dashoffset: 50%;
    animation: animate 1.5s linear infinite;
  }

  @keyframes animate {
    to {
      stroke-dashoffset: 250%;
    }
  }
`;

export default CoinChartLoader;
