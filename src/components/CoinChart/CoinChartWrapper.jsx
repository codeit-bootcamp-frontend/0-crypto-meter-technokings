import React, { Suspense, lazy } from "react";

import useUserInputStore from "@/stores/userInputStore";
import DefaultChartImage from "@components/CoinChart/DefaultChartImage";

import CoinChartLoader from "./CoinChartLoader";

const CoinChart = lazy(() => import("@components/CoinChart/CoinChart"));

const CoinChartWrapper = () => {
  const userStore = useUserInputStore();

  return userStore.calculatedMoney === -1 ? (
    <DefaultChartImage />
  ) : (
    <Suspense fallback={<CoinChartLoader />}>
      <CoinChart />
    </Suspense>
  );
};

export default CoinChartWrapper;
