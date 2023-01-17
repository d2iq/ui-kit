import * as React from "react";
import { cx } from "@emotion/css";
import { designTokens as dt, SpacingBox } from "../../";
import PromoContent from "./PromoContent";
import { GradientStyle, PromoBackgroundColor, PromoProps } from "../types";
import { getBackgroundGradient, gradientStyles } from "../style";

interface PromoBannerProps extends PromoProps {
  bgColor?: PromoBackgroundColor;
  gradientStyle?: GradientStyle;
}

const darkGradientStyles: GradientStyle[] = ["purple"];

const PromoBanner = ({
  bgColor = "themeBgSecondary",
  gradientStyle,
  isDarkBackground,
  className,
  ...other
}: PromoBannerProps) => (
  <SpacingBox
    bgColor={gradientStyle ? gradientStyles[gradientStyle][0] : dt[bgColor]}
    className={cx(
      {
        [getBackgroundGradient(gradientStyle)]: Boolean(gradientStyle)
      },
      className
    )}
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
