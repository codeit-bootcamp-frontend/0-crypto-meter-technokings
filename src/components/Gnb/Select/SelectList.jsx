/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import colors from "@/styles/colors";
import SDiv from "@styles/micro-components/StyledDiv";

import SelectListItem from "./SelectListItem";

const SelectList = ({ options, onSelect, onClick, selectedIdx }) => {
  return (
    <S.SelectListWrapper
      col
      ast
      pd="4px"
      g={4}
      mgt={4}
      br={12}
      bd={`1px solid ${colors.gray3}`}
      bg={colors.gray1}
    >
      {options.map((item, idx) => (
        <SelectListItem
          key={item.value}
          isSelected={idx === selectedIdx}
          option={item}
          onClick={onClick}
          onSelect={onSelect}
        />
      ))}
    </S.SelectListWrapper>
  );
};

SelectList.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      symbol: PropTypes.string,
      value: PropTypes.string,
    })
  ).isRequired,
};

const S = {};

S.SelectListWrapper = styled(SDiv)`
  position: absolute;

  width: 100%;
`;

export default SelectList;
