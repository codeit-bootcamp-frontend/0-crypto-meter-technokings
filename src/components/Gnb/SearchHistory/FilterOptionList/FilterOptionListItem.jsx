import React from "react";

import styled from "styled-components";

import { SDiv, SText, colors } from "@styles";

const FilterOptionListItem = ({
  selectedOptions,
  option,
  onChange,
  checked,
}) => {
  const isAlwaysChecked = selectedOptions.length === 1 && checked;
  return (
    <S.ItemWrapper col jct ast h={24} br={4}>
      <SDiv row act g={4} full>
        <S.CheckBoxWrapper jct act>
          <input
            type="checkbox"
            id={option.value}
            disabled={isAlwaysChecked}
            checked={checked}
            onChange={(e) => {
              onChange(e.target.value);
            }}
            value={option.value}
          />
        </S.CheckBoxWrapper>
        <S.Label htmlFor={option.value}>
          <SText g8 c1>
            {`${option.name} (${option.symbol})`}
          </SText>
        </S.Label>
      </SDiv>
    </S.ItemWrapper>
  );
};

const S = {};

S.ItemWrapper = styled(SDiv)`
  &:hover {
    background-color: ${colors.gray2};
  }
`;

S.CheckBox = styled.input`
  margin: 4px;
  & [type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
  }
`;

S.CheckBoxWrapper = styled(SDiv)`
  --borderWidth: 2.5px;
  input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
    vertical-align: middle;
    background: #fff;
    font-size: 1.8em;
    border-radius: 0.125em;
    display: inline-block;
    border: var(--borderWidth) solid #48c;
    width: 18px;
    height: 18px;
    position: relative;
    cursor: pointer;
  }
  input[type="checkbox"]:before,
  input[type="checkbox"]:after {
    content: "";
    position: absolute;
    background: #48c;
    width: calc(var(--borderWidth) * 2);
    height: var(--borderWidth);
    top: 50%;
    left: 10%;
    transform-origin: left center;
  }
  input[type="checkbox"]:before {
    transform: rotate(45deg)
      translate(calc(var(--borderWidth) / -2), calc(var(--borderWidth) / -2))
      scaleX(0);
    transition: transform 200ms ease-in 200ms;
  }
  input[type="checkbox"]:after {
    width: calc(var(--borderWidth) * 5);
    transform: rotate(-45deg) translateY(calc(var(--borderWidth) * 2)) scaleX(0);
    transform-origin: left center;
    transition: transform 200ms ease-in;
  }
  input[type="checkbox"]:checked:before {
    transform: rotate(45deg)
      translate(calc(var(--borderWidth) / -2), calc(var(--borderWidth) / -2))
      scaleX(1);
    transition: transform 200ms ease-in;
  }
  input[type="checkbox"]:checked:after {
    width: calc(var(--borderWidth) * 4);
    transform: rotate(-45deg) translateY(calc(var(--borderWidth) * 2)) scaleX(1);
    transition: transform 200ms ease-out 200ms;
  }
  input[type="checkbox"]:focus {
    outline: calc(var(--borderWidth) / 2) dotted rgba(0, 0, 0, 0.25);
  }
  input[type="checkbox"]:disabled {
    border: var(--borderWidth) solid ${colors.gray3};
  }
  input[type="checkbox"]:disabled:after,
  input[type="checkbox"]:disabled:before {
    background: ${colors.gray3};
  }
`;

S.Label = styled.label`
  width: 80%;
  cursor: pointer;
`;

export default FilterOptionListItem;
