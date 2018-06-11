import { css } from "emotion";
import * as React from "react";
import Clickable from "../../clickable/components/clickable";
import { badge as badgeButton } from "../style";

export interface IBadgeButtonProps {
  appearance?:
    | "default"
    | "success"
    | "primary"
    | "warning"
    | "danger"
    | "outline";
  onClick: (event?: React.SyntheticEvent<HTMLElement>) => void;
  /**
   * Tab index indicates if an element can be focuesed for more information see
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
   * browser default value for this is -1
   */
  tabIndex?: number;
  children: JSX.Element | string;
}

export class BadgeButton extends React.PureComponent<IBadgeButtonProps, {}> {
  public static defaultProps: Partial<IBadgeButtonProps> = {
    appearance: "default",
    tabIndex: -1
  };

  public render() {
    const { appearance, children, onClick, tabIndex } = this.props;
    const props = {
      action: onClick,
      tabIndex
    };

    const className = css`
      outline: none;
      cursor: pointer;
      ${badgeButton(appearance)};
    `;
    return (
      <Clickable {...props}>
        <span className={className}>{children}</span>
      </Clickable>
    );
  }
}

export default BadgeButton;
