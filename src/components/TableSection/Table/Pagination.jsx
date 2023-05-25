import React from "react";

import styled, { css } from "styled-components";

import FirstIcon from "@components/SVGComponents/FirstIcon";
import LastIcon from "@components/SVGComponents/LastIcon";
import NextIcon from "@components/SVGComponents/NextIcon";
import PrevIcon from "@components/SVGComponents/PrevIcon";
import { SButton, SDiv, SText, colors } from "@styles";
import { b3, white } from "@styles/text.style";

const Pagination = ({ pageNum, onChangePage, isMobile, endPageNum }) => {
  const pagesPerPagination = isMobile ? 4 : 6;
  const paginationNum = Math.floor((pageNum - 1) / pagesPerPagination) + 1;
  const lastPaginationNum =
    Math.floor((endPageNum - 1) / pagesPerPagination) + 1;

  const startNum = (paginationNum - 1) * pagesPerPagination + 1;
  const endNum =
    paginationNum === lastPaginationNum
      ? endPageNum
      : paginationNum * pagesPerPagination;
  const shownPageNums = Array.from(
    { length: endNum - startNum + 1 },
    (_, i) => i + startNum
  );

  return (
    <S.PaginationWrapper row act g={12} mg="0 auto">
      {paginationNum !== 1 && (
        <S.Button
          onClick={() => {
            onChangePage(1);
          }}
        >
          <FirstIcon />
        </S.Button>
      )}
      <S.PaginationButton
        onClick={() => {
          onChangePage(startNum - pagesPerPagination);
        }}
        disabled={paginationNum === 1 && "disabled"}
      >
        <PrevIcon disabled={paginationNum === 1 && "disabled"} />
      </S.PaginationButton>
      {paginationNum >= 6 && (
        <SDiv row act g={12}>
          <SButton
            ct
            w={22}
            h={22}
            onClick={() => {
              onChangePage(startNum - pagesPerPagination * 5);
            }}
          >
            <S.Text c2 g8>
              {startNum - pagesPerPagination * 5}
            </S.Text>
          </SButton>
          <SDiv ct w={22} h={22} br={4} disableSelect>
            <SText c2 g8>
              ...
            </SText>
          </SDiv>
        </SDiv>
      )}
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

      {paginationNum <= lastPaginationNum - 5 && (
        <SDiv row act g={12}>
          <SDiv ct w={22} h={22} br={4} disableSelect>
            <SText c2 g8>
              ...
            </SText>
          </SDiv>
          <SButton
            ct
            w={22}
            h={22}
            onClick={() => {
              onChangePage(startNum + pagesPerPagination * 5);
            }}
          >
            <S.Text c2 g8>
              {startNum + pagesPerPagination * 5}
            </S.Text>
          </SButton>
        </SDiv>
      )}
      <S.PaginationButton
        paginationNum={paginationNum}
        onClick={() => {
          onChangePage(endNum + 1);
        }}
        disabled={paginationNum === lastPaginationNum && "disabled"}
      >
        <NextIcon
          disabled={paginationNum === lastPaginationNum && "disabled"}
        />
      </S.PaginationButton>

      {paginationNum !== lastPaginationNum && (
        <S.Button
          onClick={() => {
            onChangePage(endPageNum);
          }}
        >
          <LastIcon />
        </S.Button>
      )}
    </S.PaginationWrapper>
  );
};

const defaultCursor = css`
  cursor: default;
`;

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

S.PaginationButton = styled(SButton)`
  ${(props) => props.disabled && defaultCursor}
`;

export default Pagination;
