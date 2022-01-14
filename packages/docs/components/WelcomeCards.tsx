import * as React from "react";

import { Card } from "../../card";
import { Link } from "../../link";
import { Text } from "../../styleUtils/typography";
import { GridList, SpacingBox } from "../..";
import { purpleDarken4 } from "../../design-tokens/build/js/designTokens";

import headerUrlOne from "../assets/banner-one.png";
import headerUrlTwo from "../assets/banner-two.png";
import headerUrlThree from "../assets/banner-three.png";

const welcomeHeaderOne = {
  headerImg: headerUrlOne
};
const welcomeHeaderTwo = {
  headerImg: headerUrlTwo
};
const welcomeHeaderThree = {
  headerImg: headerUrlThree
};

const WelcomeCards = () => {
  return (
    <>
      <SpacingBox spacingSizePerSide={{ vert: "xxl", horiz: "xl" }}>
        <GridList
          columnCount={{ small: 1, medium: 2, large: 3 }}
          gutterSize="l"
        >
          <Card header={welcomeHeaderOne}>
            <Text color={purpleDarken4} size="l">
              <strong>Design Tokens</strong>
            </Text>
            <p>
              Ready-to-use UI elements that provide the foundation for D2iQ user
              experience development.
            </p>
            <p>
              Design tokens to ensure branding, spacing, and general UI
              consistency.
            </p>
            <Link openInNewTab={true} url="https://github.com/dcos-labs/ui-kit">
              UI Kit Storybook
            </Link>
          </Card>
          <Card header={welcomeHeaderTwo}>
            <Text color={purpleDarken4} size="l" weight="medium">
              <strong>Standards, Guidelines, and Patterns</strong>
            </Text>
            <p>
              Design principles and best practices that guide beautiful,
              consistent, user-friendly D2iQ product experiences.
            </p>
            <p>
              Content standards and guidelines to ensure a single, consistent,
              and clear voice.
            </p>
            <Link
              openInNewTab={true}
              url="https://github.com/dcos-labs/ui-kit/tree/master/design-guidelines"
            >
              UI Standards and Guidelines
            </Link>
          </Card>
          <Card header={welcomeHeaderThree}>
            <Text color={purpleDarken4} size="l" weight="medium">
              <strong>D2iQ Brand</strong>
            </Text>
            <p>
              Standards for our general branding including logo usage, and brand
              colors. Primarily used for our marketing website materials.
            </p>
            <Link openInNewTab={true} url="https://d2iq.com/brand">
              D2iQ Brand Resources
            </Link>
          </Card>
        </GridList>
      </SpacingBox>
    </>
  );
};

export default WelcomeCards;
