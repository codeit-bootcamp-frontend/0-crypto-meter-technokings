import styled from "styled-components";

import {
  mg,
  pd,
  bg,
  bd,
  bc,
  flex,
  row,
  col,
  ct,
  sb,
  start,
  ast,
  jst,
  aed,
  jed,
  jct,
  act,
  white,
  lightgreen,
  lightred,
  black,
  tooltip,
  disableSelect,
  center,
  left,
  right,
} from "@/styles/block.style";
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

const SButton = styled.button`
  /* flexbox 속성 */
  ${(props) => props.row && row}
  ${(props) => props.col && col}
  ${(props) => props.ct && ct}
  ${(props) => props.start && start}
  ${(props) => props.aed && aed}
  ${(props) => props.jed && jed}
  ${(props) => props.ast && ast}
  ${(props) => props.jst && jst}
  ${(props) => props.act && act}
  ${(props) => props.jct && jct}
  ${(props) => props.sb && sb}

  /* background color 속성*/
  ${(props) => props.bg && bg}
  ${(props) => props.white && white}
  ${(props) => props.lightgreen && lightgreen}
  ${(props) => props.lightred && lightred}
  ${(props) => props.black && black}
  ${(props) => props.tooltip && tooltip}

  /* div 내부 텍스트 속성 */
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
  ${(props) => props.disableSelect && disableSelect} 

  /* 마진 속성 */
  margin-top: ${(props) => props.mgt || 0}px;
  margin-bottom: ${(props) => props.mgb || 0}px;
  margin-left: ${(props) => props.mgl || 0}px;
  margin-right: ${(props) => props.mgr || 0}px;
  ${(props) => props.mg && mg}

  /* 패딩 속성 */
  padding-top: ${(props) => props.pdt || 0}px;
  padding-bottom: ${(props) => props.pdb || 0}px;
  padding-left: ${(props) => props.pdl || 0}px;
  padding-right: ${(props) => props.pdr || 0}px;
  ${(props) => props.pd && pd}

  /* border 속성 */
  border-radius: ${(props) => props.br || 0}px;
  ${(props) => props.bc && bc}
  ${(props) => props.bd && bd}

  /* 나머지 속성 */
  ${(props) => props.flex && flex}

  width: ${(props) => (props.w ? `${props.w}px` : "auto")};
  height: ${(props) => (props.h ? `${props.h}px` : "auto")};
  min-height: ${(props) => (props.mh ? `${props.mh}%` : "auto")};

  ${(props) => props.center && center}
  ${(props) => props.left && left}
  ${(props) => props.right && right}
`;

export default SButton;
