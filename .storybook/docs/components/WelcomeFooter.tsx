import * as React from "react";

import { PrimaryButton, SecondaryButton, SpacingBox } from "../../../packages";
import { Flex } from "../../../packages/styleUtils/layout";
import { purpleDarken4 } from "../../../packages/design-tokens/build/js/designTokens";

import { HeadingText2 } from "../../../packages/styleUtils/typography";
import footer from "../assets/footer.png";
import { FooterImg, GradientContainer } from "../styles";

export const WelcomeFooter = () => {
  return (
    <SpacingBox spacingSize="xxl" side="top">
      <GradientContainer>
        <Flex direction="column" align="center">
          <SpacingBox textAlign="center">
            <HeadingText2 color={purpleDarken4}>
              Want to impact the design of cloud-native journey products?
            </HeadingText2>
            <p>Sign up for D2iQ's user research program today!</p>
          </SpacingBox>

          <SpacingBox>
            <Flex justify="center" align="center" gutterSize="l">
              <SecondaryButton
                openInNewTab
                url="https://d2iq.com/user-research"
              >
                Learn More
              </SecondaryButton>
              <PrimaryButton openInNewTab url="https://ethn.io/64425">
                Sign Up
              </PrimaryButton>
            </Flex>
          </SpacingBox>

          <FooterImg src={footer} alt="potential users" />
        </Flex>
      </GradientContainer>
    </SpacingBox>
  );
};
