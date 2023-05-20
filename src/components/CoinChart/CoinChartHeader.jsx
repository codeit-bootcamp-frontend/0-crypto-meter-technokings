import React, { useState } from "react";

import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import FacebookLogo from "@components/SVGComponents/FacebookLogo";
import KakaoLogo from "@components/SVGComponents/KakaoLogo";
import ShareIcon from "@components/SVGComponents/ShareIcon";
import { SButton, SDiv, SText } from "@styles";
import colors from "@styles/colors";

const CoinChartHeader = ({ coinName, coinImageUrl }) => {
  const [copied, setCopied] = useState(false);
  const handleClickShareKaKao = () => {
    // TODOS: 발급 받은 key로 기능 붙이기
    // https://ellismin.com/2020/09/share-kakao/
    // https://developers.kakao.com/console/app/910147/config/appKey
  };
  /**
   * - 참고 : https://become-a-developer.tistory.com/63
   * - meta 태그 작성 후 u에 우리 배포 url 입력하면 될 것 같습니다.
   */
  const handleClickShareFacebook = () => {
    window.open("http://www.facebook.com/sharer.php?u=www.naver.com");
  };
  /**
   * - 우리 웹사이트의 주소를 복사해주는 클립보드입니다.
   */
  const handleClickCopyClipboard = () => {
    setCopied(true);
    navigator.clipboard.writeText(window.location.href);

    const timer = setTimeout(() => {
      setCopied(false);
      clearTimeout(timer);
    }, 350);
  };

  return (
    <S.Header sb pdb={32}>
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
          type="button"
          w={20.5}
          mobW={15.5}
          h={20}
          mobH={15}
          onClick={handleClickShareKaKao}
        >
          <KakaoLogo />
        </S.ShareButton>
        <S.ShareButton
          type="button"
          w={20}
          mobW={15}
          h={20}
          mobH={15}
          onClick={handleClickShareFacebook}
        >
          <FacebookLogo />
        </S.ShareButton>
        <S.ShareButton
          type="button"
          copied={copied}
          w={19}
          mobW={14.5}
          h={18}
          mobH={13.5}
          onClick={handleClickCopyClipboard}
        >
          <ShareIcon />
        </S.ShareButton>
      </S.IconWrapper>
    </S.Header>
  );
};

CoinChartHeader.propTypes = {
  coinName: PropTypes.string.isRequired,
  coinImageUrl: PropTypes.string.isRequired,
};

const S = {};

S.Header = styled(SDiv)`
  border-bottom: 1px solid ${colors.gray9};

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
  ${(props) => {
    return (
      props.copied &&
      css`
        &:before {
          content: "copied!";
          position: absolute;
          top: -20px;
          right: -20px;
          background: ${colors.black};
          padding: 4px 8px;
          border-radius: 20px;
          font-size: 10px;
          color: white;
        }
        &:after {
          content: "";
          position: absolute;
          top: -4.5px;
          right: 0px;
          width: 6px;
          height: 6px;
          background: ${colors.black};
          transform: rotate(45deg);
        }
      `
    );
  }}
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
