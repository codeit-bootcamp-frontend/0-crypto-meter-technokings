import React, { useState } from "react";

import styled from "styled-components";

import imageNotExist from "@/assets/imageNotExist.svg";
import formatMoneyToString from "@/utils/formatMoney";
import { SDiv, SText, colors } from "@styles";

import PriceChange from "./PriceChange/PriceChange";

const TableRow = ({ coin, currency }) => {
  const calculateTradedCoins = (totalVolume, currentPrice) => {
    if (totalVolume && currentPrice) {
      return Math.round(totalVolume / currentPrice);
    }
    return null;
  };
  const [imageSrc, setImageSrc] = useState(coin.image);

  const handleImageError = () => {
    setImageSrc(imageNotExist);
  };

  return (
    <S.BodyRow>
      <td>
        <SText b3 g6>
          {coin.rank}
        </SText>
      </td>
      <td>
        <S.NameWrapper row act g={12}>
          <S.ImageWrapper w={30} h={30}>
            <img
              src={imageSrc}
              alt={`${coin.symbol}`}
              onError={handleImageError}
            />
          </S.ImageWrapper>
          <S.NameTextWrapper col g={4}>
            <SText s2 black>
              {coin.name}
            </SText>
            <SText c3 g5>
              {coin.symbol.toUpperCase()}
            </SText>
          </S.NameTextWrapper>
        </S.NameWrapper>
      </td>
      <td>
        <SText b3 g8>
          {formatMoneyToString(coin.price, currency, true)}
        </SText>
      </td>
      <td>
        <SText b2 g8>
          {formatMoneyToString(coin.marketCap, currency, true)}
        </SText>
      </td>
      <td>
        <S.VolumeTextWrapper col g={4}>
          <SText right b2 g8>
            {formatMoneyToString(coin.volume24h, currency, true)}
          </SText>
          <SText right c3 g5>
            {Intl.NumberFormat().format(
              calculateTradedCoins(coin.volume24h, coin.price)
            )}
            &nbsp;
            {coin.symbol.toUpperCase()}
          </SText>
        </S.VolumeTextWrapper>
      </td>
      <td>
        <PriceChange change={Math.round(coin.change1h * 100) / 100} />
      </td>
      <td>
        <PriceChange change={Math.round(coin.change24h * 100) / 100} />
      </td>
      <td>
        <PriceChange change={Math.round(coin.change7d * 100) / 100} />
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
