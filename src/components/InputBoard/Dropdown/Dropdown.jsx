/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React, { useState } from "react";

import DropdownPresenter from "@components/InputBoard/Dropdown/DropdownPresenter";

export const DUMMY_OPTIONS = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    image:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
  },
  {
    id: "ethereum",
    name: "Ethereum",
    image:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
  },
  {
    id: "tether",
    name: "Tether",
    image:
      "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
  },
  {
    id: "binancecoin",
    name: "BNB",
    image:
      "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850",
  },
  {
    id: "usd-coin",
    name: "USD Coin",
    image:
      "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389",
  },
  {
    id: "ripple",
    name: "XRP",
    image:
      "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731",
  },
  {
    id: "cardano",
    name: "Cardano",
    image:
      "https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860",
  },
  {
    id: "staked-ether",
    name: "Lido Staked Ether",
    image:
      "https://assets.coingecko.com/coins/images/13442/large/steth_logo.png?1608607546",
  },
  {
    id: "dogecoin",
    name: "Dogecoin",
    image:
      "https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256",
  },
];

const Dropdown = ({ options }) => {
  // isOpen 상태 빼고 전부 InputBoard에서 Dropdown한테 props로 넘기기
  const selectedCoinId = "bitcoin";
  const [isOpen, setIsOpen] = useState(false);
  const selectedCoinInfo = options.find((option) => {
    return option.id === selectedCoinId;
  });
  return (
    <DropdownPresenter
      isOpen={isOpen}
      onClick={() => {
        setIsOpen((prev) => !prev);
      }}
      selectedValue={selectedCoinInfo}
      options={options}
    />
  );
};

export default Dropdown;
