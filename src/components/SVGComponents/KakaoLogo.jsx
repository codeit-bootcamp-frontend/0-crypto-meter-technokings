/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from "react";

import styled from "styled-components";

import colors from "@/styles/colors";

const KakaoLogo = () => {
  return (
    <S.Svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 4C9.41167 4 2.5 10.2767 2.5 15.5869C2.5 19.5659 5.01011 23.0756 8.83328 25.1612L7.22539 31.239C7.082 31.7778 7.6765 32.2055 8.13244 31.8955L15.1843 27.0794C15.7788 27.1391 16.3846 27.1739 17 27.1739C25.0072 27.1739 31.5 21.9864 31.5 15.5869C31.5 10.2767 25.0072 4 17 4Z"
        fill={colors.gray9}
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

  @media only screen and (max-width: 375px) {
    width: 18px;
    height: 18px;
  }
`;

export default KakaoLogo;
