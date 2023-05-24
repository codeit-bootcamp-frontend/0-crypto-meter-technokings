/* eslint-disable react/function-component-definition */
import React from "react";

import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import SDiv from "@/styles/micro-components/StyledDiv";
import colors from "@styles/colors";
import SText from "@styles/micro-components/StyledText";

const SelectListItem = ({ option, isSelected, onClick, onSelect }) => {
  return (
    <S.ItemWrapper
      row
      ast
      pd="4px 26px 4px 8px"
      isSelected={isSelected}
      onClick={() => {
        onClick();
        onSelect(option.value);
      }}
    >
      <S.Label b3 g9 mgr={2}>
        {option.name}
      </S.Label>
      <SText b3 g9>
        {`(${option.symbol})`}
      </SText>
    </S.ItemWrapper>
  );
};

SelectListItem.propTypes = {
  option: PropTypes.shape({
    name: PropTypes.string,
    symbol: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
};

const S = {};

const grayRoundBackground = css`
  background-color: ${colors.gray3};
  border-radius: 8px;
`;

S.ItemWrapper = styled(SDiv)`
  width: 100%;

  cursor: pointer;
  ${(props) => props.isSelected && grayRoundBackground}

  &:hover {
    ${grayRoundBackground}
  }
`;

S.Label = styled(SText)`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export default SelectListItem;
