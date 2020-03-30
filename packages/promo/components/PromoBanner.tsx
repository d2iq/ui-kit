import * as React from "react";
import { cx } from "emotion";
import { designTokens as dt, SpacingBox } from "../../";
import PromoContent from "./PromoContent";
import { PromoProps, GradientStyle } from "../types";
import { getBackgroundGradient, gradientStyles } from "../style";

interface PromoBannerProps extends PromoProps {
  gradientStyle?: GradientStyle;
}

const darkGradientStyles: GradientStyle[] = ["purple"];

const PromoBanner: React.StatelessComponent<PromoBannerProps> = ({
  gradientStyle,
  isDarkBackground,
  ...other
}) => (
  <SpacingBox
    bgColor={
      gradientStyle ? gradientStyles[gradientStyle][0] : dt.themeBgSecondary
    }
    className={cx({
      [getBackgroundGradient(gradientStyle)]: Boolean(gradientStyle)
    })}
    spacingSize="l"
    side="horiz"
  >
    <PromoContent
      isDarkBackground={
        (gradientStyle && darkGradientStyles.includes(gradientStyle)) ||
        isDarkBackground
      }
      {...other}
    />
  </SpacingBox>
);

export default PromoBanner;
