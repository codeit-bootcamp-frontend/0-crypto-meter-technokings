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
  full,
} from "@/styles/block.style";

const SDiv = styled.div`
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
  ${(props) => props.bc && bc};
  ${(props) => props.bd && bd}

  /* 나머지 속성 */
  ${(props) => props.flex && flex}

  width: ${(props) => (props.w ? `${props.w}px` : "auto")};
  ${(props) => props.full && full}
  height: ${(props) => (props.h ? `${props.h}px` : "auto")};
  min-height: ${(props) => (props.mh ? `${props.mh}%` : "auto")};

  /* gap 속성 */
  gap: ${(props) => (props.g ? `${props.g}px` : 0)};

  ${(props) => props.center && center}
  ${(props) => props.left && left}
  ${(props) => props.right && right}
`;

export default SDiv;
