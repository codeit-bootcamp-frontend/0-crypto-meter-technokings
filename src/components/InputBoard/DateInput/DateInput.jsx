import React, { useState, useEffect } from "react";

import styled, { css } from "styled-components";

import useMediaQuery from "@/hooks/useMediaQuery";
import { SDiv, SText, colors } from "@styles";

import DropdownHandleIcon from "../../SVGComponents/DropdownHandleIcon";

const DateInput = ({ isOpen, onChange, selectedDate }) => {
  const { mediaQuery } = useMediaQuery(768);
  const [isTablet, setIsTablet] = useState(mediaQuery.matches);

  useEffect(() => {
    setIsTablet(mediaQuery.matches);
  }, [mediaQuery]);
  return (
    <S.InputWrapper type="date" onChange={onChange}>
      <SDiv row sb>
        <SDiv ct>
          <S.LabelText b1 white disableSelect>
            {selectedDate}
          </S.LabelText>
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
    </S.InputWrapper>
  );
};

const S = {};

const lighterBorder = css`
  border-color: ${colors.gray1};
`;

const darkerBorder = css`
  border-color: ${colors.black};
`;

S.InputWrapper = styled.div`
  ${(props) => props.isOpen && lighterBorder}

  cursor: pointer;
  border: 1px solid ${colors.gray6};
  border-radius: 12px;
  padding: 22px 20px 22px 25px;
  height: 74px;

  @media only screen and (max-width: 768px) {
    ${(props) => props.isOpen && darkerBorder}
  }

  @media only screen and (max-width: 375px) {
    height: 63px;

    padding: 19px 20px 20px 25px;
    ${(props) => props.isOpen && darkerBorder}
  }
`;

S.LabelText = styled(SText)`
  @media only screen and (max-width: 768px) {
    color: ${colors.gray9};
  }
`;

export default DateInput;
