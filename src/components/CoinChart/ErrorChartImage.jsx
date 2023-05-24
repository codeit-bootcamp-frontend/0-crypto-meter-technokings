import React from "react";

import styled from "styled-components";

import { SDiv, colors } from "@styles";
import { h3, s3 } from "@styles/text.style";

const ErrorChartImage = ({ isGreen = true }) => {
  return (
    <S.ChartWrapper ct full br={25} white isGreen={isGreen}>
      <SDiv col>
        <S.NullTextWrapper>차트를 불러오지 못했어요.</S.NullTextWrapper>

        <SDiv ct g={10} pdt={10}>
          <S.IconContainer>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M13.5 2c-5.621 0-10.211 4.443-10.475 10h-3.025l5 6.625 5-6.625h-2.975c.257-3.351 3.06-6 6.475-6 3.584 0 6.5 2.916 6.5 6.5s-2.916 6.5-6.5 6.5c-1.863 0-3.542-.793-4.728-2.053l-2.427 3.216c1.877 1.754 4.389 2.837 7.155 2.837 5.79 0 10.5-4.71 10.5-10.5s-4.71-10.5-10.5-10.5z" />
            </svg>
          </S.IconContainer>
          <S.ReloadText
            onClick={() => {
              window.location.reload();
            }}
          >
            다시 시도하기
          </S.ReloadText>
        </SDiv>
      </SDiv>
    </S.ChartWrapper>
  );
};
const S = {};

S.ChartWrapper = styled(SDiv)`
  height: 733px;
  max-width: 1379px;
  max-height: 733px;

  @media only screen and (max-width: 1200px) {
    height: 616px;
  }
  @media only screen and (max-width: 768px) {
    height: 510px;
  }
`;

S.NullTextWrapper = styled(SDiv)`
  ${h3}
  color: ${colors.gray6};
  text-align: center;
`;
S.ReloadText = styled(SDiv)`
  ${s3}
  color: ${colors.green};
  text-align: center;
`;
S.IconContainer = styled(SDiv)`
  width: 16px;
  height: 16px;

  & svg {
    width: 100%;
    height: 100%;
    display: block;
    color: red;
    fill: ${colors.green};
  }
`;

export default ErrorChartImage;
