import React from "react";

import styled from "styled-components";

import { colors, SDiv, SText } from "@styles";
import { green, red, g5 } from "@styles/text.style";

const PriceChange = ({ change }) => {
  return (
    <S.Div col ct w={66} h={22} br={4} change={change}>
      <S.DivText s3 change={change}>
        {change ? `${change.toFixed(2)}%` : "-"}
      </S.DivText>
    </S.Div>
  );
};

const S = {};

S.DivText = styled(SText)`
  ${(props) => (props.change < 0 ? red : green)}
  ${(props) => props.change || g5}
  @media only screen and (max-width: 768px) {
    font-size: 13px;
  }
`;

S.Div = styled(SDiv)`
  background-color: ${(props) => {
    return props.change < 0 ? colors.lightred : colors.lightgreen;
  }};

  background-color: ${(props) => {
    return props.change || colors.gray2;
  }};
`;

export default PriceChange;
