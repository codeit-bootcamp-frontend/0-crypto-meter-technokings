import React, { useState } from "react";

import styled from "styled-components";

import { colors, SButton, SText } from "@styles";

const IncreaseMoneyButtonContainer = ({ money }) => {
  const [isActive, setIsActive] = useState(false);

  const handlePointerDown = () => {
    setIsActive(true);
  };

  const handlePointerUp = () => {
    setIsActive(false);
  };

  return (
    <S.Button
      col
      ct
      br={23}
      h={30}
      pd="6px 12px 6px 12px"
      isActive={isActive}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      <SText b3 g1>
        {`${money.toLocaleString("ko-KR")}원`}
      </SText>
    </S.Button>
  );
};

const S = {};

S.Button = styled(SButton)`
  background-color: ${(props) => {
    return props.isActive && colors.green;
  }};
  border: 1px solid ${(props) => (props.isActive ? colors.green : colors.gray3)};
`;

export default IncreaseMoneyButtonContainer;
