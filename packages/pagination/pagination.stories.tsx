import * as React from "react";
import * as faker from "faker";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import Pagination from "./Pagination";
import PaginationContainer from "./PaginationContainer";
import { BorderedList } from "../list";
import usePageChange from "./usePageChange";

const readme = require("./README.md");

const initialData = Array.from(
  { length: 200 },
  () => faker.helpers.createCard().username
);

storiesOf("Navigation|Pagination", module)
  .addDecorator(withReadme([readme]))
  .add("default", () => (
    <PaginationContainer>
      <Pagination totalItems={200} />
    </PaginationContainer>
  ))
  .add("example w/ paged list (controlled component)", () => {
    const ControlledPaginationWrapper: React.FC<{
      children: (renderProps: {
        activePage: number;
        pageLength: number;
        itemEndIndex: number;
        itemStartIndex: number;
        onChange: (newPage, newPageLength) => void;
      }) => React.ReactElement;
    }> = ({ children }) => {
      return children(usePageChange());
    };
    return (
      <ControlledPaginationWrapper>
        {({
          activePage,
          itemEndIndex,
          itemStartIndex,
          pageLength,
          onChange
        }) => (
          <>
            <BorderedList tag="ul">
              {initialData.slice(itemStartIndex, itemEndIndex).map(name => (
                <li>{name}</li>
              ))}
            </BorderedList>
            <PaginationContainer>
              <Pagination
                activePage={activePage}
                onChange={onChange}
                pageLength={pageLength}
                showPageLengthMenu={true}
                totalItems={200}
              />
            </PaginationContainer>
          </>
        )}
      </ControlledPaginationWrapper>
    );
  })
  .add("start on a page > 1", () => (
    <PaginationContainer>
      <Pagination initialActivePage={3} totalItems={200} />
    </PaginationContainer>
  ))
  .add("prev and next buttons as links", () => (
    <PaginationContainer>
      <Pagination
        prevUrl="#page-1"
        nextUrl="#page-3"
        initialActivePage={2}
        totalItems={200}
      />
    </PaginationContainer>
  ))
  .add("w/ a menu for items per page", () => (
    <>
      <PaginationContainer>
        <div>With default page length menu opts</div>
        <Pagination showPageLengthMenu={true} totalItems={200} />
      </PaginationContainer>
      <br />
      <PaginationContainer>
        <div>With large page length menu opts</div>
        <Pagination showPageLengthMenu={true} totalItems={500} />
      </PaginationContainer>
    </>
  ))
  .add("w/ custom item label", () => (
    <PaginationContainer>
      <Pagination itemsLabel="clusters" totalItems={200} />
    </PaginationContainer>
  ))
  .add("w/ sibling elements in PaginationContainer", () => (
    <PaginationContainer>
      <div>I'm another child of PaginationContainer</div>
      <Pagination totalItems={200} />
    </PaginationContainer>
  ))
  .add("only totalPages set", () => (
    <PaginationContainer>
      <Pagination totalPages={5} />
    </PaginationContainer>
  ))
  .add("w/o totalItems set", () => (
    <PaginationContainer>
      <Pagination />
    </PaginationContainer>
  ))
  .add("w/o PaginationContainer", () => <Pagination totalItems={200} />);
