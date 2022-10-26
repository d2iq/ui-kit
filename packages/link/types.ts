import React from "react";

export interface LinkProps {
  /**
   * A url the user will be navigated to when clicking the link. This also changes the tag to `<a>`.
   */
  url?: string;
  /**
   * If the `url` prop is set, this will open that link in a new tab.
   */
  openInNewTab?: boolean;
  children?: React.ReactNode | React.ReactNode[];
}

export type ExpandedLinkProps = LinkProps &
  Omit<React.HTMLProps<HTMLAnchorElement>, "ref">;

export type LinkComponent = React.ComponentType<ExpandedLinkProps>;
