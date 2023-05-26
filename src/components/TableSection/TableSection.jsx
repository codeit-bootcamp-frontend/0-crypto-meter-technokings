import React from "react";

import styled from "styled-components";

import { SDiv, SHeading3, colors } from "@styles";

import Table from "./Table/Table";

const TableSection = () => {
  return (
    <S.TableSectionWrapper col g={32} br={25} pd="36px 48px 60px 48px" white>
      <SHeading3>전체 암호화폐 시세</SHeading3>
      <Table />
    </S.TableSectionWrapper>
  );
};

const S = {};

S.TableSectionWrapper = styled(SDiv)`
  width: 100%;
  max-width: 1379px;

  @media only screen and (max-width: 1200px) {
    margin: 0;
    padding: 36px 12px 56px;
    background-color: ${colors.white};
  }

  @media only screen and (max-width: 768px) {
    gap: 18px;
    padding: 36px 4px 56px;
  }
`;

export default TableSection;
