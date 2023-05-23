import React from "react";

import styled from "styled-components";

import { SDiv } from "@styles";

const FilterOptionListItem = ({ option, onChange, checked }) => {
  return (
    <SDiv col jct ast>
      <SDiv row act g={4}>
        <S.CheckBoxWrapper jct act>
          <input
            type="checkbox"
            id={option.value}
            checked={checked}
            onChange={(e) => {
              onChange(e.target.value);
            }}
            value={option.value}
          />
          <span className="checkbox" />
        </S.CheckBoxWrapper>
        <S.Label htmlFor={option.value}>{option.name}</S.Label>
      </SDiv>
    </SDiv>
  );
};

const S = {};

S.CheckBox = styled.input`
  margin: 4px;
  & [type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
  }
`;

S.CheckBoxWrapper = styled(SDiv)`
  input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
    vertical-align: middle;
    background: #fff;
    font-size: 1.8em;
    border-radius: 0.125em;
    display: inline-block;
    border: 2px solid #48c;
    width: 13px;
    height: 13px;
    position: relative;
  }
  input[type="checkbox"]:before,
  input[type="checkbox"]:after {
    content: "";
    position: absolute;
    background: #48c;
    width: calc(2px * 2);
    height: 2px;
    top: 50%;
    left: 10%;
    transform-origin: left center;
  }
  input[type="checkbox"]:before {
    transform: rotate(45deg) translate(calc(2px / -2), calc(2px / -2)) scaleX(0);
    transition: transform 200ms ease-in 200ms;
  }
  input[type="checkbox"]:after {
    width: calc(2px * 5);
    transform: rotate(-45deg) translateY(calc(2px * 2)) scaleX(0);
    transform-origin: left center;
    transition: transform 200ms ease-in;
  }
  input[type="checkbox"]:checked:before {
    transform: rotate(45deg) translate(calc(2px / -2), calc(2px / -2)) scaleX(1);
    transition: transform 200ms ease-in;
  }
  input[type="checkbox"]:checked:after {
    width: calc(2px * 4);
    transform: rotate(-45deg) translateY(calc(2px * 2)) scaleX(1);
    transition: transform 200ms ease-out 200ms;
  }
  input[type="checkbox"]:focus {
    outline: calc(2px / 2) dotted rgba(0, 0, 0, 0.25);
  }
`;

S.Label = styled.label``;

export default FilterOptionListItem;
