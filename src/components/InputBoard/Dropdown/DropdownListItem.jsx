/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import SDiv from "@/styles/micro-components/StyledDiv";
import colors from "@styles/colors";
import SText from "@styles/micro-components/StyledText";

const DropdownListItem = ({ option, onClick }) => {
  return (
    <S.ItemWrapper
      row
      act
      g={10}
      h={46}
      pd="8px 0px 8px 10px;"
      br={6}
      onClick={onClick}
    >
      <S.ImageWrapper w={30} h={30} disableSelect>
        <img src={option.image} alt={`${option.name} logo`} />
      </S.ImageWrapper>
      <SText b1 white disableSelect>
        {option.name}
      </SText>
    </S.ItemWrapper>
  );
};

DropdownListItem.propTypes = {
  option: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

const S = {};

S.ItemWrapper = styled(SDiv)`
  width: 100%;

  cursor: pointer;

  &:hover {
    background-color: ${colors.black};
  }
`;

S.ImageWrapper = styled(SDiv)`
  img {
    width: 100%;
    height: 100%;
  }
`;

export default DropdownListItem;
