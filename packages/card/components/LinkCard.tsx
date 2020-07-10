import * as React from "react";
import { cx } from "emotion";
import { Box } from "../../styleUtils/modifiers";
import Card, { CardProps } from "./Card";
import { buttonCard, cardLink, cardWithLink } from "../style";
import { LinkProps } from "../../link/types";

export interface ButtonCardProps extends CardProps {
  /**
   * What screenreaders read aloud for the link
   */
  linkDescription: string;
}

class LinkCard extends Card<ButtonCardProps & LinkProps, {}> {
  public render() {
    const {
      openInNewTab,
      linkDescription,
      url,
      children,
      ...other
    } = this.props;

    const buttonCardProps = {
      children: (
        <>
          <a
            href={url}
            className={cardLink}
            target={openInNewTab ? "_blank" : undefined}
          >
            <Box tag="span" isVisuallyHidden={true}>
              {linkDescription}
            </Box>
          </a>
          {children}
        </>
      ),
      ...{ "data-cy": "linkCard" },
      ...other
    };

    return this.getCardElement(buttonCardProps, cx(buttonCard, cardWithLink));
  }
}

export default LinkCard;
