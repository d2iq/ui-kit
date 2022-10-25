import * as React from "react";
import { useId } from "react-id-generator";
import { cx } from "@emotion/css";
import { Flex, FlexItem } from "../styleUtils/layout";
import { Icon } from "../icon";
import { ResetButton } from "../button";
import { ResetLink } from "../link";
import { SelectInput } from "../selectInput";
import { SystemIcons } from "../icons/dist/system-icons-enum";
import { TextInput } from "../textInput";
import { themeBgDisabled } from "../design-tokens/build/js/designTokens";
import { ExpandedLinkProps } from "../link/types";
import { defaultInputWidth } from "./style";
import { border, display, margin, padding } from "../shared/styles/styleUtils";

export interface PaginationProps {
  /** Prop used to control which page the user is currently navigated to */
  activePage?: number;
  /** The default page the user starts on before the user navigates using the text input or the prev/next buttons. For use when the component is uncontrolled. */
  initialActivePage?: number;
  /** The label used to describe the items being paginated through */
  itemsLabel?: string;
  /** Prop used to control how many items are shown per page */
  pageLength?: number;
  /** The default number of items shown per page before the user selects a new number from the dropdown. For use when the component is uncontrolled. */
  initialPageLength?: number;
  /** The link used for the "next page" button */
  nextUrl?: string;
  /** A callback for when the user clicks the prev/next buttons or changes the selected option for how many items are shown per page */
  onChange?: (newPage: number, newPageLength: number) => void;
  /** The link used for the "previous page" button */
  prevUrl?: string;
  /** Whether to show the menu to set how many items are shown per page */
  showPageLengthMenu?: boolean;
  /** The total number of items on all pages */
  totalItems?: number;
  /** The total number of pages */
  totalPages?: number;
}

const DEFAULT_PAGE_LENGTHS = [10, 30, 50, 100];
const LARGE_PAGE_LENGTHS = [10, 30, 50, 100, 200];
export const INITIAL_PAGE_LENGTH = DEFAULT_PAGE_LENGTHS[1];
const LARGE_PAGE_LENGTH_THRESHOLD = 500;
const DEFAULT_ITEMS_LABEL = "Items";

export const getItemCountString = (
  activePage: number,
  itemsLabel: string,
  pageLength: number,
  totalItems?: number
) => {
  const startItemIndex = (activePage - 1) * pageLength + 1;
  const endItemIndex = totalItems
    ? Math.min(activePage * pageLength, totalItems)
    : activePage * pageLength;
  const itemRange = `${startItemIndex}–${endItemIndex}`;
  const totalItemsLabel = totalItems ? `${totalItems} ${itemsLabel}` : "";

  if (!totalItemsLabel) {
    return itemRange;
  }

  return `${itemRange} of ${totalItemsLabel}`;
};

const getItemCountClassName = (showPageLengthMenu?: boolean) => {
  if (showPageLengthMenu) {
    return cx(border("horiz"), padding("horiz"), margin("horiz"));
  }

  return cx(border("right"), padding("right"), margin("right"));
};

const NavButton = ({
  direction,
  disabled,
  url,
  ...other
}: Partial<React.ButtonHTMLAttributes<HTMLButtonElement>> &
  Partial<ExpandedLinkProps> & { direction: "prev" | "next" }) => {
  const ariaLabel = direction === "prev" ? "previous page" : "next page";

  const Component = url ? ResetLink : ResetButton;

  return (
    <Component
      data-cy={ariaLabel}
      aria-label={ariaLabel}
      disabled={!url && disabled}
      {...(url && !disabled ? { url } : {})}
      {...(disabled ? { ["aria-disabled"]: "true" } : {})}
      {...other}
    >
      <Icon
        shape={
          direction === "prev" ? SystemIcons.CaretLeft : SystemIcons.CaretRight
        }
        color={disabled ? themeBgDisabled : "inherit"}
      />
    </Component>
  );
};

