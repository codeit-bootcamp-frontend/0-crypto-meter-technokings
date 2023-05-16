import React from "react";

import SelectDurationChipContainer from "./SelectDurationChipContainer";

const SelectDurationChip = ({
  duration = "전체",
  onClick,
  isClicked = false,
}) => {
  return (
    <SelectDurationChipContainer
      duration={duration}
      onClick={onClick}
      isClicked={isClicked}
    />
  );
};

export default SelectDurationChip;
