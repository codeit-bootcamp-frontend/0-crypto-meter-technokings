/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from "react";

import styled from "styled-components";

import colors from "@/styles/colors";

const PrevIcon = () => {
  return (
    <S.Svg
      width="12"
      height="12"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.4629 17.4704C13.1701 17.7633 12.6952 17.7633 12.4023 17.4704L5.53048 10.5986C5.38983 10.4579 5.31081 10.2672 5.31081 10.0683C5.31081 9.86935 5.38983 9.67859 5.53048 9.53793L12.4023 2.66613C12.6952 2.37323 13.1701 2.37323 13.4629 2.66613C13.7558 2.95902 13.7558 3.43389 13.4629 3.72679L7.12147 10.0683L13.4629 16.4097C13.7558 16.7026 13.7558 17.1775 13.4629 17.4704Z"
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
`;

export default PrevIcon;
