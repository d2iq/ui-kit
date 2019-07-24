import * as React from "react";
import { container } from "../style";

export interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.StatelessComponent<ContainerProps> = ({ children }) => (
  <div className={container} data-cy="conntainer">
    {children}
  </div>
);

export default Container;
