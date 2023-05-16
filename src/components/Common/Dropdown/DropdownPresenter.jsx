/* eslint-disable object-curly-newline */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from "react";

import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import colors from "@/styles/colors";
import SDiv from "@/styles/micro-components/StyledDiv";
import SText from "@/styles/micro-components/StyledText";
import { DropdownHandleIcon } from "@components";

import DropdownList from "./DropdownList";

const DropdownPresenter = ({ isOpen, onClick, selectedValue, options }) => {
  return (
    <S.DropdownPresenter>
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
            <S.ImagePresenter w={30} h={30} disableSelect>
              <S.Image
                src={selectedValue.image}
                alt={`${selectedValue.name}`}
              />
            </S.ImagePresenter>
            <SDiv ct>
              <SText b1 white disableSelect>
                {selectedValue.name}
              </SText>
            </SDiv>
          </SDiv>
          <SDiv ct>
            <DropdownHandleIcon rotate={isOpen.toString()} />
          </SDiv>
        </SDiv>
      </S.DropdownHead>
      {isOpen && <DropdownList isOpen={isOpen} options={options} />}
    </S.DropdownPresenter>
  );
};

const S = {};

S.DropdownPresenter = styled(SDiv)`
  position: relative;
`;

S.DropdownHead = styled(SDiv)`
  ${(props) => props.isOpen && lighterBorder}

  cursor: pointer;

  @media only screen and (max-width: 375px) {
    height: 63px;

    padding: 19px 20px 20px 25px;
  }
`;

S.ImagePresenter = styled(SDiv)`
  @media only screen and (max-width: 375px) {
    width: 24px;
    height: 24px;
  }
`;

S.Image = styled.img`
  width: 100%;
  height: 100%;
`;

const lighterBorder = css`
  border-color: ${colors.gray1};
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
