import { defaultLinkStyles } from "../../link/style";

// TODO: follow-up with Jira ticket DCOS-62772 (a more thorough set of normalize styles)
export const normalize = `
    a {
        ${defaultLinkStyles};
    }
`;
