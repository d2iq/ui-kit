import * as React from "react";
import { HeadingText1, Text, SpacingBox } from "../../../packages";
import { purpleLighten4 } from "../../../packages/design-tokens/build/js/designTokens";
import { BannerContainer, ImgWrapper, TextWrapper } from "../styles";

import WelcomeImage from "../assets/welcome-banner.svg";

export const WelcomeBanner = () => {
  return (
    <BannerContainer>
      <SpacingBox textAlign="center" spacingSize="xxl" side="vert">
        <ImgWrapper>
          <WelcomeImage />
        </ImgWrapper>
        <SpacingBox side="bottom" spacingSize="l">
          <HeadingText1 color={purpleLighten4}>
            <strong>D2iQ Product Language</strong>
          </HeadingText1>
        </SpacingBox>
        <TextWrapper>
          <Text color={purpleLighten4} align="center">
            D2iQ Product Language is a design system to drive the design of
            software products for Day 2 operations. The system contains a series
            of standards, and guidelines, and UI Kit components and design
            tokens to use to create a unified user experience at D2iQ.
          </Text>
        </TextWrapper>
      </SpacingBox>
    </BannerContainer>
  );
};
