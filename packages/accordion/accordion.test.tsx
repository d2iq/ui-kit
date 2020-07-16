import React from "react";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";

import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemContent,
  AccordionItemTitleInteractive
} from "./";

describe("Accordion", () => {
  describe("rendering", () => {
    it("renders with no expanded items", () => {
      const component = mount(
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

      expect(toJson(component)).toMatchSnapshot();
    });
    it("renders an item with interactive content", () => {
      const component = mount(
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

      expect(toJson(component)).toMatchSnapshot();
    });
    it("renders with expanded items", () => {
      const component = mount(
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

      expect(toJson(component)).toMatchSnapshot();
    });
  });

  describe("interaction", () => {
    it("expands and collapses accordion items", () => {
      const component = mount(
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

      expect(component.find("#panel1-content").prop("hidden")).toBeTruthy();
      component.find("#panel1-heading button").simulate("click");
      expect(component.find("#panel1-content").prop("hidden")).toBeFalsy();

      expect(component.find("#panel2-content").prop("hidden")).toBeTruthy();
      component.find("#panel2-heading button").simulate("click");
      expect(component.find("#panel1-content").prop("hidden")).toBeTruthy();
      expect(component.find("#panel2-content").prop("hidden")).toBeFalsy();
    });
    it("does not expand or collapses accordion items with a disabled title", () => {
      const component = mount(
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
      expect(component.find("#disabled-content").prop("hidden")).toBeTruthy();
      component.find("#disabled-heading button").simulate("click");
      expect(component.find("#disabled-content").prop("hidden")).toBeTruthy();
    });
    it("expands and collapses accordion items - allowMultipleExpanded", () => {
      const component = mount(
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

      expect(component.find("#panel1-content").prop("hidden")).toBeTruthy();
      component.find("#panel1-heading button").simulate("click");
      expect(component.find("#panel1-content").prop("hidden")).toBeFalsy();

      expect(component.find("#panel2-content").prop("hidden")).toBeTruthy();
      component.find("#panel2-heading button").simulate("click");
      expect(component.find("#panel2-content").prop("hidden")).toBeFalsy();
    });
    it("allows interactive title children without expanding or collapsing the item", () => {
      const component = mount(
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

      expect(component.find("#panel1-content").prop("hidden")).toBeTruthy();
      component.find("#interaction").simulate("click");
      expect(component.find("#panel1-content").prop("hidden")).toBeTruthy();
    });
    it("calls onChange with array of expanded item IDs", () => {
      const onChange = jest.fn();
      const component = mount(
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

      component.find("#panel1-heading button").simulate("click");
      expect(onChange).toHaveBeenCalledWith(["panel1"]);

      component.find("#panel2-heading button").simulate("click");
      expect(onChange).toHaveBeenCalledWith(["panel1", "panel2"]);
    });
  });
});
