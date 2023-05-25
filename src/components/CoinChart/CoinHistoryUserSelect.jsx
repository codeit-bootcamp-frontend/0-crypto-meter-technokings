import React from "react";

import styled from "styled-components";

import { SDiv, SText } from "@styles";

const CoinHistoryUserSelect = ({
  formattedDate,
  trimmedUserSelectMoney,
  trimmedUserSelectCalcMoney,
  toLocaleDate,
  toLocaleTime,
  isGray,
  isGreen,
}) => {
  return (
    <S.HistoryWrapper mgt={36}>
      <S.TopText s1 black>
        {`${formattedDate}에 ${trimmedUserSelectMoney}로 샀다면 오늘`}
      </S.TopText>
      <S.MiddleText mgt={8}>
        <SText h1 g5={isGray} green={isGreen} red={!isGreen}>
          {trimmedUserSelectCalcMoney}
        </SText>
        <S.Ellipsis h1>&nbsp;입니다.</S.Ellipsis>
      </S.MiddleText>
      <S.BottomText mgt={9} c1 g6>
        {`(${toLocaleDate} ${toLocaleTime} 기준)`}
      </S.BottomText>
    </S.HistoryWrapper>
  );
};

const S = {};

S.HistoryWrapper = styled(SDiv)`
  @media only screen and (max-width: 768px) {
    margin-top: 32px;
  }
`;
S.TopText = styled(SText)`
  display: flex;
  align-items: center;
  font-weight: 600;
  line-height: 2.4rem;

  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
    line-height: 100%;
  }
`;
S.MiddleText = styled(SText)`
  font-family: "Pretendard-Bold";
  display: flex;
  align-items: center;
  font-weight: 700;
  line-height: 5.8rem;

  @media only screen and (max-width: 768px) {
    font-size: 3.2rem;
    line-height: 3.8rem;
  }
`;
S.BottomText = styled(SText)`
  display: flex;
  align-items: center;
  text-align: center;
  font-weight: 500;
  line-height: 1.9rem;

  @media only screen and (max-width: 768px) {
    font-size: 1.3rem;
    line-height: 1.8rem;
    margin-top: 0.8rem;
  }
`;

S.Ellipsis = styled(SText)`
  overflow: hidden;
  text-overflow: ellipsis;
`;
export default CoinHistoryUserSelect;
