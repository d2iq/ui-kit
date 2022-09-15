import React from "react";
import { create } from "react-test-renderer";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";

import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemContent,
  AccordionItemTitleInteractive
} from "./";
import { getById } from "../../testHelper/test.utilities";

describe("Accordion", () => {
  describe("rendering", () => {
    it("renders with no expanded items", () => {
      const component = create(
        <Accordion>
          <AccordionItem id="customId">
            <AccordionItemTitle appearance="danger">Panel 1</AccordionItemTitle>
            <AccordionItemContent>Content 1</AccordionItemContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle disabled={true}>Panel 2</AccordionItemTitle>
            <AccordionItemContent>Content 2</AccordionItemContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle headingLevel={2}>Panel 3</AccordionItemTitle>
            <AccordionItemContent>Content 3</AccordionItemContent>
          </AccordionItem>
        </Accordion>
      );

      expect(component.toJSON()).toMatchSnapshot();
    });
    it("renders an item with interactive content", () => {
      const component = create(
        <Accordion>
          <AccordionItem id="customId">
            <AccordionItemTitleInteractive appearance="danger">
              {({ getHeading }) => (
                <>
                  {getHeading("Panel 1")}
                  <button id="interaction">test</button>
                </>
              )}
            </AccordionItemTitleInteractive>
            <AccordionItemContent>Content 1</AccordionItemContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitleInteractive appearance="danger">
              {({ headingId, toggleButtonProps }) => (
                <>
                  <h3 id={headingId}>Panel 1</h3>
                  <button id="interaction">test</button>
                  <button id="toggle" {...toggleButtonProps}>
                    toggle
                  </button>
                </>
              )}
            </AccordionItemTitleInteractive>
            <AccordionItemContent>Content 2</AccordionItemContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitleInteractive disabled={true}>
              {({ getHeading }) => (
                <>
                  {getHeading("Panel 1")}
                  <button id="interaction">test</button>
                </>
              )}
            </AccordionItemTitleInteractive>
            <AccordionItemContent>Content 1</AccordionItemContent>
          </AccordionItem>
        </Accordion>
      );

      expect(component.toJSON()).toMatchSnapshot();
    });
    it("renders with expanded items", () => {
      const component = create(
        <Accordion initialExpandedItems={["panel1", "panel2", "panel3"]}>
          <AccordionItem id="panel1">
            <AccordionItemTitle>Panel 1</AccordionItemTitle>
            <AccordionItemContent>Content 1</AccordionItemContent>
          </AccordionItem>
          <AccordionItem id="panel2">
            <AccordionItemTitle>Panel 2</AccordionItemTitle>
            <AccordionItemContent>Content 2</AccordionItemContent>
          </AccordionItem>
          <AccordionItem id="panel3">
            <AccordionItemTitle>Panel 3</AccordionItemTitle>
            <AccordionItemContent>Content 3</AccordionItemContent>
          </AccordionItem>
        </Accordion>
      );

      expect(component.toJSON()).toMatchSnapshot();
    });
  });

  describe("interaction", () => {
    it("expands and collapses accordion items", async () => {
      const user = userEvent.setup();

      const { getByText } = render(
        <Accordion>
          <AccordionItem id="panel1">
            <AccordionItemTitle>Panel 1</AccordionItemTitle>
            <AccordionItemContent>Content 1</AccordionItemContent>
          </AccordionItem>
          <AccordionItem id="panel2">
            <AccordionItemTitle>Panel 2</AccordionItemTitle>
            <AccordionItemContent>Content 2</AccordionItemContent>
          </AccordionItem>
          <AccordionItem id="panel3">
            <AccordionItemTitle>Panel 3</AccordionItemTitle>
            <AccordionItemContent>Content 3</AccordionItemContent>
          </AccordionItem>
        </Accordion>
      );

      expect(getByText("Content 2")).toBeInTheDocument();
      expect(getByText("Content 2")).not.toBeVisible();
      await user.click(getByText("Panel 1"));

      expect(getByText("Content 1")).toBeVisible();

      expect(getByText("Content 2")).not.toBeVisible();
      await user.click(getByText("Panel 2"));
      expect(getByText("Content 1")).not.toBeVisible();
      expect(getByText("Content 2")).toBeVisible();
    });
    it("does not expand or collapses accordion items with a disabled title", async () => {
      const user = userEvent.setup();

      const { container, getByText } = render(
        <Accordion>
          <AccordionItem id="disabled">
            <AccordionItemTitle disabled={true}>Panel 1</AccordionItemTitle>
            <AccordionItemContent>Content 1</AccordionItemContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>Panel 2</AccordionItemTitle>
            <AccordionItemContent>Content 2</AccordionItemContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>Panel 3</AccordionItemTitle>
            <AccordionItemContent>Content 3</AccordionItemContent>
          </AccordionItem>
        </Accordion>
      );
      const element = getById(container, "disabled-content");
      expect(element).toBeInTheDocument();
      expect(getByText("Content 1")).not.toBeVisible();

      await user.click(getByText("Panel 1"));
      expect(getByText("Content 1")).not.toBeVisible();
    });

    it("expands and collapses accordion items - allowMultipleExpanded", async () => {
      const user = userEvent.setup();

      const { getByText } = render(
        <Accordion allowMultipleExpanded={true}>
          <AccordionItem id="panel1">
            <AccordionItemTitle>Panel 1</AccordionItemTitle>
            <AccordionItemContent>Content 1</AccordionItemContent>
          </AccordionItem>
          <AccordionItem id="panel2">
            <AccordionItemTitle>Panel 2</AccordionItemTitle>
            <AccordionItemContent>Content 2</AccordionItemContent>
          </AccordionItem>
          <AccordionItem id="panel3">
            <AccordionItemTitle>Panel 3</AccordionItemTitle>
            <AccordionItemContent>Content 3</AccordionItemContent>
          </AccordionItem>
        </Accordion>
      );

      expect(getByText("Content 1")).not.toBeVisible();
      await user.click(getByText("Panel 1"));
      expect(getByText("Content 1")).toBeVisible();

      expect(getByText("Content 2")).not.toBeVisible();
      await user.click(getByText("Panel 2"));
      expect(getByText("Content 2")).toBeVisible();
    });

    it("allows interactive title children without expanding or collapsing the item", async () => {
      const user = userEvent.setup();

      const { getByText } = render(
        <Accordion>
          <AccordionItem id="panel1">
            <AccordionItemTitleInteractive appearance="danger">
              {({ getHeading }) => (
                <>
                  {getHeading("Panel 1")}
                  <button id="interaction">test</button>
                </>
              )}
            </AccordionItemTitleInteractive>
            <AccordionItemContent>Content 1</AccordionItemContent>
          </AccordionItem>
          <AccordionItem id="panel2">
            <AccordionItemTitle>Panel 2</AccordionItemTitle>
            <AccordionItemContent>Content 2</AccordionItemContent>
          </AccordionItem>
          <AccordionItem id="panel3">
            <AccordionItemTitle>Panel 3</AccordionItemTitle>
            <AccordionItemContent>Content 3</AccordionItemContent>
          </AccordionItem>
        </Accordion>
      );

      expect(getByText("Content 1")).not.toBeVisible();
      expect(getByText("Panel 1")).toBeInTheDocument();
      await user.click(getByText("test"));
      expect(getByText("Content 1")).not.toBeVisible();
    });

    it("calls onChange with array of expanded item IDs", async () => {
      const user = userEvent.setup();

      const onChange = jest.fn();
      const { getByText } = render(
        <Accordion allowMultipleExpanded={true} onChange={onChange}>
          <AccordionItem id="panel1">
            <AccordionItemTitle>Panel 1</AccordionItemTitle>
            <AccordionItemContent>Content 1</AccordionItemContent>
          </AccordionItem>
          <AccordionItem id="panel2">
            <AccordionItemTitle>Panel 2</AccordionItemTitle>
            <AccordionItemContent>Content 2</AccordionItemContent>
          </AccordionItem>
          <AccordionItem id="panel3">
            <AccordionItemTitle>Panel 3</AccordionItemTitle>
            <AccordionItemContent>Content 3</AccordionItemContent>
          </AccordionItem>
        </Accordion>
      );

      await user.click(getByText("Panel 1"));
      expect(onChange).toHaveBeenCalledWith(["panel1"]);

      await user.click(getByText("Panel 2"));
      expect(onChange).toHaveBeenCalledWith(["panel1", "panel2"]);
    });
  });
});
