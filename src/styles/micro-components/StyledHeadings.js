/* eslint-disable object-curly-newline */
import styled from "styled-components";

import { black, g5, h1, h2, h3, h4 } from "@/styles/text.style";

const SHeading1 = styled.h1`
  ${h1}
  ${black}
`;

const SHeading2 = styled.h2`
  ${h2}
  ${g5}
`;

const SHeading3 = styled.h3`
  ${h3}
  ${black}
`;

const SHeading4 = styled.h4`
  ${h4}
  ${black}
`;

export { SHeading1, SHeading2, SHeading3, SHeading4 };
