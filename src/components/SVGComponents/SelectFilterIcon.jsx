import React from "react";

import styled from "styled-components";

import { colors } from "@/styles";

const SelectFilterIcon = () => {
  return (
    <S.Svg
      width="24"
      height="24"
      viewBox="0 0 23 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="0.912162"
        y1="2.65546"
        x2="22.0878"
        y2="2.65546"
        stroke={colors.black}
        strokeWidth="1.82432"
        strokeLinecap="round"
      />
      <line
        x1="0.912162"
        y1="12.3851"
        x2="22.0878"
        y2="12.3851"
        stroke={colors.black}
        strokeWidth="1.82432"
        strokeLinecap="round"
      />
      <line
        x1="0.912162"
        y1="21.7905"
        x2="22.0878"
        y2="21.7905"
        stroke={colors.black}
        strokeWidth="1.82432"
        strokeLinecap="round"
      />
      <circle cx="7.5" cy="2.5" r="2.5" fill={colors.black} />
      <circle cx="17.5" cy="12.5" r="2.5" fill={colors.black} />
      <circle cx="4.5" cy="21.5" r="2.5" fill={colors.black} />
    </S.Svg>
  );
};

const S = {};

S.Svg = styled.svg`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;

  cursor: pointer;

  &:hover {
    filter: opacity(0.7);
  }

  @media only screen and (max-width: 768px) {
    width: 15px;
    height: 15px;
  }
`;
export default SelectFilterIcon;
