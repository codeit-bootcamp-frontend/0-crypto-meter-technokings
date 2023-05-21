import React from "react";

import styled from "styled-components";

import { SDiv, colors } from "@styles";

import Pagination from "./Pagination";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const TablePresenter = ({
  dataSet,
  sortStates,
  pageNum,
  onSort,
  onChangePage,
  onPagination,
}) => {
  const colInfos = [
    { colName: "#", colKey: "market_cap_rank", colWidth: 57 },
    { colName: "화폐 이름", colKey: "name", colWidth: 200 },
    { colName: "가격", colKey: "current_price", colWidth: 182 },
    { colName: "총 시가", colKey: "fully_diluted_valuation", colWidth: 209 },
    { colName: "24시간 거래량", colKey: "total_volume", colWidth: 209 },
    {
      colName: "1시간 변동폭",
      colKey: "price_change_percentage_1h_in_currency",
      colWidth: 146,
    },
    {
      colName: "24시간 변동폭",
      colKey: "price_change_percentage_24h_in_currency",
      colWidth: 140,
    },
    {
      colName: "7일 변동폭",
      colKey: "price_change_percentage_7d_in_currency",
      colWidth: 140,
    },
  ];

  return (
    <>
      <S.TableWrapper>
        <S.Table
          firstColWidth={colInfos[0].colWidth}
          stickyWidth={colInfos[0].colWidth + colInfos[1].colWidth}
        >
          <thead>
            <S.HeadRow>
              {colInfos.map((colInfo) => (
                <TableHeader
                  key={colInfo.colName}
                  colInfo={colInfo}
                  onSort={onSort}
                  sortState={sortStates[colInfo.colKey]}
                />
              ))}
            </S.HeadRow>
          </thead>
          <tbody>
            {dataSet.map((data) => (
              <TableRow key={data.symbol} data={data} />
            ))}
          </tbody>
        </S.Table>
      </S.TableWrapper>
      <Pagination
        pageNum={pageNum}
        onChangePage={onChangePage}
        onPagination={onPagination}
      />
    </>
  );
};

const S = {};
S.TableWrapper = styled(SDiv)`
  position: relative;
  overflow-x: auto;

  border-top: 1px solid ${colors.gray9};

  &::-webkit-scrollbar {
    display: none;
  }
`;

S.Table = styled.table`
  margin-bottom: 4px;

  th:nth-child(-n + 2),
  td:nth-child(-n + 2) {
    position: sticky;
    z-index: 10;
    background-color: ${colors.white};
  }

  th:first-child,
  td:first-child {
    left: 0;
  }

  th:nth-child(2),
  td:nth-child(2) {
    left: ${(props) => `${props.firstColWidth}px`};
  }

  th:nth-child(2)::before,
  th:nth-child(2)::after,
  td:nth-child(2)::before,
  td:nth-child(2)::after,
  tr:last-child td:first-child::before,
  tr:last-child td:first-child::after {
    @media only screen and (max-width: 1456px) {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  th:nth-child(2)::before,
  td:nth-child(2)::before,
  tr:last-child td:first-child::before {
    z-index: -5;
    background-color: ${colors.white};
  }

  th:nth-child(2)::after,
  td:nth-child(2)::after {
    border-right: 1px solid ${colors.black};
    z-index: -10;
    filter: blur(4px);
  }

  tr:last-child td:nth-child(-n + 2)::after {
    border-bottom: 1px solid ${colors.black};
    z-index: -10;
    filter: blur(4px);
  }
`;

S.HeadRow = styled.tr`
  height: 52px;

  border-bottom: 1px solid ${colors.gray2};
`;

S.TBody = styled.tbody``;

export default TablePresenter;
