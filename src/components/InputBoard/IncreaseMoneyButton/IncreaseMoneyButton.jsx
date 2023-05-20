import React from "react";

import styled from "styled-components";

import { colors, SButton, SText } from "@styles";

const IncreaseMoneyButton = ({ money = 10000 }) => {
  return (
    <S.Button
      type="button"
      col
      ct
      br={23}
      h={30}
      pd="6px 12px 6px 12px"
      bd={`1px solid ${colors.gray3}`}
    >
      <S.ButtonText b3 white disableSelect>
        {`${money.toLocaleString("ko-KR")}원`}
      </S.ButtonText>
    </S.Button>
  );
};

const S = {};

S.ButtonText = styled(SText)`
  @media only screen and (max-width: 1200px) {
    color: ${colors.gray8};
  }
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

S.Button = styled(SButton)`
  &:active {
    background-color: ${colors.green};
    border: 1px solid ${colors.green};
  }
  &:active > span {
    color: ${colors.white};
  }
  @media only screen and (max-width: 1200px) {
    border-color: ${colors.gray7};
  }
`;

export default IncreaseMoneyButton;
