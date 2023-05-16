import React from "react";

import { colors, SInput, SDiv } from "@styles";

const SearchOptionInputContainer = () => {
  return (
    <SDiv
      row
      sb
      act
      bd={`1px solid ${colors.gray6}`}
      br={12}
      w={365}
      h={74}
      pdl={25}
      pdr={20}
      black
    >
      <SInput placeholder="0" b1 white />
      <img
        style={{ width: "12px", height: "7.5px" }}
        src="/src/assets/images/dropdown.arrow.svg"
        alt="드롭다운 화살표"
      />
    </SDiv>
  );
};

export default SearchOptionInputContainer;
