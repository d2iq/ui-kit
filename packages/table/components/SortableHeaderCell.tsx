import * as React from "react";
import { cx } from "emotion";
import { default as HeaderCell } from "./HeaderCell";
import Clickable from "../../clickable/components/clickable";
import { sortableHeaderIconBaseCSS, styleArrowDirection } from "../style";

type SortDirection = "ASC" | "DESC" | null;
interface IProps {
  sortHandler: () => void;
  sortDirection: SortDirection;
  columnContent: string | React.ReactNode;
}
interface IState {
  hovered: boolean;
}

export class SortableHeaderCell extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.hoverStart = this.hoverStart.bind(this);
    this.hoverEnd = this.hoverEnd.bind(this);
    this.state = {
      hovered: false
    };
  }

  hoverStart() {
    this.setState({ hovered: true });
  }

  hoverEnd() {
    this.setState({ hovered: false });
  }

  render() {
    const { sortHandler, sortDirection, columnContent } = this.props;

    const displaySortDirection =
      sortDirection === null && this.state.hovered ? "DESC" : sortDirection;

    const ariaSortString = !displaySortDirection
      ? "none"
      : displaySortDirection === "DESC"
        ? "descending"
        : "ascending";

    return (
      <Clickable tabIndex={0} action={sortHandler}>
        <HeaderCell
          onMouseEnter={this.hoverStart}
          onMouseLeave={this.hoverEnd}
          className={cx(
            sortableHeaderIconBaseCSS,
            styleArrowDirection(displaySortDirection)
          )}
          role="columnheader"
          aria-sort={ariaSortString}
          aria-label={`sort by ${columnContent} in ${
            ariaSortString === "descending" ? "ascending" : "descending"
          } order`}
        >
          <span>{columnContent}</span>
        </HeaderCell>
      </Clickable>
    );
  }
}

export default SortableHeaderCell;
