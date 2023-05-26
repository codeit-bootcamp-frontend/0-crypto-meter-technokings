/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from "react";

import styled from "styled-components";

import colors from "@/styles/colors";

const KakaoLogo = () => {
  return (
    <S.Svg
      width="30"
      height="28"
      viewBox="0 0 30 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 0C7.41167 0 0.5 6.27674 0.5 11.5869C0.5 15.5659 3.01011 19.0756 6.83328 21.1612L5.22539 27.239C5.082 27.7778 5.6765 28.2055 6.13244 27.8955L13.1843 23.0794C13.7788 23.1391 14.3846 23.1739 15 23.1739C23.0072 23.1739 29.5 17.9864 29.5 11.5869C29.5 6.27674 23.0072 0 15 0Z"
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

  @media only screen and (max-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

export default KakaoLogo;
