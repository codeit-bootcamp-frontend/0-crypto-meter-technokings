import styled, { css } from "styled-components";

import colors from "@/styles/colors";
import {
  h1,
  h2,
  h3,
  h4,
  s1,
  s2,
  s3,
  b1,
  b2,
  b3,
  c1,
  c2,
  c3,
} from "@/styles/typography";

const SText = styled.span`
  word-break: keep-all;
  /* font 크기, 굵기 속성*/
  ${(props) => props.h1 && h1}
  ${(props) => props.h2 && h2}
  ${(props) => props.h3 && h3}
  ${(props) => props.h4 && h4}
  ${(props) => props.s1 && s1}
  ${(props) => props.s2 && s2}
  ${(props) => props.s3 && s3}
  ${(props) => props.b1 && b1}
  ${(props) => props.b2 && b2}
  ${(props) => props.b3 && b3}
  ${(props) => props.c1 && c1}
  ${(props) => props.c2 && c2}
  ${(props) => props.c3 && c3}

  /* font 색상 속성*/
  ${(props) => props.green && green}
  ${(props) => props.red && red}
  ${(props) => props.black && black}
  ${(props) => props.g1 && g1}
  ${(props) => props.g2 && g2}
  ${(props) => props.g3 && g3}
  ${(props) => props.g4 && g4}
  ${(props) => props.g5 && g5}
  ${(props) => props.g6 && g6}
  ${(props) => props.g7 && g7} 
  ${(props) => props.g8 && g8}
  ${(props) => props.g9 && g9} 
  ${(props) => props.white && white}
  ${(props) => props.disableSelect && disableSelect} 

  margin-top: ${(props) => props.mgt || 0}px;
  margin-bottom: ${(props) => props.mgb || 0}px;
  margin-left: ${(props) => props.mgl || 0}px;
  margin-right: ${(props) => props.mgr || 0}px;

  padding-top: ${(props) => props.pdt || 0}px;
  padding-bottom: ${(props) => props.pdb || 0}px;
  padding-left: ${(props) => props.pdl || 0}px;
  padding-right: ${(props) => props.pdr || 0}px;

  ${(props) => props.center && center}
  ${(props) => props.left && left}
  ${(props) => props.right && right}
`;

const white = css`
  color: ${colors.white};
`;

const green = css`
  color: ${colors.primary};
`;

const red = css`
  color: ${colors.red};
`;

const black = css`
  color: ${colors.black};
`;

const g9 = css`
  color: ${colors.gray9};
`;

const g8 = css`
  color: ${colors.gray8};
`;

const g7 = css`
  color: ${colors.gray7};
`;

const g6 = css`
  color: ${colors.gray6};
`;

const g5 = css`
  color: ${colors.gray5};
`;

const g4 = css`
  color: ${colors.gray4};
`;

const g3 = css`
  color: ${colors.gray3};
`;

const g2 = css`
  color: ${colors.gray2};
`;

const g1 = css`
  color: ${colors.gray1};
`;

const disableSelect = css`
  user-select: none;
`;

const center = css`
  text-align: center;
`;

const left = css`
  text-align: left;
`;

const right = css`
  text-align: right;
`;

export default SText;
