import React from "react";

import styled from "styled-components";

import { SDiv, SButton, SText, colors } from "@styles";
import { SHeading2 } from "@styles";

import Dropdown from "./Dropdown/Dropdown";
import { IncreaseMoneyButton } from "@components";

const INCREASE_MONEY_UNITS = [5000, 10000, 50000, 100000];

const InputBoardPresenter = ({
  selectedCoinId,
  historyDate,
  selectMoney,
  dropdownCoinOptionList,
  handleClickSubmit,
}) => {
  return (
    <S.BoardWrapper
      col
      ast
      sb
      bg={colors.gray9}
      br={24}
      pd="60px 40px 70px 40px"
    >
      <S.Form>
        <S.BoardBody col ast full sb g={55}>
          <SHeading2>
            <SText mgb={7}> 내가 만약</SText>
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
          <S.InputArea col g={25} full>
            <Dropdown options={dropdownCoinOptionList} />
            <SDiv col act g={12}>
              <Dropdown options={dropdownCoinOptionList} />
              <S.IncreaseButtonListWrapper row sb full>
                {INCREASE_MONEY_UNITS.map((unit) => (
                  <IncreaseMoneyButton key={unit} money={unit} />
                ))}
              </S.IncreaseButtonListWrapper>
            </SDiv>
            <Dropdown options={dropdownCoinOptionList} />
          </S.InputArea>
        </S.BoardBody>
        <S.SubmitArea ct>
          <S.SubmitButton
            full
            h={64}
            br={35}
            white
            type="submit"
            onClick={handleClickSubmit}
          >
            <S.SubmitButtonText s1 black>
              오늘 얼마가 되었을까?
            </S.SubmitButtonText>
          </S.SubmitButton>
        </S.SubmitArea>
      </S.Form>
    </S.BoardWrapper>
  );
};

const S = {};

S.BoardWrapper = styled(SDiv)`
  width: 445px;
  @media only screen and (max-width: 768px) {
    width: 720px;
  }
  @media only screen and (max-width: 375px) {
    width: 343px;
    padding: 36px;
  }
`;

S.Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 189px;
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
`;

S.InputArea = styled(SDiv)``;
S.BoardBody = styled(SDiv)``;
S.SubmitArea = styled(SDiv)``;
S.SubmitButton = styled(SButton)``;
S.SubmitButtonText = styled(SText)``;

export default InputBoardPresenter;
