import React from "react";

import styled from "styled-components";

import OrderIcon from "@components/SVGComponents/OrderIcon";
import { SButton, SDiv, SText } from "@styles";
import { jed } from "@styles/block.style";

const TableHeader = ({ colInfo }) => {
  return (
    <th>
      <S.THeaderWrapper
        row
        act
        g={4}
        w={colInfo.colWidth}
        colName={colInfo.colName}
      >
        <SText s3 black>
          {colInfo.colName}
        </SText>
        <SButton>
          <OrderIcon />
        </SButton>
      </S.THeaderWrapper>
    </th>
  );
};

const S = {};

S.THeaderWrapper = styled(SDiv)`
  ${(props) => props.colName !== "#" && props.colName !== "화폐 이름" && jed}
`;
export default TableHeader;
