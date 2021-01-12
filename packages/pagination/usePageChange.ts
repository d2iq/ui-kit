import * as React from "react";
import { INITIAL_PAGE_LENGTH } from "./Pagination";

const usePageChange = (): {
  activePage: number;
  itemEndIndex: number;
  itemStartIndex: number;
  pageLength: number;
  onChange: (newPage: number, newPageLength: number) => void;
} => {
  const [activePage, setActivePage] = React.useState<number>(1);
  const [pageLength, setPageLength] = React.useState<number>(
    INITIAL_PAGE_LENGTH
  );

  const onChange = (newPage, newPageLength) => {
    setActivePage(newPage);
    setPageLength(newPageLength);

    if (pageLength !== newPageLength) {
      setActivePage(1);
    }
  };

  const itemStartIndex = (activePage - 1) * pageLength;
  const itemEndIndex = itemStartIndex + pageLength - 1;

  return {
    activePage,
    itemEndIndex,
    itemStartIndex,
    pageLength,
    onChange
  };
};

export default usePageChange;
