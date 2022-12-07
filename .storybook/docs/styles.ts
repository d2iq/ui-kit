import styled from "@emotion/styled";
import {
  purpleDarken5,
  spaceXxl,
  spaceXl,
  yellowLighten4,
  yellowLighten5,
  breakpointSmall
} from "../../packages/design-tokens/build/js/designTokens";

export const ImgWrapper = styled.div`
  > svg {
    max-width: 100%;
  }
`;

export const BannerContainer = styled.div`
  background-color: ${purpleDarken5};
`;

export const TextWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 0 ${spaceXxl};

  @media (min-width: ${breakpointSmall}) {
    padding: 0 ${spaceXl};
  }
`;

export const GradientContainer = styled.div`
  background: linear-gradient(
    0deg,
    ${yellowLighten5} 0%,
    ${yellowLighten4} 100%
  );
  padding: ${spaceXxl} 0 0 0;
  max-width: 100%;
`;

export const FooterImg = styled.img`
  max-width: 100%;
`;
