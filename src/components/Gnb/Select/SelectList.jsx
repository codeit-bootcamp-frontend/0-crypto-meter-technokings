/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React, { useRef, useEffect } from "react";

import styled from "styled-components";

import colors from "@/styles/colors";
import SDiv from "@styles/micro-components/StyledDiv";

import SelectListItem from "./SelectListItem";

const SelectList = ({ options, onSelect, onClick, selectedIdx }) => {
  const selectListRef = useRef(null);
  const handleClick = (e) => {
    if (selectListRef.current && !selectListRef.current.contains(e.target)) {
      onClick();
    }
  };
  useEffect(() => {
    setTimeout(() => {
      document.addEventListener("click", handleClick);
    }, 0);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
  return (
    <S.SelectListWrapper
      ref={selectListRef}
      col
      ast
      pd="4px"
      g={4}
      mgt={4}
      br={12}
      bd={`1px solid ${colors.gray3}`}
      bg={colors.gray1}
    >
      {options.map((item, idx) => (
        <SelectListItem
          key={item.value}
          isSelected={idx === selectedIdx}
          option={item}
          onClick={onClick}
          onSelect={onSelect}
        />
      ))}
    </S.SelectListWrapper>
  );
};

const S = {};

S.SelectListWrapper = styled(SDiv)`
  position: absolute;

  width: 100%;
`;

export default SelectList;
