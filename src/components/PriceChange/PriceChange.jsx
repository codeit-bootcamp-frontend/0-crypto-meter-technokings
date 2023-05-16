import React from "react";

import styled from "styled-components";

import { colors, SDiv, SText } from "@styles";
import { green, red } from "@styles/text.style";

const PriceChange = ({ change = -0.03 }) => {
  const isDesc = change < 0;

  return (
    <S.Div col ct w={66} h={22} br={4} isDesc={isDesc}>
      <S.DivText s3 isDesc={isDesc}>
        {`${change}%`}
      </S.DivText>
    </S.Div>
  );
};

const S = {};

S.DivText = styled(SText)`
  ${(props) => (props.isDesc ? red : green)}
  @media only screen and (max-width: 375px) {
    font-size: 13px;
  }
`;

S.Div = styled(SDiv)`
  background-color: ${(props) => {
    return props.isDesc ? colors.lightred : colors.lightgreen;
  }};
`;

export default PriceChange;
