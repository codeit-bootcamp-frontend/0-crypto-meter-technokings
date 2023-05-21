import React from "react";

import styled from "styled-components";

import formatMoney from "@/utils/formatMoney";
import { SDiv, SText, colors } from "@styles";

import PriceChange from "./PriceChange/PriceChange";

const TableRow = ({ data }) => {
  const calculateTradedCoins = (totalVolume, currentPrice) => {
    if (totalVolume && currentPrice) {
      return Math.round(totalVolume / currentPrice);
    }
    return null;
  };

  return (
    <S.BodyRow>
      <td>
        <SText b3 g6>
          {data.market_cap_rank}
        </SText>
      </td>
      <td>
        <S.NameWrapper row act g={12}>
          <S.ImageWrapper w={30} h={30}>
            <img src={data.image} alt={`${data.name} 이미지`} />
          </S.ImageWrapper>
          <S.NameTextWrapper col g={4}>
            <SText s2 black>
              {data.name}
            </SText>
            <SText c3 g5>
              {data.symbol.toUpperCase()}
            </SText>
          </S.NameTextWrapper>
        </S.NameWrapper>
      </td>
      <td>
        <SText b3 g8>
          {formatMoney(data.current_price, "krw", true)}
        </SText>
      </td>
      <td>
        <SText b2 g8>
          {formatMoney(data.fully_diluted_valuation, "krw", true)}
        </SText>
      </td>
      <td>
        <S.VolumeTextWrapper col g={4}>
          <SText right b2 g8>
            {formatMoney(data.total_volume, "krw", true)}
          </SText>
          <SText right c3 g5>
            {Intl.NumberFormat().format(
              calculateTradedCoins(data.total_volume, data.current_price)
            )}
            &nbsp;
            {data.symbol.toUpperCase()}
          </SText>
        </S.VolumeTextWrapper>
      </td>
      <td>
        <PriceChange
          change={
            Math.round(data.price_change_percentage_1h_in_currency * 100) / 100
          }
        />
      </td>
      <td>
        <PriceChange
          change={
            Math.round(data.price_change_percentage_24h_in_currency * 100) / 100
          }
        />
      </td>
      <td>
        <PriceChange
          change={
            Math.round(data.price_change_percentage_7d_in_currency * 100) / 100
          }
        />
      </td>
    </S.BodyRow>
  );
};

const S = {};

S.BodyRow = styled.tr`
  height: 73px;

  border-bottom: 1px solid ${colors.gray2};

  td:nth-child(n + 3) > span {
    float: right;
  }

  td:nth-child(n + 3) > div {
    float: right;
  }
`;

S.NameWrapper = styled(SDiv)``;

S.ImageWrapper = styled(SDiv)`
  img {
    width: 100%;
    height: 100%;
  }
`;

S.NameTextWrapper = styled(SDiv)``;

S.VolumeTextWrapper = styled(SDiv)``;

export default TableRow;
