import * as React from "react";

export interface TabItemProps {
  children?: React.ReactNode | React.ReactNode[];
}

const TabItem = ({ children }: TabItemProps): JSX.Element => {
  return <>{children}</>;
};

export default React.memo(TabItem);
