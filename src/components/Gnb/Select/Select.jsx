/* eslint-disable react/function-component-definition */
import React, { useState } from "react";

import SelectPresenter from "./SelectPresenter";

const Select = ({ options, selectedIdx, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SelectPresenter
      isOpen={isOpen}
      options={options}
      selectedIdx={selectedIdx}
      onClick={() => {
        setIsOpen((prev) => !prev);
      }}
      onSelect={onSelect}
    />
  );
};

export default Select;