const Pagination = ({
  activePage: activePageProp,
  initialActivePage = 1,
  itemsLabel = DEFAULT_ITEMS_LABEL,
  pageLength: pageLengthProp,
  initialPageLength = INITIAL_PAGE_LENGTH,
  nextUrl,
  onChange,
  prevUrl,
  showPageLengthMenu,
  totalItems,
  totalPages: totalPagesProp
}: PaginationProps) => {
  const [pageLengthMenuId] = useId(1, "pageLengthMenu");
  const [activePageState, setActivePageState] =
    React.useState<number>(initialActivePage);
  const [pageInputVal, setPageInputVal] =
    React.useState<number>(initialActivePage);
  const [pageLengthState, setPageLengthState] =
    React.useState<number>(initialPageLength);

  const activePage = activePageProp || activePageState;
  const pageLength = pageLengthProp || pageLengthState;
  const isTotalPagesCalculable = Boolean(totalItems && pageLength);
  const calculatedTotalPages =
    isTotalPagesCalculable && totalItems
      ? Math.ceil(totalItems / pageLength)
      : undefined;
  const totalPages =
    !totalPagesProp && isTotalPagesCalculable
      ? calculatedTotalPages
      : totalPagesProp;
  const pageLengthOptions = (
    totalItems && totalItems >= LARGE_PAGE_LENGTH_THRESHOLD
      ? LARGE_PAGE_LENGTHS
      : DEFAULT_PAGE_LENGTHS
  ).map(option => {
    return {
      label: option.toString(),
      value: option.toString()
    };
  });

  if (calculatedTotalPages && totalPages !== calculatedTotalPages) {
    console.warn(
      `The 'totalPages' prop is set to ${totalPagesProp}, but this doesn't add up with these props: \n totalItems: ${totalItems} \n pageLength: ${pageLength} \n\n the expected 'totalPages' value is ${calculatedTotalPages}`
    );
  }

  const onPageChange = (newPage: number) => {
    if (!activePageProp) {
      setActivePageState(newPage);
    }

    if (onChange) {
      onChange(newPage, pageLength);
    }
  };
  const handlePageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPageInputVal(parseInt(e.currentTarget.value, 10));
  };
  const handlePageLengthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newPageLength = parseInt(e.currentTarget.value, 10);
    if (!pageLengthProp) {
      setPageLengthState(newPageLength);
      setActivePageState(1);
    }

    if (onChange) {
      onChange(activePage, newPageLength);
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onPageChange(pageInputVal);
  };
  const handlePrevClick = () => {
    onPageChange(activePage - 1);
  };
  const handleNextClick = () => {
    onPageChange(activePage + 1);
  };

  React.useEffect(() => {
    setPageInputVal(activePage);
  }, [activePage, pageLength]);

  return (
    <Flex align="center">
      {showPageLengthMenu && (
        <Flex align="center" gutterSize="xs">
          <FlexItem flex="shrink">
            <span aria-hidden="true" tabIndex={-1}>
              {itemsLabel} per page
            </span>
          </FlexItem>
          <FlexItem flex="shrink">
            <SelectInput
              showInputLabel={false}
              id={pageLengthMenuId}
              inputLabel={`${itemsLabel} per page`}
              onChange={handlePageLengthChange}
              options={pageLengthOptions}
              value={pageLength}
            />
          </FlexItem>
        </Flex>
      )}
      <div className={getItemCountClassName(showPageLengthMenu)}>
        {getItemCountString(activePage, itemsLabel, pageLength, totalItems)}
      </div>
      <Flex align="center" gutterSize="s">
        <FlexItem flex="shrink">
          <NavButton
            direction="prev"
            url={prevUrl}
            onClick={handlePrevClick}
            disabled={activePage === 1}
          />
        </FlexItem>
        <FlexItem flex="shrink">
          <form
            onSubmit={handleSubmit}
            className={cx(display("inline-block"), {
              [defaultInputWidth]: !totalPages
            })}
            aria-label="form"
          >
            <TextInput
              type="number"
              label="Page number"
              showInputLabel={false}
              value={pageInputVal}
              onChange={handlePageInputChange}
              min={1}
              max={totalPages}
            />
          </form>
          {Boolean(totalPages) && ` / ${totalPages}`}
        </FlexItem>
        <FlexItem flex="shrink">
          <NavButton
            direction="next"
            url={nextUrl}
            onClick={handleNextClick}
            disabled={Boolean(totalPages && activePage === totalPages)}
          />
        </FlexItem>
      </Flex>
    </Flex>
  );
};

export default Pagination;
