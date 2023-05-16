import React from "react";

import styled from "styled-components";

import { colors, SButton, SText } from "@styles";
import { lightgreen } from "@styles/block.style";
import { g1, green } from "@styles/text.style";

const SearchHistoryButton = ({ isClicked = false, onClick }) => {
  return (
    <S.Button
      col
      ct
      br={12}
      w={81}
      h={40}
      onClick={onClick}
      isClicked={isClicked}
    >
      <S.ButtonText b3 isClicked={isClicked}>
        검색 기록
      </S.ButtonText>
    </S.Button>
  );
};

const S = {};

S.ButtonText = styled(SText)`
  ${(props) => (props.isClicked ? green : g1)}
`;

S.Button = styled(SButton)`
  border: 1px solid
    ${(props) => (props.isClicked ? colors.green : colors.gray3)};
  ${(props) => props.isClicked && lightgreen}
`;

export default SearchHistoryButton;
