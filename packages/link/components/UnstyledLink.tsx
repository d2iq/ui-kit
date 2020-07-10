import React from "react";
import { ExpandedLinkProps } from "../types";
import { LinkContext } from "../../appProvider/link/context";

class UnstyledLink extends React.Component<ExpandedLinkProps> {
  static contextType = LinkContext;
  render() {
    const LinkComponent = this.context;

    if (LinkComponent) {
      return <LinkComponent {...this.props} />;
    }

    const { href, url, target, openInNewTab, children, ...rest } = this.props;
    const rel = target === "_blank" || openInNewTab ? "noopener" : undefined;
    const blankTargetOrDefault = !target && openInNewTab ? "_blank" : target;

    return (
      <a
        href={href || url}
        target={blankTargetOrDefault}
        // https://web.dev/external-anchors-use-rel-noopener/
        rel={rel}
        {...rest}
      >
        {children}
      </a>
    );
  }
}

export { UnstyledLink as default };
