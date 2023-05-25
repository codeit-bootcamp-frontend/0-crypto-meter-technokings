/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from "react";

import styled from "styled-components";

import { colors } from "@styles";

const LastIcon = () => {
  return (
    <S.Svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.53183 10.4144C1.70756 10.5901 1.99249 10.5901 2.16822 10.4144L6.29131 6.29128C6.3757 6.20689 6.42311 6.09243 6.42311 5.97309C6.42311 5.85374 6.3757 5.73928 6.29131 5.65489L2.16822 1.5318C1.99249 1.35607 1.70756 1.35607 1.53183 1.5318C1.35609 1.70754 1.35609 1.99246 1.53183 2.1682L5.33671 5.97309L1.53183 9.77797C1.35609 9.95371 1.35609 10.2386 1.53183 10.4144Z"
        fill={colors.gray8}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.53183 10.4144C5.70756 10.5901 5.99249 10.5901 6.16822 10.4144L10.2913 6.29128C10.3757 6.20689 10.4231 6.09243 10.4231 5.97309C10.4231 5.85374 10.3757 5.73928 10.2913 5.65489L6.16822 1.5318C5.99249 1.35607 5.70756 1.35607 5.53183 1.5318C5.35609 1.70754 5.35609 1.99246 5.53183 2.1682L9.33671 5.97309L5.53183 9.77797C5.35609 9.95371 5.35609 10.2386 5.53183 10.4144Z"
        fill={colors.gray8}
      />
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

  &:hover {
    filter: brightness(4);
  }
`;

export default LastIcon;
