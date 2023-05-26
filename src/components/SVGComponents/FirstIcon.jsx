/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from "react";

import styled from "styled-components";

import { colors } from "@styles";

const FirstIcon = () => {
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
        d="M10.4682 10.4144C10.2924 10.5901 10.0075 10.5901 9.83178 10.4144L5.70869 6.29128C5.6243 6.20689 5.57689 6.09243 5.57689 5.97309C5.57689 5.85374 5.6243 5.73928 5.70869 5.65489L9.83178 1.5318C10.0075 1.35607 10.2924 1.35607 10.4682 1.5318C10.6439 1.70754 10.6439 1.99246 10.4682 2.1682L6.66329 5.97309L10.4682 9.77797C10.6439 9.95371 10.6439 10.2386 10.4682 10.4144Z"
        fill={colors.gray8}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.46817 10.4144C6.29244 10.5901 6.00751 10.5901 5.83178 10.4144L1.70869 6.29128C1.6243 6.20689 1.57689 6.09243 1.57689 5.97309C1.57689 5.85374 1.6243 5.73928 1.70869 5.65489L5.83178 1.5318C6.00751 1.35607 6.29244 1.35607 6.46817 1.5318C6.64391 1.70754 6.64391 1.99246 6.46817 2.1682L2.66329 5.97309L6.46817 9.77797C6.64391 9.95371 6.64391 10.2386 6.46817 10.4144Z"
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

export default FirstIcon;
