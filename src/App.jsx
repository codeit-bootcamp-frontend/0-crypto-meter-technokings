import React from "react";

import "./App.css";
import useUserInputStore from "@/stores/userInputStore";
import { Gnb } from "@components";
import CoinChart from "@components/CoinChart/CoinChart";
import InputBoard from "@components/InputBoard/InputBoard";

const App = () => {
  const { calculateMoney, calculatedMoney } = useUserInputStore();
  return (
    <>
      <Gnb />
      <InputBoard />
      <CoinChart />
      <button onClick={calculateMoney} type="button">
        계산하기
      </button>
      <div>{calculatedMoney}</div>
    </>
  );
};

export default App;
