/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from "react";

import styled from "styled-components";

import colors from "@/styles/colors";

/**
 * @props {sortState}
 * @example sortState = null  //default
 *          sortState = true  //ascending order
 *          sortState = false //descending order
 */
const OrderIcon = ({ sortState }) => {
  return (
    <S.Svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.02951 3.44559C7.25372 3.53846 7.3999 3.75724 7.3999 3.99992V12.3999C7.3999 12.7313 7.13127 12.9999 6.7999 12.9999C6.46853 12.9999 6.1999 12.7313 6.1999 12.3999V5.44845L4.42417 7.22418C4.18985 7.4585 3.80995 7.4585 3.57564 7.22418C3.34132 6.98987 3.34132 6.60997 3.57564 6.37566L6.37564 3.57566C6.54724 3.40406 6.80531 3.35272 7.02951 3.44559Z"
        fill={sortState ? colors.gray7 : colors.gray4}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.37039 12.9543C9.14619 12.8614 9 12.6427 9 12.4V3.99998C9 3.66861 9.26863 3.39998 9.6 3.39998C9.93137 3.39998 10.2 3.66861 10.2 3.99998V10.9515L11.9757 9.17572C12.2101 8.9414 12.5899 8.9414 12.8243 9.17572C13.0586 9.41003 13.0586 9.78993 12.8243 10.0242L10.0243 12.8242C9.85267 12.9958 9.59459 13.0472 9.37039 12.9543Z"
        fill={sortState || sortState === null ? colors.gray4 : colors.gray7}
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

export default OrderIcon;
