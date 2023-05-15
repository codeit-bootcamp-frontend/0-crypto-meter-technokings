/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from "react";

import styled from "styled-components";

import colors from "@/styles/colors";

const CloseIcon = () => {
  return (
    <S.Svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.50002 19.398L3.60205 20.5L11.4999 12.6021L19.3978 20.5L20.4999 19.398L12.602 11.5L20.4999 3.60204L19.3979 2.5L11.4999 10.398L3.60203 2.50001L2.5 3.60205L10.3979 11.5L2.50002 19.398Z"
        fill={colors.gray6}
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
`;

export default CloseIcon;
