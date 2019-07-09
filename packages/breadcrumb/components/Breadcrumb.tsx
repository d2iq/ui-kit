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
    const crumbsArr = React.Children.toArray(this.props.children);
    const breadcrumbSeparator = (
      <Icon shape={SystemIcons.CaretRight} size={iconSizeXs} />
    );

    return (
      <nav className={cx(flex({ align: "center", wrap: "wrap" }))}>
        {crumbsArr.reduce(
          (acc, crumb, index) =>
            acc.concat([
              <div
                className={cx(textWeight("medium"), textSize("l"), {
                  [padding("right", "xs")]: index !== crumbsArr.length - 1
                })}
                key={`breadcrumb-wrapper-${index}`}
              >
                {crumb}
              </div>,
              index === crumbsArr.length - 1 ? null : (
                <div
                  className={cx(textWeight("medium"), textSize("l"), {
                    [padding("right", "xs")]: index !== crumbsArr.length - 1
                  })}
                  key={`breadcrumb-seperator-${index}`}
                >
                  {breadcrumbSeparator}
                </div>
              )
            ]),
          Array()
        )}
      </nav>
    );
  }
}

export default Breadcrumb;
