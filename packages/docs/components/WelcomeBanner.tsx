import * as React from "react";
import { HeadingText1, HeadingText2, Text, SpacingBox } from "../..";
import { purpleLighten4 } from "../../design-tokens/build/js/designTokens";
import { BannerContainer, ImgWrapper, TextWrapper } from "../styles";
import { ReactComponent as BannerImg } from "../assets/welcome-banner.svg";

const WelcomeBanner = () => {
  return (
    <BannerContainer>
      <SpacingBox textAlign="center" spacingSize="xxl" side="vert">
        <ImgWrapper>
          <BannerImg />
        </ImgWrapper>
        <SpacingBox side="bottom" spacingSize="l">
          <HeadingText1 color={purpleLighten4}>
            <strong>D2DS</strong>
          </HeadingText1>
          <HeadingText2 color={purpleLighten4}>
            <strong>Day 2 Design System</strong>
          </HeadingText2>
        </SpacingBox>
        <TextWrapper>
          <Text color={purpleLighten4} align="center">
            D2DS is a design system to drive the design of software products for
            Day2 operations. The system contains a series of components,
            standards, and guidelines to use to create a unified user experience
            at D2iQ.
          </Text>
        </TextWrapper>
      </SpacingBox>
    </BannerContainer>
  );
};

export default WelcomeBanner;
