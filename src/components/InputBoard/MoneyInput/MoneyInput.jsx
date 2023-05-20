import React, { useRef, useEffect, useState } from "react";

import styled, { css } from "styled-components";

import { SDiv, SText, colors } from "@styles";
import { b1, white } from "@styles/text.style";

const MoneyInput = ({ isOpen, onChange, selectedMoney }) => {
  const selectedCurrency = {
    name: "원",
    symbol: "₩",
    value: "krw",
  };
  const [inputValue, setInputValue] = useState(selectedMoney);
  const [showInput, setShowInput] = useState(true);
  const inputRef = useRef(null);

  useEffect(() => {
    if (showInput) {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  }, [showInput]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.blur();
    }
  }, []);
  return (
    <S.InputWrapper isOpen={isOpen}>
      <SDiv row sb>
        <S.Input
          type="number"
          min="1"
          ct
          placeholder={Number(selectedMoney).toLocaleString()}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onFocus={() => {
            setShowInput(true);
          }}
          onBlur={() => {
            setShowInput(false);
          }}
          show={showInput}
          ref={inputRef}
        />
        <S.InputValueWrapper
          onClick={() => {
            setShowInput(true);
          }}
          show={!showInput}
        >
          {Number(inputValue).toLocaleString()}
        </S.InputValueWrapper>
        <SDiv ct>
          <S.LabelText b1 white disableSelect>
            {`${selectedCurrency.name} (${selectedCurrency.symbol})`}
          </S.LabelText>
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
  width: 100%;
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

S.Input = styled.input`
  display: ${(props) => (props.show ? "inline-block" : "none")};
  ${b1}
  background-color: transparent;
  ${white}
  border: none;
  &::placeholder {
    ${b1}
    color: ${colors.gray6};
  }
  padding: 0;
  @media only screen and (max-width: 768px) {
    color: ${colors.gray9};
  }
`;

S.InputValueWrapper = styled(SDiv)`
  display: ${(props) => (props.show ? "inline-block" : "none")};
  overflow-x: hidden;
  text-overflow: ellipsis;

  width: 250px;

  cursor: text;

  ${b1}
  ${white}
  @media only screen and (max-width: 768px) {
    color: ${colors.gray9};
  }
`;
export default MoneyInput;
