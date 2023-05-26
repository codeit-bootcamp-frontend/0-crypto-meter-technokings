/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from "react";

import styled, { css } from "styled-components";

import colors from "@/styles/colors";

/**
 * @props {w: width, h: height, fill: color, rotate: upside-down}
 * @example <DropdownHandleIcon />        //default (15 * 15 white)
 *          <DropdownHandleIcon w={12} h={12} fill={colors.black}/> //small black
 *          <DropdownHandleIcon rotate="true" />   //upside-down
 */
const DropdownHandleIcon = ({
  w = 15,
  h = 15,
  fill = colors.white,
  rotate,
}) => {
  return (
    <S.Svg
      width={w}
      height={h}
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      rotate={rotate}
    >
      <path
        d="M8.06444 12.2439L13.3144 6.24388C13.7388 5.75894 13.3944 5 12.75 5L2.25001 5C1.60564 5 1.26125 5.75894 1.68557 6.24388L6.93557 12.2439C7.23438 12.5854 7.76563 12.5854 8.06444 12.2439Z"
        fill={fill}
      />
    </S.Svg>
  );
};

const S = {};

const rotate = css`
  transform: rotate(-180deg);
`;

S.Svg = styled.svg`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  ${(props) => props.rotate === "true" && rotate}
  transition: transform 0.3s ease-in-out;
`;

export default DropdownHandleIcon;
