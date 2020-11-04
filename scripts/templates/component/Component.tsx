import * as React from "react";
import { style } from "./style";

export interface ${Component}Props {
  children?: React.ReactNode | string;
}

const ${Component}: React.FC<${Component}Props> = ({children}) => {
  return <span className={style}>{children}</span>;
}

export default ${Component};
