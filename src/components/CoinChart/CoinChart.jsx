/* eslint-disable indent */
/* eslint-disable operator-linebreak */
/* eslint-disable no-bitwise */
import React, { useState } from "react";

import { shallow } from "zustand/shallow";

import useGetData from "@/hooks/useGetData";
import useUserInputStore from "@/stores/userInputStore";
import formatDateToString from "@/utils/formatDate";

import CoinChartPresenter from "./CoinChartPresenter";

const CoinChart = () => {
  const [daysQuery, setDaysQuery] = useState("max");

  const {
    calculatedMoney,
    selectedDate,
    selectedCurrency,
    selectedMoney,
    selectedCoinInfo,
  } = useUserInputStore(
    (state) => ({
      calculatedMoney: state.calculatedMoney,
      selectedDate: state.selectedDate,
      selectedCurrency: state.selectedCurrency,
      selectedMoney: state.selectedMoney,
      selectedCoinInfo: state.selectedCoinInfo,
    }),
    shallow
  );

  /**
   * api에서 받은 데이터를 가공하는 함수
   *
   * @param {object} - axois로 받은 데이터
   * @param {string} - store에서 가져온 화폐 단위
   * @param {string} - api에 넣을 날짜 쿼리
   */
  const trimmMarketDataToChart = (raw, currency, days) => {
    const chart = raw?.prices?.map(([timestamp, p]) => {
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
    return chart;
  };

  /**
   * store에서 구독한 데이터를 가공하는 함수
   */
  const trimmUserStoreToChart = () => {
    const formattedDate = formatDateToString(selectedDate);
    const trimmedUserSelectMoney =
      selectedCurrency === "usd"
        ? `$${selectedMoney.toLocaleString("ko-KR")}`
        : `${selectedMoney.toLocaleString("ko-KR")}원으`;
    const trimmedUserSelectCalcMoney =
      selectedCurrency === "usd"
        ? `$${
            Number.isInteger(calculatedMoney)
              ? (calculatedMoney >> 0).toLocaleString("ko-KR")
              : calculatedMoney.toFixed(2).toLocaleString("ko-KR")
          }`
        : `${
            Number.isInteger(calculatedMoney)
              ? (calculatedMoney >> 0).toLocaleString("ko-KR")
              : calculatedMoney.toFixed(2).toLocaleString("ko-KR")
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

    const isGray = selectedMoney === 0 && calculatedMoney === 0;
    const isGreen = selectedMoney < calculatedMoney;
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
  } = trimmUserStoreToChart();

  const suspenseData = useGetData(
    `/coins/${selectedCoinInfo.id}/market_chart?vs_currency=${selectedCurrency}&days=${daysQuery}`
  );
  return (
    <CoinChartPresenter
      coinName={selectedCoinInfo.name}
      coinImageUrl={selectedCoinInfo.imageUrl}
      formattedDate={formattedDate}
      trimmedUserSelectMoney={trimmedUserSelectMoney}
      trimmedUserSelectCalcMoney={trimmedUserSelectCalcMoney}
      toLocaleDate={toLocaleDate}
      toLocaleTime={toLocaleTime}
      isGray={isGray}
      isGreen={isGreen}
      coinCurrency={selectedCurrency}
      chartData={trimmMarketDataToChart(
        suspenseData?.read(),
        selectedCurrency,
        daysQuery
      )}
      onClickChip={(cq) => setDaysQuery(cq)}
      suspenseData={suspenseData}
    />
  );
};

export default CoinChart;
