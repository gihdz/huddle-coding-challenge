import styled from "styled-components";
import {
  color,
  fontSize,
  fontWeight,
  fontFamily,
  textAlign
} from "styled-system";
import { Box } from "@rebass/grid";

export default styled(Box)`
  ${color}
  ${fontSize}
  ${fontWeight}
  ${fontFamily}
  ${textAlign}
`;
