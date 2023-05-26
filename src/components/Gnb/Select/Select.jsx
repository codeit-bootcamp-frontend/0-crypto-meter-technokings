/* eslint-disable react/function-component-definition */
import React from "react";

import SelectPresenter from "./SelectPresenter";

const Select = ({
  options,
  selectedIdx,
  onSelect,
  isSelectOpen,
  setIsSelectOpen,
}) => {
  return (
    <SelectPresenter
      isOpen={isSelectOpen}
      options={options}
      selectedIdx={selectedIdx}
      onClick={() => {
        setIsSelectOpen((prev) => !prev);
      }}
      onSelect={onSelect}
    />
  );
};

export default Select;
