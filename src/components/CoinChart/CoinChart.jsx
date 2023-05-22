/* eslint-disable indent */
/* eslint-disable operator-linebreak */
/* eslint-disable no-bitwise */
import React, { useEffect, useState } from "react";

import axios from "axios";

import formatDateToString from "@/utils/formatDate";

import CoinChartPresenter from "./CoinChartPresenter";

const userInputStore = {
  selectedCoinInfo: {
    id: "bitcoin",
    name: "Bitcoin",
    imageUrl:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
  },
  selectedDate: new Date(),
  selectedMoney: 3500,
  calculatedMoney: 3200,
  selectedCurrency: "usd",
};

const CoinChart = () => {
  const [DaysQuery, setDaysQuery] = useState("max");
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const getChartData = async (coinId, currency, days) => {
      // TODO: api 구축하면 교체하기
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}&x_cg_pro_api_key=CG-ReEFUZC8FpbDTSJ6AmbKy3m1`
      );
      const responseChartData = res?.data?.prices?.map(([timestamp, p]) => {
        let [areaValue, xAxisDate, tickDate, tickPrice] = new Array(4).fill("");

        const time = new Date(timestamp);
        const [dd, MM, yyyy, hh] = [
          time.getDate(),
          time.getMonth() + 1,
          time.getFullYear(),
          time.getHours(),
        ];

        areaValue = currency === "usd" ? p >> 0 : (p / 100) >> 0;
        tickDate = `${yyyy}년 ${MM}월 ${dd}일`;

        tickPrice =
          currency === "usd"
            ? `$${(p >> 0).toLocaleString()}.${p.toFixed(2).slice(-2)}`
            : `₩${(p >> 0).toLocaleString()}`;

        if (days === "max" || days === "365") xAxisDate = `${yyyy}년 ${MM}월`;
        else if (days === "31" || days === "7") xAxisDate = `${MM}월 ${dd}일`;
        else xAxisDate = hh < 13 ? `오전 ${hh}시` : `오후 ${hh}시`;

        return {
          areaValue,
          xAxisDate,
          tickDate,
          tickPrice,
        };
      });

      setChartData(responseChartData);
    };

    // 계산한 값이 없을 경우 데이터 요청을 하지 않도록 합니다.
    if (userInputStore.calculatedMoney !== -1) {
      getChartData(
        userInputStore.selectedCoinInfo.id,
        userInputStore.selectedCurrency,
        DaysQuery
      );
    }
  }, [
    userInputStore.selectedCoinInfo.id,
    userInputStore.selectedCurrency,
    DaysQuery,
  ]);

  /**
   * @returns
   *   - 그래프를 그릴 때 필요한 데이터들을 가공하는 함수입니다.
   *   - 지금은 mock 데이터를 사용하느라 이렇게 뒀는데 zustand를 사용하면 변경될 것 같습니다.
   */
  const tempFunction = () => {
    const formattedDate = formatDateToString(userInputStore.selectedDate);
    const trimmedUserSelectMoney =
      userInputStore.selectedCurrency === "usd"
        ? `$${userInputStore.selectedMoney.toLocaleString("ko-KR")}`
        : `${userInputStore.selectedMoney.toLocaleString("ko-KR")}원으`;
    const trimmedUserSelectCalcMoney =
      userInputStore.selectedCurrency === "usd"
        ? `$${
            Number.isInteger(userInputStore.calculatedMoney)
              ? (userInputStore.calculatedMoney >> 0).toLocaleString("ko-KR")
              : userInputStore.calculatedMoney
                  .toFixed(2)
                  .toLocaleString("ko-KR")
          }`
        : `${
            Number.isInteger(userInputStore.calculatedMoney)
              ? (userInputStore.calculatedMoney >> 0).toLocaleString("ko-KR")
              : userInputStore.calculatedMoney
                  .toFixed(2)
                  .toLocaleString("ko-KR")
          }원`;

    const currentTime = new Date();
    const toLocaleDate = currentTime.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const toLocaleTime = currentTime.toLocaleTimeString("ko-KR", {
      hour: "numeric",
    });

    const isGray = userInputStore.selectedMoney === 0;
    const isGreen =
      userInputStore.selectedMoney < userInputStore.calculatedMoney;
    return {
      formattedDate,
      trimmedUserSelectMoney,
      trimmedUserSelectCalcMoney,
      toLocaleDate,
      toLocaleTime,
      isGray,
      isGreen,
    };
  };

  const {
    formattedDate,
    trimmedUserSelectMoney,
    trimmedUserSelectCalcMoney,
    toLocaleDate,
    toLocaleTime,
    isGray,
    isGreen,
  } = tempFunction();

  return (
    <CoinChartPresenter
      coinName={userInputStore.selectedCoinInfo.name}
      coinImageUrl={userInputStore.selectedCoinInfo.imageUrl}
      formattedDate={formattedDate}
      trimmedUserSelectMoney={trimmedUserSelectMoney}
      trimmedUserSelectCalcMoney={trimmedUserSelectCalcMoney}
      toLocaleDate={toLocaleDate}
      toLocaleTime={toLocaleTime}
      isGray={isGray}
      isGreen={isGreen}
      coinCurrency={userInputStore.selectedCurrency}
      chartData={chartData}
      onClickChip={(cq) => setDaysQuery(cq)}
    />
  );
};

export default CoinChart;
