import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import { SDiv, SText } from "@styles";

const CoinHistoryUserSelect = ({
  yyyy,
  MM,
  dd,
  trimdUserSelectMoney,
  trimedUserSelectCalcMoney,
  toLocaleDate,
  toLocaleTime,
  isGray,
  isGreen,
}) => {
  return (
    <S.HistoryWrapper mgt={36}>
      <S.TopText s1 black>
        {`${yyyy}년 ${MM}월 ${dd}일에 ${trimdUserSelectMoney} 로 샀다면 오늘`}
      </S.TopText>
      <S.MiddleText h1 mgt={8}>
        <SText mgr={4} g5={isGray} green={isGreen} red={!isGreen}>
          {trimedUserSelectCalcMoney}
        </SText>
        입니다.
      </S.MiddleText>
      <S.BottomText mgt={9} c1 g6>
        {`(${toLocaleDate} ${toLocaleTime} 기준)`}
      </S.BottomText>
    </S.HistoryWrapper>
  );
};

CoinHistoryUserSelect.propTypes = {
  yyyy: PropTypes.string.isRequired,
  MM: PropTypes.string.isRequired,
  dd: PropTypes.string.isRequired,
  trimdUserSelectMoney: PropTypes.string.isRequired,
  trimedUserSelectCalcMoney: PropTypes.string.isRequired,
  toLocaleDate: PropTypes.string.isRequired,
  toLocaleTime: PropTypes.string.isRequired,
  isGray: PropTypes.bool.isRequired,
  isGreen: PropTypes.bool.isRequired,
};

const S = {};

S.HistoryWrapper = styled(SDiv)`
  @media only screen and (max-width: 375px) {
    margin-top: 32px;
  }
`;
S.TopText = styled(SText)`
  display: flex;
  align-items: center;
  font-weight: 600;
  line-height: 2.4rem;

  @media only screen and (max-width: 375px) {
    font-size: 1.5rem;
    line-height: 100%;
  }
`;
S.MiddleText = styled(SText)`
  display: flex;
  align-items: center;
  font-weight: 700;
  line-height: 5.8rem;

  @media only screen and (max-width: 375px) {
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

  @media only screen and (max-width: 375px) {
    font-size: 1.3rem;
    line-height: 1.8rem;
    margin-top: 0.8rem;
  }
`;

export default CoinHistoryUserSelect;
