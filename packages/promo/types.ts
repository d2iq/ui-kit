export interface PromoProps {
  /** The primary banner content */
  bodyContent: React.ReactNode;
  /** A function that gets called when the banner is dismissed */
  dismissHandler?: () => void;
  /** A consise summary of the banner's message */
  headingText: string;
  /** Whether the content is on a dark background. Changes text color to be readable. */
  isDarkBackground?: boolean;
  /** A link to the graphic's image file. The graphic (typically an illustration) should be relevant to the banner's message. Ideally the graphic should not just be decorative, but it reinforces the banner's overall message. */
  graphicSrc?: string;
  /** Whether a user has opted not to see the banner */
  optOutBanner?: boolean;
  /** A function that gets called when the user checks the "Do not show again" checkbox */
  optOutHandler?: (e: React.SyntheticEvent<HTMLInputElement>) => void;
  /** The most relevant action a user can take in response to the banner's message */
  primaryAction?: React.ReactNode;
  /** An additional action a user can take in response to the banner's message. This can also just be a link to more information relevant to the banner's message. */
  secondaryAction?: React.ReactNode;
  /** The Cypress selector */
  ["data-cy"]?: string;
}

export type GradientStyle = "lightBlue" | "purple";
export type GradientColors = [string, string];
