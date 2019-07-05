import * as React from "react";

import { Icon } from "../../icon";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { iconSizeXs } from "../../design-tokens/build/js/designTokens";
import { cx } from "emotion";
import {
  textWeight,
  flex,
  padding,
  textSize
} from "../../shared/styles/styleUtils";

export interface BreadcrumbProps {
  children?: React.ReactNode | string;
}

class Breadcrumb extends React.PureComponent<BreadcrumbProps, {}> {
  public render() {
    const { children } = this.props;
    const breadcrumbSeparator = (
      <Icon shape={SystemIcons.CaretRight} size={iconSizeXs} />
    );
    const crumbsArr = React.Children.toArray(children).reduce(
      (acc, crumb, i) => {
        acc.push(crumb);
        if (i !== React.Children.toArray(children).length - 1) {
          acc.push(breadcrumbSeparator);
        }
        return acc;
      },
      Array()
    );

    return (
      <nav className={cx(flex({ align: "center", wrap: "wrap" }))}>
        {crumbsArr.map((crumb, i) => (
          <div
            className={cx(textWeight("medium"), textSize("l"), {
              [padding("right", "xs")]: i !== crumbsArr.length - 1
            })}
            key={`breadcrumb-wrapper-${i}`}
          >
            {crumb}
          </div>
        ))}
      </nav>
    );
  }
}

export default Breadcrumb;
