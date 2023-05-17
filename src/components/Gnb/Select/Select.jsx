/* eslint-disable react/function-component-definition */
import React, { useState } from "react";

import SelectPresenter from "./SelectPresenter";

const DUMMY_OPTIONS = [
  {
    name: "원",
    symbol: "₩",
    value: "krw",
  },
  {
    name: "USD",
    symbol: "$",
    value: "usd",
  },
];

const Select = () => {
  const selectedCurrency = DUMMY_OPTIONS[0]; // TODO: zustand store에서 현재 선택된 화폐단위를 가져옴.
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SelectPresenter
      isOpen={isOpen}
      options={DUMMY_OPTIONS}
      selectedOption={selectedCurrency}
      onClick={() => {
        setIsOpen((prev) => !prev);
      }}
    />
  );
};

export default Select;
