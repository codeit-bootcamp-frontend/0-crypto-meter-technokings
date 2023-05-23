import React from "react";

import styled from "styled-components";

import { SDiv } from "@styles";

import FilterOptionListItem from "./FilterOptionListItem";

const FilterOptionList = ({ selectedOptions, options, onChangeOption }) => {
  return (
    <S.MainWrapper
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {options.map((option) => {
        return (
          <FilterOptionListItem
            selectedOptions={selectedOptions}
            key={option.value}
            option={option}
            onChange={onChangeOption}
            checked={selectedOptions.includes(option.value)}
          />
        );
      })}
    </S.MainWrapper>
  );
};

const S = {};

S.MainWrapper = styled(SDiv)`
  position: absolute;
`;
export default FilterOptionList;
