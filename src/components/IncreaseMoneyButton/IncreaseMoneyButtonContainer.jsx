import React from "react";

import styled from "styled-components";

import { colors, SButton, SText } from "@styles";

const IncreaseMoneyButtonContainer = ({ money }) => {
  return (
    <S.Button
      col
      ct
      br={23}
      h={30}
      pd="6px 12px 6px 12px"
      bd={`1px solid ${colors.gray3}`}
    >
      <SText b3 g1>
        {`${money.toLocaleString("ko-KR")}원`}
      </SText>
    </S.Button>
  );
};

const S = {};

S.Button = styled(SButton)`
  &:active {
    background-color: ${colors.green};
    border: 1px solid ${colors.green};
  }
`;

export default IncreaseMoneyButtonContainer;
