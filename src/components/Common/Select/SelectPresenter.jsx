/* eslint-disable object-curly-newline */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import { DropdownHandleIcon } from "@components";
import colors from "@styles/colors";
import SDiv from "@styles/micro-components/StyledDiv";
import SText from "@styles/micro-components/StyledText";

import SelectList from "./SelectList";

const SelectPresenter = ({ isOpen, options, selectedOption, onClick }) => {
  return (
    <S.SelectWrapper>
      <S.SelectHead
        col
        ct
        pd="11px 10px 11px 15px"
        br={12}
        bd={`1px solid ${colors.gray3}`}
        onClick={onClick}
        disableSelect
      >
        <S.LabelWrapper row sb act h={18}>
          <SDiv>
            <S.Label b3 g8 mgr={2}>
              {selectedOption.name}
            </S.Label>
            <SText b3 g8>
              {`(${selectedOption.symbol})`}
            </SText>
          </SDiv>
          <DropdownHandleIcon
            w={12}
            h={12}
            fill={colors.black}
            rotate={isOpen.toString()}
          />
        </S.LabelWrapper>
      </S.SelectHead>
      {isOpen && <SelectList options={options} />}
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
  @media only screen and (max-width: 375px) {
    width: fit-content;
    padding: 12px 12px 12px 16px;
  }
`;

S.Label = styled(SText)`
  @media only screen and (max-width: 375px) {
    display: none;
  }
`;

S.LabelWrapper = styled(SDiv)`
  width: 100%;
  @media screen and (max-width: 375px) {
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
  selectedOption: PropTypes.shape({
    name: PropTypes.string,
    symbol: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
};

export default SelectPresenter;
