import * as React from "react";
import { cx } from "@emotion/css";
import {
  Box,
  CheckboxInput,
  Flex,
  FlexItem,
  HeadingText1,
  Icon,
  ResetButton,
  SpacingBox
} from "../../";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { PromoProps } from "../types";
import {
  bannerContainer,
  bodyTextMaxWidth,
  checkboxContainer,
  dismissButton,
  graphicContainer,
  heroImg
} from "../style";

const PromoContent = ({
  bodyContent,
  dismissHandler,
  headingText,
  isDarkBackground,
  graphicSrc,
  optOutBanner,
  optOutHandler,
  primaryAction,
  secondaryAction,
  className,
  "data-cy": dataCy = "promoContent"
}: PromoProps) => {
  const dismissCheckboxId = `dismissPromoCheckbox-${React.useId()}`;
  return (
    <div
      className={cx(bannerContainer(isDarkBackground), className)}
      data-cy={dataCy}
    >
      {dismissHandler && (
        <ResetButton
          className={dismissButton}
          onClick={dismissHandler}
          data-cy="dismissButton"
        >
          <Icon shape={SystemIcons.Close} size="xs" />
        </ResetButton>
      )}
      <Flex direction={{ default: "column", medium: "row" }} align="stretch">
        <FlexItem order={1}>
          <SpacingBox
            spacingSizePerSide={{
              vert: "l",
              right: { default: "none", medium: "l" }
            }}
          >
            <SpacingBox spacingSize="m" side="bottom">
              <HeadingText1 color="inherit">{headingText}</HeadingText1>
            </SpacingBox>
            <SpacingBox
              spacingSize="l"
              side="bottom"
              className={bodyTextMaxWidth}
            >
              {bodyContent}
            </SpacingBox>
            {primaryAction && secondaryAction ? (
              <Flex align="center" gutterSize="m">
                <FlexItem flex="shrink">{primaryAction}</FlexItem>
                <FlexItem flex="shrink">{secondaryAction}</FlexItem>
              </Flex>
            ) : (
              primaryAction || secondaryAction
            )}
          </SpacingBox>
        </FlexItem>
        {graphicSrc ? (
          <FlexItem
            order={{ default: 0, medium: 1 }}
            flex={{ default: "grow", small: "shrink", large: "grow" }}
          >
            <SpacingBox spacingSize="s" className={graphicContainer}>
              <Box
                bgImageUrl={graphicSrc}
                bgImageOptions={{ position: "center", size: "contain" }}
                className={heroImg}
              />
            </SpacingBox>
          </FlexItem>
        ) : null}
        {optOutHandler ? (
          <FlexItem flex="shrink" order={2}>
            <SpacingBox
              spacingSize="l"
              side="vert"
              className={checkboxContainer}
            >
              <CheckboxInput
                id={dismissCheckboxId}
                inputLabel="Do not show again"
                checked={optOutBanner}
                onChange={optOutHandler}
              />
            </SpacingBox>
          </FlexItem>
        ) : null}
      </Flex>
    </div>
  );
};

export default PromoContent;
