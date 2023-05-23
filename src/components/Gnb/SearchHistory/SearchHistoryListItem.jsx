/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";

import styled from "styled-components";

import useUserInputStore from "@/stores/userInputStore";
import { SDiv, SText, colors } from "@styles";
import { green, red } from "@styles/text.style";

const SearchHistoryListItem = ({ record }) => {
  // Todo: zustand 화폐로 다루기
  const { selectedCurrency } = useUserInputStore((state) => ({
    selectedCurrency: state.selectedCurrency,
  }));
  const { coinInfo, before, after } = record;
  const isMoneyIncreased = after.money - before.money >= 0;

  return (
    <S.ItemWrapper row act g={12} h={81} mgl={24} mgr={24}>
      <S.ImageWrapper w={28} h={28}>
        <img src={coinInfo.imageUrl} alt={`${coinInfo.name} logo`} />
      </S.ImageWrapper>
      <S.TextWrapper col g={6}>
        <SText b3 g5>
          {`만약 ${before.dateString}에 `}
          <SText s3>{before.moneyString}</SText>
          <S.KRWText currency={selectedCurrency}>으</S.KRWText>로
        </SText>
        <S.Text b2 black>
          {`${coinInfo.name}을 샀다면, `}
          <S.Br />
          {`${after.dateString}에는 `}
          <S.MoneyText s2 isMoneyIncreased={isMoneyIncreased}>
            {after.moneyString}
          </S.MoneyText>
          &nbsp;입니다.
        </S.Text>
      </S.TextWrapper>
    </S.ItemWrapper>
  );
};

const S = {};

S.ItemWrapper = styled(SDiv)`
  border-bottom: 1px solid ${colors.gray2};

  @media only screen and (max-width: 768px) {
    height: 90px;
    margin-left: 20px;
    margin-right: 20px;
  }
`;

S.ImageWrapper = styled(SDiv)`
  img {
    width: 100%;
    height: 100%;
  }
`;

S.TextWrapper = styled(SDiv)`
  @media only screen and (max-width: 768px) {
    gap: 4px;
  }
`;

S.MoneyText = styled(SText)`
  ${(props) => (props.isMoneyIncreased ? green : red)}
`;

S.KRWText = styled(SText)`
  display: ${(props) => props.currency === "usd" && "none"};
`;

S.Text = styled(SText)`
  @media only screen and (max-width: 768px) {
    line-height: 20px;
  }
`;

S.Br = styled.br`
  display: none;
  @media only screen and (max-width: 768px) {
    display: inline;
  }
`;

export default SearchHistoryListItem;
