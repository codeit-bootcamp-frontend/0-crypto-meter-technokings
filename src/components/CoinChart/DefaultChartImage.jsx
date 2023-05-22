import React from "react";

import styled from "styled-components";

import { SDiv, SText, colors } from "@styles";
import { h3 } from "@styles/text.style";

const DefaultChartImage = () => {
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

export default DefaultChartImage;
