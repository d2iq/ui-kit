import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createSerializer } from "@emotion/jest";

import Pagination, { getItemCountString } from "./Pagination";
import PaginationContainer from "./PaginationContainer";

expect.addSnapshotSerializer(createSerializer());

describe("Pagination", () => {
  describe("rendering", () => {
    it("renders default", () => {
      const { asFragment } = render(
        <Pagination initialActivePage={4} initialPageLength={20} />
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it("renders wrapped in a PaginationContainer", () => {
      const { asFragment } = render(
        <PaginationContainer vertAlignChildren="flex-end">
          <Pagination initialActivePage={4} initialPageLength={20} />
        </PaginationContainer>
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it("renders w/ custom item label", () => {
      const { asFragment } = render(
        <Pagination
          itemsLabel="things"
          initialActivePage={4}
          initialPageLength={20}
        />
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it("renders w/ totalItems set", () => {
      const { asFragment } = render(
        <Pagination
          totalItems={200}
          initialActivePage={4}
          initialPageLength={20}
        />
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it("renders w/ totalPages, pageLength, and totalItems set", () => {
      const { asFragment } = render(
        <Pagination
          totalPages={20}
          pageLength={10}
          totalItems={200}
          initialActivePage={4}
          initialPageLength={20}
        />
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it("renders prev and next buttons as links", () => {
      const { asFragment } = render(
        <Pagination
          prevUrl="prev"
          nextUrl="next"
          initialActivePage={4}
          initialPageLength={20}
        />
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it("renders w/ page length menu", () => {
      const { asFragment } = render(
        <Pagination
          showPageLengthMenu={true}
          initialPageLength={100}
          initialActivePage={4}
        />
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("getItemCountString", () => {
    it("returns {start}-{end} of {total} if all params are passed", () => {
      expect(getItemCountString(2, "items", 20, 60)).toEqual(
        "21–40 of 60 items"
      );
    });

    it("returns {start}-{end} if totalItems param isn't passed", () => {
      expect(getItemCountString(2, "items", 20)).toEqual("21–40");
    });
  });

  describe("page navigation functionality", () => {
    it("increments number input value when 'next' button is clicked", async () => {
      const { getByTestId } = render(
        <Pagination
          showPageLengthMenu={true}
          initialPageLength={100}
          initialActivePage={4}
        />
      );

      const inputElement = getByTestId("textInput-input") as HTMLInputElement;
      expect(inputElement.value).toEqual("4");

      const nextButton = getByTestId("next page") as HTMLButtonElement;
      nextButton.click();

      await waitFor(() => expect(inputElement.value).toEqual("5"));
    });

    it("decrements number input value when 'prev' button is clicked", async () => {
      const { getByTestId } = render(<Pagination initialActivePage={4} />);

      const inputElement = getByTestId("textInput-input") as HTMLInputElement;
      expect(inputElement.value).toEqual("4");

      const previousButton = getByTestId("previous page") as HTMLButtonElement;
      previousButton.click();

      await waitFor(() => expect(inputElement.value).toEqual("3"));
    });

    it("disables the next button when the user is on the last page", () => {
      const { getByTestId } = render(
        <Pagination initialActivePage={5} totalPages={5} />
      );

      const nextButton = getByTestId("next page") as HTMLButtonElement;
      expect(nextButton.disabled).toEqual(true);
    });

    it("disables the prev button when the user is on the first page", () => {
      const { getByTestId } = render(<Pagination initialActivePage={1} />);

      const previousButton = getByTestId("previous page") as HTMLButtonElement;
      expect(previousButton.disabled).toEqual(true);
    });

    it("calls onChange prop when page length menu is changed", async () => {
      const onChange = jest.fn();
      const { getByRole, getByLabelText } = render(
        <Pagination
          showPageLengthMenu={true}
          initialActivePage={4}
          onChange={onChange}
        />
      );

      expect(onChange).not.toHaveBeenCalled();
      await userEvent.selectOptions(
        getByLabelText("Items per page"),
        getByRole("option", { name: "30" })
      );
      expect(onChange).toHaveBeenCalledWith(4, 30);
    });

    it("calls onChange prop when page text input is changed and submitted", () => {
      const onChange = jest.fn();
      const { getByRole } = render(
        <Pagination
          showPageLengthMenu={true}
          initialActivePage={4}
          onChange={onChange}
        />
      );

      const formElement = getByRole("form");
      fireEvent.submit(formElement);

      expect(onChange).toHaveBeenCalledWith(4, 30);
    });
  });
});
