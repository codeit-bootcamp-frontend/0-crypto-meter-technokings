import React, { useEffect, useState } from "react";

import styled, { css } from "styled-components";

import { SDiv, SButton, SText, colors } from "@styles";
import { SHeading2 } from "@styles";

import Dropdown from "./Dropdown/Dropdown";
import { FilterIcon, IncreaseMoneyButton } from "@components";
import useMediaQuery from "/src/hooks/useMediaQuery";
import DateInput from "./DateInput/DateInput";
import MoneyInput from "./MoneyInput/MoneyInput";

const INCREASE_MONEY_UNITS = [5000, 10000, 50000, 100000];

const InputBoardPresenter = ({
  selectedCoinId,
  historyDate,
  selectMoney,
  dropdownCoinOptionList,
  handleClickSubmit,
}) => {
  const [isOpen, setIsOpen] = useState(false); // form 모달이 열렸는지
  const { mediaQuery } = useMediaQuery(768); // 미디어쿼리 변화 감지
  const [isTablet, setIsTablet] = useState(mediaQuery.matches); // 태블릿 사이즈 이하인지

  const handleClickIncreaseMoney = () => {
    // TODO: zustand store의 selectedMoney를 increase하기
  };

  useEffect(() => {
    if (!isTablet) {
      // Destop 경우
      setIsOpen(false);
    }
  }, [isTablet]);

  useEffect(() => {
    setIsTablet(mediaQuery.matches);
  }, [mediaQuery]);
  return (
    <S.BoardWrapper
      col
      ast
      sb
      bg={colors.gray9}
      br={24}
      pd="60px 40px 70px 40px"
      isOpen={isTablet && isOpen}
    >
      <S.BoardBody col ast full sb g={55}>
        <SHeading2>
          <SText mgb={7}> 내가 만약&nbsp;</SText>
          <S.Br first />
          <SText white mgb={7}>
            {historyDate || "0000년 00월 00일"}
          </SText>
          에<S.Br second />
          <SText white mgb={7}>
            {selectMoney || "0"}
          </SText>
          원으로&nbsp;
          <S.Br third />
          <SText white>{selectedCoinId || "Bitcoin"}</SText>을 샀다면,
        </SHeading2>
        <S.Overlay
          show={isTablet && isOpen}
          onClick={() => {
            setIsOpen(false);
          }}
        />
        <form
          onSubmit={() => {
            setIsOpen(false);
          }}
        >
          <S.InputArea col g={25} full className="GI">
            <DateInput isOpen={false} selectedDate="2022년 10월 12일" />
            <SDiv col act g={12}>
              <MoneyInput selectedMoney={"15000"} isOpen={false} />
              <S.IncreaseButtonListWrapper row sb full>
                {INCREASE_MONEY_UNITS.map((unit) => (
                  <IncreaseMoneyButton
                    key={unit}
                    money={unit}
                    onClick={() => {
                      handleClickIncreaseMoney(unit);
                    }}
                  />
                ))}
              </S.IncreaseButtonListWrapper>
            </SDiv>
            <Dropdown options={dropdownCoinOptionList} />
          </S.InputArea>
          <S.SubmitArea ct>
            <S.SubmitButton
              full
              h={64}
              br={35}
              white
              type="submit"
              onClick={(e) => {
                handleClickSubmit(e);
                setIsOpen(false);
              }}
            >
              <S.SubmitButtonText s1 black>
                오늘 얼마가 되었을까?
              </S.SubmitButtonText>
            </S.SubmitButton>
          </S.SubmitArea>
        </form>
      </S.BoardBody>
      <S.FilterIconWrapper
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <FilterIcon />
      </S.FilterIconWrapper>
    </S.BoardWrapper>
  );
};

const S = {};

S.BoardWrapper = styled(SDiv)`
  position: relative;

  width: 445px;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 189px;

    @media only screen and (max-width: 768px) {
      display: ${(props) => (props.isOpen ? "flex" : "none")};
      position: fixed;
      bottom: ${(props) => (props.isOpen ? "-556px" : "0")};
      left: 0;
      z-index: 10;

      width: 100%;
      gap: 0px;
      border-radius: 24px 24px 0 0;
      padding: 64px 54px 56px 54px;
      transform: ${(props) => (props.isOpen ? "translateY(-556px)" : "")};
      transition: ${(props) => (props.isOpen ? "transform 0.3s ease" : "")};

      background-color: ${colors.white};
    }

    @media only screen and (max-width: 375px) {
      padding: 44px 24px 48px 24px;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 36px;
  }
`;

S.Overlay = styled.div`
  display: none;

  @media only screen and (max-width: 768px) {
    display: ${(props) => (props.show ? "block" : "none")};
    position: fixed;
    z-index: 1;
    inset: 0;

    width: 100vh;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
  }
`;

S.Br = styled.br`
  /* InputBoard 태블릿에서 띄어쓰기 변화 대응 */
  @media only screen and (max-width: 768px) {
    ${(props) => props.first && `display: none;`}
    ${(props) => props.third && `display: none;`}
  }
  @media only screen and (max-width: 375px) {
    ${(props) => props.first && `display: block;`}
    ${(props) => props.third && `display: block;`}
  }
`;

S.IncreaseButtonListWrapper = styled(SDiv)`
  justify-content: space-around;
  @media only screen and (max-width: 768px) {
    justify-content: flex-start;
    gap: 8px;
  }
`;

S.InputArea = styled(SDiv)`
  @media only screen and (max-width: 768px) {
    margin-bottom: 68px;
  }
  @media only screen and (max-width: 375px) {
    margin-bottom: 56px;
  }
`;
S.BoardBody = styled(SDiv)``;
S.SubmitArea = styled(SDiv)``;
S.SubmitButton = styled(SButton)`
  @media only screen and (max-width: 768px) {
    background-color: ${colors.gray9};
  }
`;

S.SubmitButtonText = styled(SText)`
  @media only screen and (max-width: 768px) {
    color: ${colors.white};
  }
`;

S.FilterIconWrapper = styled(SDiv)`
  display: none;
  position: absolute;
  top: 24px;
  right: 24px;

  cursor: pointer;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;
export default InputBoardPresenter;
