import React, { useState } from "react";

import SelectDurationChipContainer from "./SelectDurationChipContainer";

const SelectDurationChip = ({ duration = "전체", onClick }) => {
  const [isClicked, setIsClicked] = useState(true);
  return (
    <SelectDurationChipContainer
      duration={duration}
      onClick={onClick}
      isClicked={isClicked}
    />
  );
};

export default SelectDurationChip;
