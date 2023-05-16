import React from "react";

import { colors, SDiv, SText } from "@styles";

const SelectCurrencyButtonContainer = () => {
  return (
    <SDiv
      row
      sb
      act
      bd={`1px solid ${colors.gray3}`}
      br={12}
      w={90}
      h={40}
      pdl={15}
      pdr={10}
      black
    >
      <SText b3 g8>
        원 (₩)
      </SText>
      <img
        style={{ width: "12px", height: "7.5px" }}
        src="/src/assets/images/dropdown.arrow.svg"
        alt="드롭다운 화살표"
      />
    </SDiv>
  );
};

export default SelectCurrencyButtonContainer;
