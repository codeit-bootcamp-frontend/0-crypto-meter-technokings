/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from "react";

import styled from "styled-components";

import colors from "../../styles/colors";

const FacebookLogo = () => {
  return (
    <S.Svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31 17.0857C31 9.30621 24.7323 3 17.0017 3C9.26772 3.00175 3 9.30621 3 17.0875C3 24.1164 8.11986 29.9431 14.811 31V21.1575H11.259V17.0875H14.8145V13.9816C14.8145 10.4523 16.9055 8.50306 20.1024 8.50306C21.6352 8.50306 23.2362 8.77778 23.2362 8.77778V12.2423H21.4707C19.7332 12.2423 19.1907 13.329 19.1907 14.4436V17.0857H23.0717L22.4523 21.1557H19.189V30.9983C25.8801 29.9414 31 24.1146 31 17.0857Z"
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

export default FacebookLogo;
