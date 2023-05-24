/* eslint-disable object-curly-newline */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import DropdownHandleIcon from "@components/SVGComponents/DropdownHandleIcon";
import colors from "@styles/colors";
import SDiv from "@styles/micro-components/StyledDiv";
import SText from "@styles/micro-components/StyledText";

import SelectList from "./SelectList";

const SelectPresenter = ({
  isOpen,
  options,
  selectedIdx,
  onClick,
  onSelect,
}) => {
  return (
    <S.SelectWrapper>
      <S.SelectHead
        col
        ct
        h={40}
        pdl={15}
        pdr={10}
        br={12}
        bd={`1px solid ${colors.gray3}`}
        onClick={onClick}
        disableSelect
      >
        <S.LabelWrapper row sb act h={18}>
          <SDiv row act>
            <S.Label b3 g8 mgr={2}>
              {options[selectedIdx].name}
            </S.Label>
            <S.Label b3 g8>
              (
            </S.Label>
            <SText b3 g8>
              {`${options[selectedIdx].symbol}`}
            </SText>
            <S.Label b3 g8>
              )
            </S.Label>
          </SDiv>
          <DropdownHandleIcon
            w={12}
            h={12}
            fill={colors.black}
            rotate={isOpen.toString()}
          />
        </S.LabelWrapper>
      </S.SelectHead>
      {isOpen && (
        <SelectList
          options={options}
          onSelect={onSelect}
          onClick={onClick}
          selectedIdx={selectedIdx}
        />
      )}
    </S.SelectWrapper>
  );
};

const S = {};

S.SelectWrapper = styled.div`
  position: relative;

  width: fit-content;
`;

S.SelectHead = styled(SDiv)`
  width: 90px;

  cursor: pointer;
  @media only screen and (max-width: 768px) {
    width: fit-content;
    height: 42px;
    padding: 12px 12px 12px 16px;
  }
`;

S.Label = styled(SText)`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

S.LabelWrapper = styled(SDiv)`
  width: 100%;
  @media screen and (max-width: 768px) {
    gap: 8px;
  }
`;

SelectPresenter.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      symbol: PropTypes.string,
      value: PropTypes.string,
    })
  ).isRequired,
};

export default SelectPresenter;
