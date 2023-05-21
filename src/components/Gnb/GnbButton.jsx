import React from "react";

import styled from "styled-components";

import { SButton, colors } from "@styles";
import { lightgreen } from "@styles/block.style";
import { g8, green } from "@styles/text.style";

const GnbButton = ({ children, onClick, isHistoryOpen }) => {
  return (
    <S.Button
      row
      act
      g={6}
      br={12}
      h={40}
      pdl={15}
      pdr={15}
      isHistoryOpen={isHistoryOpen}
      onClick={onClick}
    >
      {children}
    </S.Button>
  );
};

const S = {};

S.Button = styled(SButton)`
  border: 1px solid
    ${(props) => (props.isHistoryOpen ? colors.green : colors.gray3)};
  ${(props) => props.isHistoryOpen && lightgreen}
  ${(props) => (props.isHistoryOpen ? green : g8)}

  @media only screen and (max-width: 768px) {
    height: 42px;
    padding-left: 14px;
    padding-right: 14px;
  }
`;

export default GnbButton;
