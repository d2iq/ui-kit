import React from "react";
import { LinkComponentContext } from "../../uiKitProvider/link/context";
import { ExpandedLinkProps } from "../types";

const UnstyledLink = (props: ExpandedLinkProps, ref) => {
  const { href, url, target, openInNewTab, children, ...rest } = props;

  // Context is used for `UIKitProvider` link delegation
  const LinkComponent = React.useContext(LinkComponentContext);
  if (LinkComponent) {
    return <LinkComponent ref={ref} {...props} />;
  }

  const rel = target === "_blank" || openInNewTab ? "noopener" : undefined;
  const blankTargetOrDefault = !target && openInNewTab ? "_blank" : target;

  return (
    <a
      ref={ref}
      href={href || url}
      target={blankTargetOrDefault}
      rel={rel}
      {...rest}
    >
      {children}
    </a>
  );
};

export default React.forwardRef(UnstyledLink);
