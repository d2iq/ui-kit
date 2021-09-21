import * as React from "react";
import { IconShapes } from "../../icon/components/Icon";
import ResetLink from "../../link/components/ResetLink";
import IconPropAdapter from "../../icon/components/IconPropAdapter";
import { Flex, FlexItem } from "../../styleUtils/layout";

interface BreadcrumbItemProps {
  icon?: IconShapes | React.ReactElement<HTMLElement>;
  url?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const BreadcrumbItem = ({
  icon,
  url,
  onClick,
  children
}: BreadcrumbItemProps) => {
  const content =
    url || onClick ? (
      <ResetLink url={url} onClick={onClick}>
        {children}
      </ResetLink>
    ) : (
      <span>{children}</span>
    );

  return icon ? (
    <Flex align="center" gutterSize="m">
      <FlexItem flex="shrink">
        <IconPropAdapter icon={icon} size="s" color="inherit" />
      </FlexItem>
      <FlexItem>{content}</FlexItem>
    </Flex>
  ) : (
    content
  );
};

export default BreadcrumbItem;
