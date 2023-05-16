import React from "react";
import "./App.css";
import SearchHistoryButton from "./components/SearchHistoryButton/SearchHistoryButton";
import IncreaseMoneyButton from "./components/IncreaseMoneyButton/IncreaseMoneyButton";
import PriceChange from "./components/PriceChange/PriceChange";
import SearchOptionInput from "./components/SearchOptionInput/SearchOptionInput";
import SelectCurrencyButton from "./components/SelectCurrencyButton/SelectCurrencyButton";
import MainLogo from "./components/SVGComponents/MainLogo";

function App() {
  return (
    <>
      CryptoMeter
      <div>
        <SearchHistoryButton />
      </div>
      <div>
        <IncreaseMoneyButton />
      </div>
      <div>
        <PriceChange />
      </div>
      <div>
        <SearchOptionInput />
      </div>
      <div>
        <SelectCurrencyButton />
      </div>
      <div>
        <MainLogo />
      </div>
    </>
  );
}

export default App;
