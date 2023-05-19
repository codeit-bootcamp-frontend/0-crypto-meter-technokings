import React from "react";

import styled from "styled-components";

import { SDiv, colors } from "@styles";

import Pagination from "./Pagination";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const TablePresenter = ({ dataSet }) => {
  const colInfos = [
    { colName: "#", colWidth: 57 },
    { colName: "화폐 이름", colWidth: 178 },
    { colName: "가격", colWidth: 204 },
    { colName: "총 시가", colWidth: 209 },
    { colName: "24시간 거래량", colWidth: 209 },
    { colName: "1시간 변동폭", colWidth: 146 },
    { colName: "24시간 변동폭", colWidth: 140 },
    { colName: "7일 변동폭", colWidth: 140 },
  ];
  return (
    <S.TableWrapper>
      <S.Table>
        <thead>
          <S.HeadRow>
            {colInfos.map((colInfo) => (
              <TableHeader key={colInfo.colName} colInfo={colInfo} />
            ))}
          </S.HeadRow>
        </thead>
        <tbody>
          {dataSet.map((data) => (
            <TableRow key={data.symbol} data={data} />
          ))}
        </tbody>
      </S.Table>
      <Pagination />
    </S.TableWrapper>
  );
};

const S = {};
S.TableWrapper = styled(SDiv)`
  border-top: 1px solid ${colors.gray9};
`;

S.Table = styled.table`
  width: 100%;
`;

S.HeadRow = styled.tr`
  height: 52px;

  border-bottom: 1px solid ${colors.gray2};
`;

export default TablePresenter;
