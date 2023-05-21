import React from "react";

import "./App.css";
import { Gnb } from "@components";
import CoinChart from "@components/CoinChart/CoinChart";
import InputBoard from "@components/InputBoard/InputBoard";

const App = () => {
  return (
    <>
      <Gnb />
      <InputBoard />
      <CoinChart />
    </>
  );
};

export default App;
