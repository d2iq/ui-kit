import React from "react";
import { mount } from "enzyme";
import serializer from "jest-emotion";
import toJson from "enzyme-to-json";
import { Dropdown } from "../Dropdown";
import { MockDropdownList } from "./fixtures/MockDropdownList";

expect.addSnapshotSerializer(serializer);

describe("Dropdown", () => {
  it("should display a dropdown menu when the button is clicked", () => {
    // Click on the dropdown button to open the menu
    const component = mount(
      <Dropdown
        buttonClassName="button dropdown-toggle"
        dropdownMenuClassName="dropdown-menu"
        dropdownMenuListClassName="dropdown-menu-list"
        items={MockDropdownList}
        initialID="bar"
        transition={false}
        wrapperClassName="dropdown"
      />
    );
    const button = component.find("button");
    button.simulate("click");

    expect(toJson(component)).toMatchSnapshot(); // rm this
    expect(component.find(".dropdown-menu").length).toEqual(1);
  });

  it("should remove the dropdown menu when it loses focus", () => {
    const component = mount(
      <Dropdown
        buttonClassName="button dropdown-toggle"
        dropdownMenuClassName="dropdown-menu"
        dropdownMenuListClassName="dropdown-menu-list"
        items={MockDropdownList}
        initialID="bar"
        transition={false}
        wrapperClassName="dropdown"
      />
    );
    const button = component.find("button");
    const eventMap = {
      focus: () => undefined
    };

    document.addEventListener = jest.fn((event, cb) => {
      eventMap[event] = cb;
    });

    button.simulate("click");

    expect(component.state("isOpen")).toBe(true);
    eventMap.focus();
    // wait for timeout from handleWrapperBlur
    setTimeout(() => {
      expect(component.state("isOpen")).toBe(false);
    }, 200);
  });

  it("should call the callback when selecting a selectable item", () => {
    const itemSelectionCallback = jest.fn();
    const component = mount(
      <Dropdown
        buttonClassName="button dropdown-toggle"
        dropdownMenuClassName="dropdown-menu"
        dropdownMenuListClassName="dropdown-menu-list"
        items={MockDropdownList}
        initialID="bar"
        onItemSelection={itemSelectionCallback}
        transition={false}
        wrapperClassName="dropdown"
      />
    );

    const button = component.find("button");
    button.simulate("click");

    const selectableElements = component.find(".dropdown-menu .is-selectable");

    expect(itemSelectionCallback).not.toHaveBeenCalled();
    selectableElements.first().simulate("click");
    expect(itemSelectionCallback).toHaveBeenCalled();
  });

  it("renders an open menu", () => {
    const component = mount(
      <Dropdown
        buttonClassName="button dropdown-toggle"
        dropdownMenuClassName="dropdown-menu"
        dropdownMenuListClassName="dropdown-menu-list"
        items={MockDropdownList}
        initialID="bar"
        transition={false}
        wrapperClassName="dropdown"
      />
    );

    const button = component.find("button");
    button.simulate("click");

    expect(toJson(component)).toMatchSnapshot();
  });

  it("renders trigger button with a persistentId", () => {
    const component = mount(
      <Dropdown
        buttonClassName="button dropdown-toggle"
        dropdownMenuClassName="dropdown-menu"
        dropdownMenuListClassName="dropdown-menu-list"
        items={MockDropdownList}
        initialID="bar"
        transition={false}
        wrapperClassName="dropdown"
        persistentID="quz"
      />
    );

    expect(toJson(component)).toMatchSnapshot();
  });

  it("renders disabled", () => {
    const component = mount(
      <Dropdown
        buttonClassName="button dropdown-toggle"
        dropdownMenuClassName="dropdown-menu"
        dropdownMenuListClassName="dropdown-menu-list"
        items={MockDropdownList}
        initialID="bar"
        transition={false}
        wrapperClassName="dropdown"
        disabled={true}
      />
    );

    expect(toJson(component)).toMatchSnapshot();
  });

  describe("#getSelectedID", function() {
    it("should return initialID", function() {
      const component = mount(
        <Dropdown
          buttonClassName="button dropdown-toggle"
          dropdownMenuClassName="dropdown-menu"
          dropdownMenuListClassName="dropdown-menu-list"
          items={MockDropdownList}
          initialID="bar"
          transition={false}
          wrapperClassName="dropdown"
        />
      );
      const instance = component.instance() as Dropdown;

      expect(instance.getSelectedID()).toEqual("bar");
    });

    it("should return persistentID over initialID", function() {
      const component = mount(
        <Dropdown
          buttonClassName="button dropdown-toggle"
          dropdownMenuClassName="dropdown-menu"
          dropdownMenuListClassName="dropdown-menu-list"
          items={MockDropdownList}
          initialID="foo"
          persistentID="bar"
          transition={false}
          wrapperClassName="dropdown"
        />
      );
      const instance = component.instance() as Dropdown;

      expect(instance.getSelectedID()).toEqual("bar");
    });

    it("should return persistentID over initialID after update", () => {
      let component = mount(
        <Dropdown
          buttonClassName="button dropdown-toggle"
          dropdownMenuClassName="dropdown-menu"
          dropdownMenuListClassName="dropdown-menu-list"
          items={MockDropdownList}
          persistentID="quz"
          initialID="foo"
          transition={false}
          wrapperClassName="dropdown"
        />
      );
      component = mount(
        <Dropdown
          buttonClassName="button dropdown-toggle"
          dropdownMenuClassName="dropdown-menu"
          dropdownMenuListClassName="dropdown-menu-list"
          items={MockDropdownList}
          persistentID="foo"
          initialID="foo"
          transition={false}
          wrapperClassName="dropdown"
        />
      );
      const instance = component.instance() as Dropdown;

      expect(instance.getSelectedID()).toEqual("foo");
    });
  });

  describe("#getSelectedItem", () => {
    it("returns item for initialID", () => {
      const component = mount(
        <Dropdown
          buttonClassName="button dropdown-toggle"
          dropdownMenuClassName="dropdown-menu"
          dropdownMenuListClassName="dropdown-menu-list"
          items={MockDropdownList}
          initialID="bar"
          transition={false}
          wrapperClassName="dropdown"
        />
      );
      const instance = component.instance() as Dropdown;

      expect(instance.getSelectedItem()).toEqual(MockDropdownList[1]);
    });
    it("returns undefined if nothing is given", () => {
      const component = mount(
        <Dropdown
          buttonClassName="button dropdown-toggle"
          dropdownMenuClassName="dropdown-menu"
          dropdownMenuListClassName="dropdown-menu-list"
          items={MockDropdownList}
          transition={false}
          wrapperClassName="dropdown"
        />
      );
      const instance = component.instance() as Dropdown;

      expect(instance.getSelectedItem()).toEqual(undefined);
    });
  });
});
