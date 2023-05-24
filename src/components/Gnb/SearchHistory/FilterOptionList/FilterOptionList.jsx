import React, { useRef } from "react";

import styled from "styled-components";

import useOutsideClick from "@/hooks/useOutsideClick";
import { SDiv, colors } from "@styles";

import FilterOptionListItem from "./FilterOptionListItem";

const FilterOptionList = ({
  onClickOutside,
  selectedOptions,
  options,
  onChangeOption,
}) => {
  const listRef = useRef(null);
  useOutsideClick(listRef, onClickOutside);
  return (
    <S.MainWrapper
      ref={listRef}
      onClick={(e) => {
        e.stopPropagation();
      }}
      white
      bd={`1px solid ${colors.gray3}`}
      br={8}
      w={125}
      pd="4px"
    >
      <ul>
        {options.map((option) => {
          return (
            <li key={option.value}>
              <FilterOptionListItem
                selectedOptions={selectedOptions}
                option={option}
                onChange={onChangeOption}
                checked={selectedOptions.includes(option.value)}
              />
            </li>
          );
        })}
      </ul>
    </S.MainWrapper>
  );
};

const S = {};

S.MainWrapper = styled(SDiv)`
  position: absolute;
  top: calc(100% + 8px);
  z-index: 10;
  ul {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
`;
export default FilterOptionList;
