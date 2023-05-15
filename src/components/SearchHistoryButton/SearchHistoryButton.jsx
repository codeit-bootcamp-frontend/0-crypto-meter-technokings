import React, { useState } from "react";

import SearchHistoryButtonContainer from "./SearchHistoryButtonContainer";

const SearchHistoryButton = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClickButton = () => {
    setIsClicked((prev) => !prev);
  };
  return (
    <SearchHistoryButtonContainer
      isClicked={isClicked}
      onClick={handleClickButton}
    />
  );
};

export default SearchHistoryButton;
