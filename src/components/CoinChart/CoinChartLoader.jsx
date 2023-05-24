import React from "react";

import styled from "styled-components";

import { SDiv, colors } from "@styles";

const CoinChartLoader = ({ isGreen = true }) => {
  return (
    <S.ChartWrapper ct full br={25} white isGreen={isGreen}>
      <S.LoaderWrapper ct>
        <svg>
          <circle cx="70" cy="70" r="70" />
        </svg>
      </S.LoaderWrapper>
    </S.ChartWrapper>
  );
};
const S = {};

S.ChartWrapper = styled(SDiv)`
  height: 733px;
  max-width: 1379px;
  max-height: 733px;

  & svg {
    position: relative;
    width: 150px;
    height: 150px;
    animation: rotate 2s linear infinite;
  }
  & svg circle {
    width: 100%;
    height: 100%;
    fill: none;
    stroke-width: 10;
    stroke: ${colors.lightgreen};
    stroke-linecap: round;
    transform: translate(5px, 5px);
    stroke-dasharray: 440;
    stroke-dashoffset: 440;
    animation: animate 4s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes animate {
    0%,
    100% {
      stroke-dashoffset: 440;
    }
    50% {
      stroke-dashoffset: 0;
    }
    50.1% {
      stroke-dashoffset: 880;
    }
  }

  @media only screen and (max-width: 1200px) {
    height: 616px;
  }
  @media only screen and (max-width: 768px) {
    height: 510px;
  }
`;

S.LoaderWrapper = styled(SDiv)``;

export default CoinChartLoader;
