import * as React from "react";
import { style } from "../style";

export interface I${Component}Props {
  children?: React.ReactNode | string;
}

class ${Component} extends React.PureComponent<I${Component}Props, {}> {
  public render() {
    const { children } = this.props;

    return <span className={style}>{children}</span>;
  }
}

export default ${Component};
