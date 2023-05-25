/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from "react";

import styled, { css } from "styled-components";

import colors from "@/styles/colors";

const NextIcon = ({ disabled }) => {
  return (
    <S.Svg
      width="12"
      height="12"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      disabled={disabled}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.46967 17.4702C6.76256 17.7631 7.23744 17.7631 7.53033 17.4702L14.4021 10.5984C14.5428 10.4577 14.6218 10.2669 14.6218 10.068C14.6218 9.86911 14.5428 9.67834 14.4021 9.53769L7.53033 2.66588C7.23744 2.37299 6.76256 2.37299 6.46967 2.66588C6.17678 2.95878 6.17678 3.43365 6.46967 3.72654L12.8111 10.068L6.46967 16.4095C6.17678 16.7024 6.17678 17.1773 6.46967 17.4702Z"
        fill={colors.gray8}
      />
    </S.Svg>
  );
};
const hoverBrightness = css`
  &:hover {
    filter: brightness(4);
  }
`;
const S = {};

S.Svg = styled.svg`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;

  ${(props) => !props.disabled && hoverBrightness}
`;

export default NextIcon;
