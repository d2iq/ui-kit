import { defaultLinkStyles } from "../../link/style";
import {
  fontLineHeightDefault,
  fontSizeM
} from "../../design-tokens/build/js/designTokens";

// TODO: follow-up with Jira ticket DCOS-62772 (a more thorough set of normalize styles)
export const normalize = `
    :root {
        font-size: ${fontSizeM};
        line-height: ${fontLineHeightDefault};
    }

    a {
        ${defaultLinkStyles};
    }
`;
