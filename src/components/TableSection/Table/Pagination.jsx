import React from "react";

import styled from "styled-components";

import NextIcon from "@components/SVGComponents/NextIcon";
import PrevIcon from "@components/SVGComponents/PrevIcon";
import { SButton, SDiv, SText, colors } from "@styles";
import { b3, white } from "@styles/text.style";

const Pagination = ({ pageNum, onChangePage, onPagination }) => {
  const shownPageNums = [1, 2, 3, 4, 5, 6];

  return (
    <S.PaginationWrapper row act g={12} mg="0 auto">
      <SButton>
        <PrevIcon />
      </SButton>
      {shownPageNums.map((num) => (
        <S.Button
          ct
          w={22}
          h={22}
          br={4}
          key={num}
          isSelected={num === pageNum}
          onClick={() => {
            onChangePage(num);
          }}
        >
          <S.Text c2 g8 isSelected={num === pageNum}>
            {num}
          </S.Text>
        </S.Button>
      ))}
      <SDiv ct w={22} h={22} br={4} disableSelect>
        <SText c2 g8>
          ...
        </SText>
      </SDiv>
      <S.Button ct w={22} h={22} br={4}>
        <S.Text c2 g8>
          {31}
        </S.Text>
      </S.Button>
      <SButton>
        <NextIcon />
      </SButton>
    </S.PaginationWrapper>
  );
};

const S = {};

S.PaginationWrapper = styled(SDiv)``;

S.Button = styled(SButton)`
  background-color: ${(props) => props.isSelected && colors.green};
`;

S.Text = styled(SText)`
${(props) => props.isSelected && b3}
${(props) => props.isSelected && white}

@media only screen and (max-width: 768px) {
  font-size: 1.4rem;
`;

export default Pagination;
