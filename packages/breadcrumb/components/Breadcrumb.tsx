import * as React from "react";
import { cx } from "@emotion/css";

import { Icon } from "../../icon";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import {
  textWeight,
  flex,
  padding,
  textSize
} from "../../shared/styles/styleUtils";

export interface BreadcrumbProps {
  children?: React.ReactNode | string;
  /**
   * Allows custom styling
   */
  className?: string;
  /**
   * Human-readable selector used for writing tests
   */
  "data-cy"?: string;
}

function intersperse<A>(list: A[], sep: JSX.Element) {
  return Array.prototype.concat(...list.map(e => [sep, e])).slice(1);
}

const Breadcrumb = ({
  className,
  children,
  "data-cy": dataCy = "breadcrumb"
}: BreadcrumbProps) => {
  const breadcrumbSeparator = <Icon shape={SystemIcons.CaretRight} size="xs" />;
  const crumbsArr = intersperse(
    React.Children.toArray(children),
    breadcrumbSeparator
  );

  return (
    <nav className={cx(flex({ align: "center", wrap: "wrap" }), className)}>
      {crumbsArr.map((crumb, i) => (
        <div
          key={`breadcrumb-wrapper-${i}`}
          className={cx(textWeight("medium"), textSize("l"), {
            [padding("left", "xs")]: i !== 0
          })}
          data-cy={dataCy}
        >
          {crumb}
        </div>
      ))}
    </nav>
  );
};

export default React.memo(Breadcrumb);
