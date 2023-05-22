import React, { useState, useEffect, useRef } from "react";

import DatePicker from "react-datepicker";
import styled, { css } from "styled-components";

import useMediaQuery from "@/hooks/useMediaQuery";
import useOutsideClick from "@/hooks/useOutsideClick";
import DropdownHandleIcon from "@components/SVGComponents/DropdownHandleIcon";
import { SDiv, SText, colors } from "@styles";
import { disableSelect } from "@styles/block.style";
import { b1, g9, white } from "@styles/text.style";

import "react-datepicker/dist/react-datepicker.css";

/**
 * 자식과 부모 노드를 넘겨서 넘겨준 부모 노드의 자식이 맞는지 리턴하는 함수입니다.
 * @param {string} parentClassName 부모 노드의 클래스 명
 * @param {DOMObject} child 자식노드
 * @returns {boolean} 자식노드가 부모 노드의 자존이 맞는지 리턴
 */
const isDescendant = (parentClassName, child) => {
  const parent = document.querySelector(`.${parentClassName}`);
  let node = child.parentNode;
  while (node != null) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
};

const DateInput = ({ selectedDate, onChange }) => {
  const { mediaQuery } = useMediaQuery(1200);
  const [isTablet, setIsTablet] = useState(mediaQuery.matches);
  const [isOpen, setIsOpen] = useState(false);
  const datePickerRef = useRef(null);
  const inputWrapperRef = useRef(null);

  const isUnavailableClick = (e) => {
    if (
      isDescendant("react-datepicker__header", e.target) ||
      e.target.classList.contains("react-datepicker__navigation-icon") ||
      e.target.classList.contains("react-datepicker__header") ||
      e.target.classList.contains("react-datepicker__week") ||
      e.target.classList.contains("react-datepicker__navigation") ||
      e.target.classList.contains("react-datepicker__day--disabled") ||
      e.target.classList.contains("react-datepicker__triangle")
    ) {
      return true;
    }
    return false;
  };

  const handleClickInputWrapper = (e) => {
    // datepicker UI 내에서 header와 navigation을 클릭했을 때는 isOpen이 토글되면 안됨
    if (isUnavailableClick(e)) return;
    // 이미 open된 상태에서 input을 클릭했을 때는 isOpen이 토글되면 안됨
    if (isOpen && isDescendant("react-datepicker-wrapper", e.target)) {
      return;
    }
    // isOpen 상태를 토글하고, isOpen에 따라 datepicker에 focus, blur를 부여
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

  useOutsideClick(inputWrapperRef, () => {
    setIsOpen(false);
  });

  return (
    <S.InputWrapper onClick={handleClickInputWrapper} ref={inputWrapperRef}>
      <SDiv row sb>
        <S.DatePickerWrapper>
          <DatePicker
            ref={datePickerRef}
            selected={selectedDate}
            dateFormat="yyyy년 MM월 dd일"
            onChange={(date) => {
              onChange(date);
            }}
            minDate={new Date("2013-04-28")}
            maxDate={new Date()}
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

  @media only screen and (max-width: 1200px) {
    ${(props) => props.isOpen && darkerBorder}
  }

  @media only screen and (max-width: 768px) {
    height: 63px;

    padding: 19px 20px 20px 25px;
    ${(props) => props.isOpen && darkerBorder}
  }
`;

S.LabelText = styled(SText)`
  @media only screen and (max-width: 1200px) {
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

    @media only screen and (max-width: 1200px) {
      ${g9}
    }
  }

  .react-datepicker-popper {
    padding-top: 0px !important;
    top: 10px !important;
  }
`;

export default DateInput;
