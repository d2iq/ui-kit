import * as React from "react";

export interface TabItemProps {
  children?: React.ReactNode | React.ReactNode[];
}

const TabItem = (props: TabItemProps) => {
  return <>{props.children}</>;
};

export default React.memo(TabItem);
