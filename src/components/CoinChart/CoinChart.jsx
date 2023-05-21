/* eslint-disable indent */
/* eslint-disable operator-linebreak */
/* eslint-disable no-bitwise */
import React, { useEffect, useState } from "react";

import chartDataMock from "./chart.data";
import CoinChartPresenter from "./CoinChartPresenter";

/**
 * zustand에서 관리할 user store
 *   - coinName, coinImageUrl이 별도로 필요합니다. (혹은 api 한번 더 요청)
 */
const zustandUserStore = {
  coinName: "Bitcoin",
  coinImageUrl:
    "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
  userSelectDate: "dd-MM-yyyy",
  userSelectMoney: 1500, // usd
  userSelectCalcMoney: 1250, // usd
  userSelectedCoinId: "bitcoin",
};
/**
 * zustand에서 관리할 coin store
 */
const zustandCoinStore = {
  coinCurrency: "usd",
  /**
   * api (추가 기능 관련)
   * - /coins/{id}/market_chart 로만 하면 일반적인 데이터를 받아올 수 있지만,
   * - /coins/{id}/market_chart/range를 사용하면 사용자가 선택한 날짜에서 현재까지의 그래프를 그릴 수 있습니다.
   *
   * @params zustand를 id만 필요합니다. chartdata 대신 response.data로 mapping 합니다.
   * @returns [{ areaValue: 그래프 영역 데이터, xAxisDate: x축 날짜, tickDate: tick 날짜, tickPrice: tick 금액}]
   */
  getCoinChart: (chartdata, currency, query) => {
    /**
     * map을 돌면서 api 데이터 중 필요한 데이터만 가공합니다.
     * 원래라면 api 요청 받아와서 가공이므로 async await입니다.
     *
     * const res = await axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currency}&days=${query}`);
     */
    const graphData = chartdata.map(([timestamp, p]) => {
      let [areaValue, xAxisDate, tickDate, tickPrice] = new Array(5).fill("");

      const [MM, dd, yyyy] = new Date(timestamp)
        .toLocaleDateString("en-us")
        .split("/");
      areaValue = currency === "usd" ? p >> 0 : (p / 100) >> 0; // usd면 정수로 변경해주고, krw면 단위를 끊습니다.
      tickDate = `${yyyy}년 ${MM}월 ${dd}일`;

      // usd면 정수로 변경해주고, krw면 단위를 끊습니다. (화폐 단위가 늘어나면 switch)
      tickPrice =
        currency === "usd"
          ? `$${(p >> 0).toLocaleString()}.${p.toFixed(2).slice(-2)}`
          : `₩${(p >> 0).toLocaleString()}`;

      // x축에 보여줄 날짜 데이터를 쿼리에 맞게 다르게 보여줍니다.
      if (query === "max" || query === "365") xAxisDate = `${yyyy}년 ${MM}월`;
      else if (query === "31" || query === "7") xAxisDate = `${MM}월 ${dd}일`;
      else {
        // 1일 단위의 경우 시간 단위로 끊습니다.
        xAxisDate = `${new Date(timestamp).toLocaleTimeString("ko-kr", {
          hour: "numeric",
        })}`;
      }

      return {
        areaValue,
        xAxisDate,
        tickDate,
        tickPrice,
      };
    });

    return graphData;
  },
};

/**
 * @state api에 같이 넘겨줄 days를 chipQuery로 관리합니다.
 * @state chartData는 임시로 작성해둔 것이고 zustand로 바꾸면 사라질 state입니다.
 */
const CoinChart = () => {
  /**
   userInputStore.selectedCoinInfo.id
   userInputStore.selectedCoinInfo.name
   userInputStore.selectedCoinInfo.imageUrl
   userInputStore.selectedDate
   userInputStore.selectedMoney
   userInputStore.calculatedMoney
   userInputStore.selectedCurrency
   */

  const [chipQuery, setChipQuery] = useState("max");
  const [chartData, setChartData] = useState(
    zustandCoinStore.getCoinChart(
      chartDataMock.usd_max.prices,
      zustandCoinStore.coinCurrency,
      chipQuery
    )
  );

  useEffect(() => {
    setChartData(
      zustandCoinStore.getCoinChart(
        chartDataMock[`${zustandCoinStore.coinCurrency}_${chipQuery}`]?.prices,
        zustandCoinStore.coinCurrency,
        chipQuery
      )
    );
    // chipQuery가 변경될 때마다 api 요청
  }, [chipQuery]);

  /**
   * @returns
   *   - 그래프를 그릴 때 필요한 데이터들을 가공하는 함수입니다.
   *   - 지금은 mock 데이터를 사용하느라 이렇게 뒀는데 zustand를 사용하면 변경될 것 같습니다.
   */
  const tempFunction = () => {
    const [dd, MM, yyyy] = zustandUserStore.userSelectDate.split("-");
    const trimmedUserSelectMoney =
      zustandCoinStore.coinCurrency === "usd"
        ? `$${zustandUserStore.userSelectMoney.toLocaleString("ko-KR")}`
        : `${zustandUserStore.userSelectMoney.toLocaleString("ko-KR")}원으`;
    const trimmedUserSelectCalcMoney =
      zustandCoinStore.coinCurrency === "usd"
        ? `$${
            Number.isInteger(zustandUserStore.userSelectCalcMoney)
              ? (zustandUserStore.userSelectCalcMoney >> 0).toLocaleString(
                  "ko-KR"
                )
              : zustandUserStore.userSelectCalcMoney
                  .toFixed(2)
                  .toLocaleString("ko-KR")
          }`
        : `${
            Number.isInteger(zustandUserStore.userSelectCalcMoney)
              ? (zustandUserStore.userSelectCalcMoney >> 0).toLocaleString(
                  "ko-KR"
                )
              : zustandUserStore.userSelectCalcMoney
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

    const isGray = zustandUserStore.userSelectMoney === 0;
    const isGreen =
      zustandUserStore.userSelectMoney < zustandUserStore.userSelectCalcMoney;

    return {
      dd,
      MM,
      yyyy,
      trimmedUserSelectMoney,
      trimmedUserSelectCalcMoney,
      toLocaleDate,
      toLocaleTime,
      isGray,
      isGreen,
    };
  };

  const {
    dd,
    MM,
    yyyy,
    trimmedUserSelectMoney,
    trimmedUserSelectCalcMoney,
    toLocaleDate,
    toLocaleTime,
    isGray,
    isGreen,
  } = tempFunction();

  return (
    <CoinChartPresenter
      coinName={zustandUserStore.coinName}
      coinImageUrl={zustandUserStore.coinImageUrl}
      yyyy={yyyy}
      MM={MM}
      dd={dd}
      trimmedUserSelectMoney={trimmedUserSelectMoney}
      trimmedUserSelectCalcMoney={trimmedUserSelectCalcMoney}
      toLocaleDate={toLocaleDate}
      toLocaleTime={toLocaleTime}
      isGray={isGray}
      isGreen={isGreen}
      coinCurrency={zustandCoinStore.coinCurrency}
      chartData={chartData}
      onClickChip={(cq) => setChipQuery(cq)}
    />
  );
};

export default CoinChart;
