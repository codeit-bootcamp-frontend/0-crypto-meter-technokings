import React from "react";

import styled from "styled-components";

import { SDiv, SText, colors } from "@styles";
import { green, red } from "@styles/text.style";

const SearchHistoryListItem = ({ record }) => {
  const { coin, before, after } = record;
  const [beforeTime, afterTime] = [before.date, after.date];
  const [beforeMoney, afterMoney] = [
    before.money.toLocaleString("ko-KR"),
    after.money.toLocaleString("ko-KR"),
  ];
  const isMoneyIncreased = after.money - before.money >= 0;

  return (
    <S.ItemWrapper row act g={12} h={81} mgl={24} mgr={24}>
      <S.ImageWrapper w={28} h={28}>
        <img src={coin.image} alt={`${coin.name} logo`} />
      </S.ImageWrapper>
      <S.TextWrapper col g={6}>
        <SText b3 g5>
          {`만약 ${beforeTime.getFullYear()}년 ${beforeTime.getMonth()}월 ${beforeTime.getDate()}일에 `}
          <SText s3>{`${beforeMoney}원`}</SText>
          으로
        </SText>
        <SText b2 black>
          {`${
            coin.name
          }을 샀다면, ${afterTime.getFullYear()}년 ${afterTime.getMonth()}월 ${afterTime.getDate()}일에는 `}
          <S.MoneyText s2 isMoneyIncreased={isMoneyIncreased}>
            {`${afterMoney}원 `}
          </S.MoneyText>
          입니다.
        </SText>
      </S.TextWrapper>
    </S.ItemWrapper>
  );
};

const S = {};

S.ItemWrapper = styled(SDiv)`
  border-bottom: 1px solid ${colors.gray2};
`;

S.ImageWrapper = styled(SDiv)`
  img {
    width: 100%;
    height: 100%;
  }
`;

S.TextWrapper = styled(SDiv)``;

S.MoneyText = styled(SText)`
  ${(props) => (props.isMoneyIncreased ? green : red)}
`;

export default SearchHistoryListItem;
