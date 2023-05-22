import React from "react";

import styled from "styled-components";

import OrderIcon from "@components/SVGComponents/OrderIcon";
import { SButton, SDiv, SText } from "@styles";
import { jed } from "@styles/block.style";

const TableHeader = ({ colInfo, colWidth, onSort, sortState }) => {
  const handleSortButtonClick = () => {
    onSort(colInfo.colKey);
  };
  return (
    <th>
      <S.THeaderWrapper row act g={4} w={colWidth} colName={colInfo.colName}>
        <SText s3 black>
          {colInfo.colName}
        </SText>
        <SButton onClick={handleSortButtonClick}>
          <OrderIcon sortState={sortState} />
        </SButton>
      </S.THeaderWrapper>
    </th>
  );
};

const S = {};

S.THeaderWrapper = styled(SDiv)`
  ${(props) => props.colName !== "#" && props.colName !== "화폐 이름" && jed}
  @media only screen and (max-width: 768px) {
    gap: ${(props) => props.colName === "#" && "0px"};

    margin-left: ${(props) => props.colName === "화폐 이름" && "5px"};
  }
`;
export default TableHeader;
