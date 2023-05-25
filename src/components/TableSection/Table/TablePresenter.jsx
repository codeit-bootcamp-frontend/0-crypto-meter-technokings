import React, { useEffect, useState } from "react";

import styled from "styled-components";

import useMediaQuery from "@/hooks/useMediaQuery";
import { SDiv, colors } from "@styles";

import Pagination from "./Pagination";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const TablePresenter = ({
  coins,
  sortStates,
  pageNum,
  onSort,
  onChangePage,
  currency,
  endPageNum,
}) => {
  const { mediaQuery: mobileMediaQuery } = useMediaQuery(768);
  const { mediaQuery: tabletMediaQuery } = useMediaQuery(1200);
  const [isMobile, setIsMobile] = useState(mobileMediaQuery.matches);
  const [isTablet, setIsTablet] = useState(tabletMediaQuery.matches);

  useEffect(() => {
    setIsMobile(mobileMediaQuery.matches);
  }, [mobileMediaQuery.matches]);

  useEffect(() => {
    setIsTablet(tabletMediaQuery.matches);
  }, [tabletMediaQuery.matches]);

  let colWidth = [57, 175, 135, 209, 209, 146, 140, 140];
  if (isMobile) {
    colWidth = [26, 150, 130, 177, 177, 120, 120, 120];
  } else if (isTablet) {
    colWidth = [38, 175, 135, 209, 209, 146, 140, 140];
  }

  const colInfos = [
    { colName: "#", colKey: "rank" },
    { colName: "화폐 이름", colKey: "name" },
    { colName: "가격", colKey: "price" },
    { colName: "총 시가", colKey: "marketCap" },
    { colName: "24시간 거래량", colKey: "volume24h" },
    {
      colName: "1시간 변동폭",
      colKey: "change1h",
    },
    {
      colName: "24시간 변동폭",
      colKey: "change24h",
    },
    {
      colName: "7일 변동폭",
      colKey: "change7d",
    },
  ];

  return (
    <>
      <S.TableWrapper>
        <S.Table firstColWidth={colWidth[0]}>
          <thead>
            <S.HeadRow>
              {colInfos.map((colInfo, index) => (
                <TableHeader
                  key={colInfo.colName}
                  colInfo={colInfo}
                  colWidth={colWidth[index]}
                  onSort={onSort}
                  sortState={sortStates[colInfo.colKey]}
                />
              ))}
            </S.HeadRow>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <TableRow key={coin.id} coin={coin} currency={currency} />
            ))}
          </tbody>
        </S.Table>
      </S.TableWrapper>
      <Pagination
        pageNum={pageNum}
        onChangePage={onChangePage}
        isMobile={isMobile}
        endPageNum={endPageNum}
      />
    </>
  );
};

const S = {};
S.TableWrapper = styled(SDiv)`
  position: relative;
  overflow: auto hidden;

  border-top: 1px solid ${colors.gray9};

  &::-webkit-scrollbar-button {
    width: 0;
    height: 0;
  }

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: ${colors.gray2};
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

  th:nth-child(2)::after,
  td:nth-child(2)::after {
    content: "";
    position: absolute;
    top: 0;
    right: -30px;
    bottom: -1px;
    width: 30px;
    pointer-events: none;

    box-shadow: inset 15px 0 8px -8px rgba(5, 5, 5, 0.06);
  }

  tr:last-child td:nth-child(-n + 2)::before {
    content: "";
    position: absolute;
    bottom: -30px;
    left: 0;
    right: -1px;
    height: 30px;
    pointer-events: none;

    box-shadow: inset 0 15px 8px -8px rgba(5, 5, 5, 0.06);
  }
`;

S.HeadRow = styled.tr`
  height: 52px;

  border-bottom: 1px solid ${colors.gray2};
`;

S.TBody = styled.tbody``;

export default TablePresenter;
