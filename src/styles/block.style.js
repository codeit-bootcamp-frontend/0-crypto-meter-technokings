import { css } from "styled-components";

import colors from "@/styles/colors";

const mg = css`
  margin: ${(props) => props.mg};
`;

const pd = css`
  padding: ${(props) => props.pd};
`;

const bg = css`
  background-color: ${(props) => props.bg};
`;

const bd = css`
  border: ${(props) => props.bd};
`;

const bc = css`
  border-color: ${(props) => props.bc};
`;

const flex = css`
  flex: ${(props) => props.flex};
`;

const row = css`
  display: flex;
  flex-direction: row;
`;

const col = css`
  display: flex;
  flex-direction: column;
`;

const ct = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const sb = css`
  display: flex;
  justify-content: space-between;
`;

const start = css`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const ast = css`
  display: flex;
  align-items: flex-start;
`;

const jst = css`
  display: flex;
  justify-content: flex-start;
`;

const aed = css`
  display: flex;
  align-items: flex-end;
`;

const jed = css`
  display: flex;
  justify-content: flex-end;
`;

const jct = css`
  display: flex;
  justify-content: center;
`;

const act = css`
  display: flex;
  align-items: center;
`;

const white = css`
  background-color: ${colors.white};
`;

const lightgreen = css`
  background-color: ${colors.lightgreen};
`;

const lightred = css`
  background-color: ${colors.lightred};
`;

const black = css`
  background-color: ${colors.black};
`;

const tooltip = css`
  background-color: ${colors.tooltip};
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

export {
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
};
