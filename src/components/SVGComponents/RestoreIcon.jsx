/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from "react";

import styled from "styled-components";

const RestoreIcon = () => {
  return (
    <S.Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_216_7329)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.7572 14.4269C14.8135 13.3706 15.3438 11.9891 15.3486 10.6037C15.35 10.1895 15.6869 9.85483 16.1011 9.85625C16.5153 9.85767 16.85 10.1946 16.8485 10.6088C16.8425 12.3741 16.1654 14.14 14.8178 15.4876C12.1102 18.1953 7.72016 18.1953 5.01249 15.4876C2.30482 12.7799 2.30482 8.38992 5.01249 5.68225C5.58456 5.11018 6.23304 4.6581 6.92577 4.32718C7.86467 3.87866 8.8826 3.65372 9.90001 3.65151C10.3142 3.65061 10.6507 3.98567 10.6516 4.39988C10.6525 4.81409 10.3175 5.15061 9.90327 5.15151C9.10433 5.15324 8.3066 5.32992 7.57235 5.68067C7.03112 5.93922 6.52315 6.29291 6.07315 6.74291C3.95127 8.86479 3.95127 12.305 6.07315 14.4269C8.19503 16.5488 11.6353 16.5488 13.7572 14.4269Z"
          fill="#333236"
        />
        <path d="M10 2.5L13 4.5L10 6.5L10 2.5Z" fill="#333236" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.5 4.5C13.5 4.66718 13.4164 4.82329 13.2773 4.91603L10.2773 6.91603C10.1239 7.01831 9.92665 7.02785 9.76407 6.94084C9.60149 6.85383 9.5 6.6844 9.5 6.5L9.5 2.5C9.5 2.3156 9.60149 2.14617 9.76407 2.05916C9.92665 1.97215 10.1239 1.98169 10.2774 2.08398L13.2774 4.08398C13.4164 4.17671 13.5 4.33282 13.5 4.5ZM10.5 3.43426L10.5 5.56574L12.0986 4.5L10.5 3.43426Z"
          fill="#333236"
        />
      </g>
      <defs>
        <clipPath id="clip0_216_7329">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(2 2)"
          />
        </clipPath>
      </defs>
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

export default RestoreIcon;
