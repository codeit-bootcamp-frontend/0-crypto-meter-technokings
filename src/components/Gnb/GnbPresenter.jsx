import React, { useEffect, useState } from "react";

import styled from "styled-components";

import CURRENCY_OPTIONS from "@/data/currencyOptions";
import useMediaQuery from "@/hooks/useMediaQuery";
import MainLogo from "@components/SVGComponents/MainLogo";
import RestoreIcon from "@components/SVGComponents/RestoreIcon";
import { SDiv, SText, colors } from "@styles";

import GnbButton from "./GnbButton";
import SearchHistory from "./SearchHistory/SearchHistory";
import Select from "./Select/Select";

const GnbPresenter = ({
  isHistoryOpen,
  onResetClick,
  onHistoryClick,
  selectedCurrency,
  onSelectOption,
}) => {
  const { mediaQuery: mobileMediaQuery } = useMediaQuery(768);
  const [isMobile, setIsMobile] = useState(mobileMediaQuery.matches);

  const [isSelectOpen, setIsSelectOpen] = useState(false);

  useEffect(() => {
    setIsMobile(mobileMediaQuery.matches);
  }, [mobileMediaQuery.matches]);

  return (
    <S.Header isOpen={isHistoryOpen || isSelectOpen}>
      <S.GnbWrapper row sb act h={80} pdl={57} pdr={60}>
        <MainLogo isMobile={isMobile} />
        <S.ButtonWrapper row g={16}>
          <GnbButton onClick={onResetClick} isHistoryOpen={false}>
            <RestoreIcon />
            <S.Text b3>초기화</S.Text>
          </GnbButton>
          <Select
            options={CURRENCY_OPTIONS}
            selectedIdx={CURRENCY_OPTIONS.findIndex(
              (option) => option.value === selectedCurrency
            )}
            onSelect={onSelectOption}
            isSelectOpen={isSelectOpen}
            setIsSelectOpen={setIsSelectOpen}
          />
          <GnbButton onClick={onHistoryClick} isHistoryOpen={isHistoryOpen}>
            <SText b3>검색기록</SText>
          </GnbButton>
        </S.ButtonWrapper>
        {isHistoryOpen && <SearchHistory currency={selectedCurrency} />}
      </S.GnbWrapper>
    </S.Header>
  );
};

const S = {};

S.Header = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 30;
  @media only screen and (max-width: 1200px) {
    z-index: ${(props) => (props.isOpen ? 31 : 29)};
  }
`;

S.GnbWrapper = styled(SDiv)`
  background-color: #f5f8f9;
  @media only screen and (max-width: 1200px) {
    height: 90px;
    padding-right: 24px;
    padding-left: 28px;
    background-color: ${colors.white};
  }

  @media only screen and (max-width: 768px) {
    height: 76px;
    padding-right: 20px;
    padding-left: 24px;
  }
`;

S.ButtonWrapper = styled(SDiv)`
  @media only screen and (max-width: 768px) {
    gap: 12px;
  }
`;

S.Text = styled(SText)`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export default GnbPresenter;
