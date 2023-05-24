import React, { Suspense, lazy } from "react";

import { ErrorBoundary } from "react-error-boundary";
import { shallow } from "zustand/shallow";

import useUserInputStore from "@/stores/userInputStore";
import DefaultChartImage from "@components/CoinChart/DefaultChartImage";

import CoinChartLoader from "./CoinChartLoader";
import ErrorChartImage from "./ErrorChartImage";

const CoinChart = lazy(() => import("@components/CoinChart/CoinChart"));

const CoinChartWrapper = () => {
  const { calculatedMoney } = useUserInputStore(
    (state) => ({
      calculatedMoney: state.calculatedMoney,
    }),
    shallow
  );

  return calculatedMoney === -1 ? (
    <DefaultChartImage />
  ) : (
    <ErrorBoundary fallback={<ErrorChartImage />}>
      <Suspense fallback={<CoinChartLoader />}>
        <CoinChart />
      </Suspense>
    </ErrorBoundary>
  );
};

export default CoinChartWrapper;
