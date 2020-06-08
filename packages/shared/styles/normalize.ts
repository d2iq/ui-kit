import { defaultLinkStyles } from "../../link/style";
import { tintContent } from "./styleUtils";
import {
  fontLineHeightDefault,
  fontSizeM,
  themeTextColorPrimary,
  themeBgPrimary
} from "../../design-tokens/build/js/designTokens";

// TODO: follow-up with Jira ticket DCOS-62772 (a more thorough set of normalize styles)
export const normalize = `
    :root {
        ${tintContent(themeTextColorPrimary)};
        background-color: ${themeBgPrimary};
        font-size: ${fontSizeM};
        line-height: ${fontLineHeightDefault};
    }

    a {
        ${defaultLinkStyles};
    }

    textarea {
        font-family: inherit;
    }
`;
