import * as React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Pagination, { PaginationProps } from "./Pagination";
import PaginationContainer from "./PaginationContainer";
import { BorderedList } from "../list";
import usePageChange from "./usePageChange";
import { mockPaginationData as initialData } from "./mockPaginationData.json";

type ControlledPaginationWrapperProps = {
  children: (renderProps: {
    activePage: number;
    pageLength: number;
    itemEndIndex: number;
    itemStartIndex: number;
    onChange: (newPage, newPageLength) => void;
  }) => React.ReactElement;
};

export default {
  title: "Navigation/Pagination",
  component: Pagination
} as Meta;

const Template: StoryFn<PaginationProps> = args => (
  <PaginationContainer>
    <Pagination totalItems={200} {...args} />
  </PaginationContainer>
);

export const Default = {
  render: Template
};

export const ExampleWPagedListControlledComponent = {
  render: args => {
    const ControlledPaginationWrapper = ({
      children
    }: ControlledPaginationWrapperProps) => {
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
                <li key={name}>{name}</li>
              ))}
            </BorderedList>
            <PaginationContainer>
              <Pagination
                activePage={activePage}
                onChange={onChange}
                pageLength={pageLength}
                showPageLengthMenu={true}
                totalItems={200}
                {...args}
              />
            </PaginationContainer>
          </>
        )}
      </ControlledPaginationWrapper>
    );
  }
};

export const StartOnPageBeyond1 = {
  render: Template,
  args: { initialActivePage: 3 }
};

export const PreviousAndNextButtonsAsLinks = () => (
  <PaginationContainer>
    <Pagination
      prevUrl="#page-1"
      nextUrl="#page-3"
      initialActivePage={2}
      totalItems={200}
    />
  </PaginationContainer>
);

export const WithMenuForItemsPerPage = () => (
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
);

export const CustomItemLabel = () => (
  <PaginationContainer>
    <Pagination itemsLabel="clusters" totalItems={200} />
  </PaginationContainer>
);

export const SiblingElementsInPaginationContainer = () => (
  <PaginationContainer>
    <div>I'm another child of PaginationContainer</div>
    <Pagination totalItems={200} />
  </PaginationContainer>
);

export const OnlyTotalPagesSet = () => (
  <PaginationContainer>
    <Pagination totalPages={5} />
  </PaginationContainer>
);

export const WithoutTotalItemsSet = () => (
  <PaginationContainer>
    <Pagination />
  </PaginationContainer>
);

export const WithoutPaginationContainer = () => <Pagination totalItems={200} />;
