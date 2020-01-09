import { themeTextColorInteractive } from "../../design-tokens/build/js/designTokens";

// TODO: follow-up with Jira ticket DCOS-62772 (a more thorough set of normalize styles)
export const normalize = `
    a {
        text-decoration: none;
        color: ${themeTextColorInteractive};
    }
`;
