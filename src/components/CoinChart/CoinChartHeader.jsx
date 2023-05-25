import React, { useState, useEffect } from "react";

import styled, { css } from "styled-components";

import useMediaQuery from "@/hooks/useMediaQuery";
import createKaKaoShareButton from "@/services/kakao/share.kakao";
import FacebookLogo from "@components/SVGComponents/FacebookLogo";
import KakaoLogo from "@components/SVGComponents/KakaoLogo";
import ShareIcon from "@components/SVGComponents/ShareIcon";
import { SButton, SDiv, SText } from "@styles";
import colors from "@styles/colors";

const CoinChartHeader = ({ coinName, coinImageUrl }) => {
  const { mediaQuery: tabletMediaQuery } = useMediaQuery(1200);
  const [isTablet, setIsTablet] = useState(tabletMediaQuery.matches);
  const [copied, setCopied] = useState(false);

  const handleClickShareFacebook = () => {
    window.open(
      "http://www.facebook.com/sharer.php?u=https://cryptometer-technokings.netlify.app"
    );
  };

  const handleClickCopyClipboard = async () => {
    setCopied(true);

    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(window.location.href);
    }

    const timer = setTimeout(() => {
      setCopied(false);
      clearTimeout(timer);
    }, 500);
  };

  useEffect(() => {
    createKaKaoShareButton();
  }, []);

  useEffect(() => {
    setIsTablet(tabletMediaQuery.matches);
  }, [tabletMediaQuery.matches]);

  return (
    <S.Header sb pdb={32} copied={copied} isTablet={isTablet}>
      <SDiv act row g={10}>
        <S.LogoWrapper w={30} mobW={24} h={30} mobH={24}>
          <S.LogoImg src={coinImageUrl} alt={coinName} />
        </S.LogoWrapper>
        <S.LogoText h3 black>
          {coinName}
        </S.LogoText>
      </SDiv>
      <S.IconWrapper act row g={24}>
        <S.ShareButton
          id="kakao-link-btn"
          type="button"
          w={20.5}
          h={20}
          mobW={15.5}
          mobH={15}
        >
          <KakaoLogo />
        </S.ShareButton>
        <S.ShareButton
          type="button"
          w={20}
          h={20}
          mobW={15}
          mobH={15}
          onClick={handleClickShareFacebook}
        >
          <FacebookLogo />
        </S.ShareButton>
        <S.ShareButton
          type="button"
          w={19}
          h={18}
          mobW={14.5}
          mobH={13.5}
          onClick={handleClickCopyClipboard}
        >
          <ShareIcon />
        </S.ShareButton>
      </S.IconWrapper>
    </S.Header>
  );
};

const S = {};
S.Header = styled(SDiv)`
  border-bottom: 1px solid ${colors.gray9};

  ${(props) => {
    return (
      props.copied &&
      css`
        &::before {
          content: "copied!";
          position: absolute;
          top: ${!props.isTablet ? "15px" : "10px"};
          right: ${!props.isTablet ? "30px" : "-5px"};
          background: ${colors.black};
          padding: 4px 8px;
          border-radius: 20px;
          font-size: 10px;
          color: white;
        }
        &::after {
          content: "";
          position: absolute;
          top: ${!props.isTablet ? "31px" : "26px"};
          right: ${!props.isTablet ? "50px" : "15px"};
          width: 6px;
          height: 6px;
          background: ${colors.black};
          transform: rotate(45deg);
        }
      `
    );
  }}

  @media only screen and (max-width: 768px) {
    padding-bottom: 1.8rem;
  }
`;
S.LogoWrapper = styled(SDiv)`
  @media only screen and (max-width: 768px) {
    width: ${(props) => (props.mobW ? `${props.mobW}px` : "auto")};
    height: ${(props) => (props.mobH ? `${props.mobH}px` : "auto")};
  }
`;
S.LogoImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;
S.LogoText = styled(SText)`
  font-weight: 700;
  line-height: 3.1rem;

  @media only screen and (max-width: 768px) {
    line-height: 2.4rem;
  }
`;
S.IconWrapper = styled(SDiv)`
  @media only screen and (max-width: 768px) {
    gap: 23px;
  }
`;
S.ShareButton = styled(SButton)`
  & svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  @media only screen and (max-width: 768px) {
    width: ${(props) => (props.mobW ? `${props.mobW}px` : "auto")};
    height: ${(props) => (props.mobH ? `${props.mobH}px` : "auto")};
  }
`;

export default CoinChartHeader;
