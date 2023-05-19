import React from "react";

import styled from "styled-components";

import { SDiv, SHeading3 } from "@styles";

import Table from "./Table/Table";

const TableSection = () => {
  return (
    <S.TableSectionWrapper
      col
      g={32}
      br={25}
      w={1379}
      pd="36px 48px 60px 48px"
      white
    >
      <SHeading3>전체 암호화폐 시세</SHeading3>
      <Table />
    </S.TableSectionWrapper>
  );
};

const S = {};

S.TableSectionWrapper = styled(SDiv)``;

export default TableSection;
