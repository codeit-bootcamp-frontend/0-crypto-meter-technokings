/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from "react";

import styled from "styled-components";

import colors from "@/styles/colors";

const FilterIcon = () => {
  return (
    <S.Svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="16" fill={colors.gray7} />
      <rect x="8" y="10" width="16" height="2" rx="1" fill={colors.white} />
      <rect x="10.5" y="15" width="11" height="2" rx="1" fill={colors.white} />
      <rect x="13" y="20" width="6" height="2" rx="1" fill={colors.white} />
    </S.Svg>
  );
};

const S = {};

S.Svg = styled.svg`
  display: none;

  @media only screen and (max-width: 768px) {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    width: 32px;
    height: 32px;
  }

  @media only screen and (max-width: 375px) {
    width: 30px;
    height: 30px;
  }
`;

export default FilterIcon;
