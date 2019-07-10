import { textWeight, padding } from "../../shared/styles/styleUtils";
import { configurationMapLabel } from "../style";
import styled from "react-emotion";

export default styled("dt")`
  ${configurationMapLabel};
  ${padding("right", "s")};
  ${textWeight("medium")};
`;
