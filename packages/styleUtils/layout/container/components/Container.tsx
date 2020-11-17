import * as React from "react";
import { container } from "../style";

export interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => (
  <div className={container} data-cy="container">
    {children}
  </div>
);

export default Container;
