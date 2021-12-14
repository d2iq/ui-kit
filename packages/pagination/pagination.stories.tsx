import * as React from "react";
import * as faker from "faker";
import { Story, Meta } from "@storybook/react";
import Pagination, { PaginationProps } from "./Pagination";
import PaginationContainer from "./PaginationContainer";
import { BorderedList } from "../list";
import usePageChange from "./usePageChange";

const initialData = Array.from(
  { length: 200 },
  () => faker.helpers.createCard().username
);

export default {
  title: "Navigation/Pagination",
  component: Pagination
} as Meta;

const Template: Story<PaginationProps> = args => (
  <PaginationContainer>
    <Pagination totalItems={200} {...args} />
  </PaginationContainer>
);

export const Default = Template.bind({});

export const ExampleWPagedListControlledComponent = args => {
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
      {({ activePage, itemEndIndex, itemStartIndex, pageLength, onChange }) => (
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
};

export const StartOnPageBeyond1 = Template.bind({});
Default.args = { initialActivePage: 3, totalItems: 200 };

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
