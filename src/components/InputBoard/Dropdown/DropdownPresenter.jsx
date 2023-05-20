/* eslint-disable object-curly-newline */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React, { useEffect, useState, useRef } from "react";

import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import useMediaQuery from "@/hooks/useMediaQuery";
import useOutsideClick from "@/hooks/useOutsideClick";
import DropdownHandleIcon from "@components/SVGComponents/DropdownHandleIcon";
import { colors, SDiv, SText } from "@styles";

import DropdownList from "./DropdownList";

const DropdownPresenter = ({
  isOpen,
  setIsOpen,
  onClick,
  selectedValue,
  options,
}) => {
  const { mediaQuery } = useMediaQuery(1200);
  const [isTablet, setIsTablet] = useState(mediaQuery.matches);
  const dropdownRef = useRef(null);
  useEffect(() => {
    setIsTablet(mediaQuery.matches);
  }, [mediaQuery]);
  useOutsideClick(dropdownRef, () => {
    setIsOpen(false);
  });
  return (
    <S.DropdownWrapper ref={dropdownRef}>
      <S.Overlay className="dropdown-overlay" show={isOpen} onClick={onClick} />
      <S.DropdownHead
        bd={`1px solid ${colors.gray6}`}
        br={12}
        pd="22px 20px 22px 25px"
        h={74}
        isOpen={isOpen}
        onClick={onClick}
      >
        <SDiv row sb>
          <SDiv row g={10}>
            <S.ImageWrapper w={30} h={30} disableSelect>
              <img src={selectedValue.image} alt={`${selectedValue.name}`} />
            </S.ImageWrapper>
            <SDiv ct>
              <S.LabelText b1 white disableSelect>
                {selectedValue.name}
              </S.LabelText>
            </SDiv>
          </SDiv>
          <SDiv ct>
            {isTablet ? (
              <DropdownHandleIcon
                w={12}
                h={12}
                fill={colors.black}
                rotate={isOpen.toString()}
              />
            ) : (
              <DropdownHandleIcon rotate={isOpen.toString()} />
            )}
          </SDiv>
        </SDiv>
      </S.DropdownHead>
      {isOpen && (
        <DropdownList isOpen={isOpen} options={options} onClick={onClick} />
      )}
    </S.DropdownWrapper>
  );
};

const S = {};

S.DropdownWrapper = styled(SDiv)`
  position: relative;

  width: 100%;
`;

S.DropdownHead = styled(SDiv)`
  ${(props) => props.isOpen && lighterBorder}

  cursor: pointer;

  @media only screen and (max-width: 1200px) {
    ${(props) => props.isOpen && darkerBorder}
  }

  @media only screen and (max-width: 768px) {
    height: 63px;

    padding: 19px 20px 20px 25px;
    ${(props) => props.isOpen && darkerBorder}
  }
`;

S.Overlay = styled.div`
  display: none;

  @media only screen and (max-width: 1200px) {
    display: ${(props) => (props.show ? "block" : "none")};
    position: fixed;
    z-index: 3;
    inset: 0;

    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
  }
`;

S.LabelText = styled(SText)`
  @media only screen and (max-width: 1200px) {
    color: ${colors.gray9};
  }
`;

S.ImageWrapper = styled(SDiv)`
  img {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

const lighterBorder = css`
  border-color: ${colors.gray1};
`;

const darkerBorder = css`
  border-color: ${colors.black};
`;

DropdownPresenter.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
    })
  ).isRequired,
  selectedValue: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default DropdownPresenter;
