import React, { useState, useEffect, useRef } from "react";

import DatePicker from "react-datepicker";
import styled, { css } from "styled-components";

import useMediaQuery from "@/hooks/useMediaQuery";
import DropdownHandleIcon from "@components/SVGComponents/DropdownHandleIcon";
import { SDiv, SText, colors } from "@styles";
import { disableSelect } from "@styles/block.style";
import { b1, g9, white } from "@styles/text.style";
import "react-datepicker/dist/react-datepicker.css";

const DateInput = ({ defaultDate, onChangeDate }) => {
  const { mediaQuery } = useMediaQuery(768);
  const [isTablet, setIsTablet] = useState(mediaQuery.matches);
  const [displayDate, setDisplayDate] = useState(defaultDate);
  const [isOpen, setIsOpen] = useState(false);
  const datePickerRef = useRef(null);
  const handleClickInputWrapper = () => {
    setIsOpen((prev) => !prev);
    if (datePickerRef.current) {
      if (isOpen) {
        datePickerRef.current.setBlur();
        return;
      }
      datePickerRef.current.setFocus();
    }
  };
  useEffect(() => {
    setIsTablet(mediaQuery.matches);
  }, [mediaQuery]);

  return (
    <S.InputWrapper onClick={handleClickInputWrapper}>
      <SDiv row sb>
        <S.DatePickerWrapper>
          <DatePicker
            ref={datePickerRef}
            selected={displayDate}
            dateFormat="yyyy년 MM월 dd일"
            onChange={(date) => {
              // Date object : Wed May 17 2023 21:16:54 GMT+0900 (한국 표준시) 형식
              setDisplayDate(date);
              onChangeDate(date);
            }}
          />
        </S.DatePickerWrapper>
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
  padding: 26px 20px 22px 25px;
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

S.DatePickerWrapper = styled(SDiv)`
  input {
    ${b1}
    ${white}
    ${disableSelect}
    background: transparent;
    border: none;

    @media only screen and (max-width: 768px) {
      ${g9}
    }
  }
`;

export default DateInput;
