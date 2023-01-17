import * as React from "react";
import { cx } from "@emotion/css";
import { default as Breadcrumb } from "../../breadcrumb/components/Breadcrumb";
import {
  listReset,
  flex,
  flexItem,
  padding,
  display,
  border
} from "../../shared/styles/styleUtils";
import { SpaceSizes } from "../../shared/styles/styleUtils/modifiers/modifierUtils";
import PageHeaderTabs from "../components/PageHeaderTabs";
import { fillHeight } from "../style";

export interface PageHeaderProps {
  /**
   * Breadcrumbs to display on the left side of the PageHeader.
   */
  breadcrumbElements: React.ReactNodeArray;
  /**
   * Actions to display on the right side of the PageHeader.
   */
  actions?: Array<React.ReactElement<any>>;
  /**
   * Human-readable selector used for writing tests.
   */
  "data-cy"?: string;
  /**
   * Allows custom styles.
   */
  className?: string;
  children?: React.ReactNode;
}

export const pageHeaderPaddingSize: SpaceSizes = "l";

const PageHeader = ({
  breadcrumbElements,
  actions = [],
  children,
  "data-cy": dataCy = "pageHeader",
  className
}: PageHeaderProps) => {
  const hasTabsChild = React.Children.toArray(children).some(
    child => React.isValidElement(child) && child.type === PageHeaderTabs
  );

  return (
    <div
      className={cx(
        padding("all", pageHeaderPaddingSize),
        {
          [border("bottom")]: !hasTabsChild,
          [fillHeight]: hasTabsChild
        },
        // className for custom CSS
        className
      )}
    >
      <div className={cx(flex({ align: "center" }))} data-cy={dataCy}>
        <div className={flexItem("grow")}>
          <Breadcrumb>{breadcrumbElements}</Breadcrumb>
        </div>
        <div className={flexItem("shrink")}>
          <ul
            className={cx(listReset, flex({ align: "center" }))}
            data-cy="pageHeader-actions"
          >
            {actions.map((action, i) => {
              return (
                <li
                  key={action.key ? `${action.key}` : `action-${i}`}
                  className={cx(padding("left", "s"), display("inherit"))}
                >
                  {action}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {children}
    </div>
  );
};

export default React.memo(PageHeader);
