export interface SharedLinkProps {
  /**
   * a url the user will be navigated to when clicking the button. This also changes the tag to `<a>`
   */
  url?: string;
  /**
   * if the `url` prop is set, this will open that link in a new tab
   */
  openInNewTab?: boolean;
}

export type LinkProps = SharedLinkProps & React.HTMLProps<HTMLAnchorElement>;
