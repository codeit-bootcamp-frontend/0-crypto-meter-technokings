import React from "react";

import styled from "styled-components";

import { colors } from "@/styles";

const SelectFilterIcon = ({ fill = colors.black }) => {
  return (
    <S.Svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      isActive={fill !== colors.black}
    >
      <line
        x1="0.912162"
        y1="2.65546"
        x2="22.0878"
        y2="2.65546"
        stroke={fill}
        strokeWidth="1.82432"
        strokeLinecap="round"
      />
      <line
        x1="0.912162"
        y1="12.3851"
        x2="22.0878"
        y2="12.3851"
        stroke={fill}
        strokeWidth="1.82432"
        strokeLinecap="round"
      />
      <line
        x1="0.912162"
        y1="21.7905"
        x2="22.0878"
        y2="21.7905"
        stroke={fill}
        strokeWidth="1.82432"
        strokeLinecap="round"
      />
      <circle cx="7.5" cy="2.5" r="2.5" fill={fill} />
      <circle cx="17.5" cy="12.5" r="2.5" fill={fill} />
      <circle cx="4.5" cy="21.5" r="2.5" fill={fill} />
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
    filter: ${(props) => (props.isActive ? "brightness(1.5)" : "opacity(0.5)")};
  }

  @media only screen and (max-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;
export default SelectFilterIcon;
