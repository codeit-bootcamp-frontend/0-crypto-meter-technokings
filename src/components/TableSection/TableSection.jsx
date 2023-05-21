import React from "react";

import styled from "styled-components";

import { SDiv, SHeading3, colors } from "@styles";

import Table from "./Table/Table";

const TableSection = () => {
  return (
    <S.TableSectionWrapper
      col
      g={32}
      br={25}
      mgl={24}
      mgr={36}
      pd="36px 48px 60px 48px"
      white
    >
      <SHeading3>전체 암호화폐 시세</SHeading3>
      <Table />
    </S.TableSectionWrapper>
  );
};

const S = {};

// Tablet 부터는 페이지 전체 좌우 마진 줄 것으로 보여 마진 0으로 변경함
S.TableSectionWrapper = styled(SDiv)`
  max-width: 1379px;

  @media only screen and (max-width: 1200px) {
    border-radius: 0;
    margin: 0;
    padding: 0;
    background-color: ${colors.white};
  }

  @media only screen and (max-width: 768px) {
    gap: 18px;
  }
`;

export default TableSection;
