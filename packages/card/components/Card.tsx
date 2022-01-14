import * as React from "react";
import { cardBase, cardHeaderImage, headerHeight, cardContent } from "../style";
import { cx } from "@emotion/css";
import { preserveAspectRatio, padding } from "../../shared/styles/styleUtils";
import { SpaceSize } from "../../shared/styles/styleUtils/modifiers/modifierUtils";

export enum HeaderSizes {
  S = "s",
  M = "m",
  L = "l"
}

export interface CardProps extends React.HTMLProps<HTMLDivElement> {
  /**
   * `[width, height]` Keeps the card's width and height at a specific proportion. e.g.: 2:1 would be [2, 1]
   */
  aspectRatio?: [number, number];
  /**
   * The padding between the border and the content. Can be set for all viewport sizes, or configured to have different values at different viewport width breakpoints
   */
  paddingSize?: SpaceSize;
  children?: React.ReactNode | string;
  /**
   * The card header will be set to the top section of the card optionally. Set a header image along with corresponding alt text. Size can be set to "s", "m", or "l" to increase the header height.
   */
  header?: {
    /**
     * The header image will appear as a background image.
     */
    headerImg: string;
    /**
     * Alt text can provide additional context for the image for screen readers, if it is not provided it will default to an empty string indicating to the screen reader to not announce the image.
     */
    headerImgAltText?: string | undefined;
    /**
     * Size can be set to "s", "m", or "l" to increase the header height. If not specified, size will default to medium.
     */
    size?: HeaderSizes;
  };
}

class Card<P extends CardProps, S extends {}> extends React.PureComponent<
  P,
  S
> {
  public static defaultProps: Partial<CardProps> = {
    paddingSize: "m"
  };

  public render() {
    return this.getCardElement(this.props);
  }

  protected getCardElement(cardProps: CardProps, additionalClasses?: string) {
    const { children, aspectRatio, paddingSize, header, ...other } = cardProps;
    const headerSize = header?.size || HeaderSizes.M;

    const aspectRatioStyle = aspectRatio
      ? preserveAspectRatio(aspectRatio[0], aspectRatio[1])
      : null;

    return (
      <div
        className={cx(cardBase, aspectRatioStyle, additionalClasses)}
        data-cy="card"
        {...other}
      >
        {header?.headerImg && (
          <div className={cx(cardHeaderImage, headerHeight[headerSize])}>
            <img src={header.headerImg} alt={header.headerImgAltText ?? ""} />
          </div>
        )}
        <div className={cx(padding("all", paddingSize), cardContent)}>
          {children}
        </div>
      </div>
    );
  }
}

export default Card;
