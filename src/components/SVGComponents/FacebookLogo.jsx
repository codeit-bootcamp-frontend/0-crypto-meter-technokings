/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from "react";

import styled from "styled-components";

import colors from "../../styles/colors";

const FacebookLogo = () => {
  return (
    <S.Svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28 14.0857C28 6.30621 21.7323 0 14.0017 0C6.26772 0.00174978 0 6.30621 0 14.0875C0 21.1164 5.11986 26.9431 11.811 28V18.1575H8.25897V14.0875H11.8145V10.9816C11.8145 7.45232 13.9055 5.50306 17.1024 5.50306C18.6352 5.50306 20.2362 5.77778 20.2362 5.77778V9.24235H18.4707C16.7332 9.24235 16.1907 10.329 16.1907 11.4436V14.0857H20.0717L19.4523 18.1557H16.189V27.9983C22.8801 26.9414 28 21.1146 28 14.0857Z"
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

export default FacebookLogo;
