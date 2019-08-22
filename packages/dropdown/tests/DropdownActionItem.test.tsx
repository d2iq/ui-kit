import React from "react";
import { mount } from "enzyme";
import * as emotion from "emotion";
import { createSerializer } from "jest-emotion";
import toJson from "enzyme-to-json";
import { DropdownItemAppearances } from "../../shared/types/dropdownItemAppearances";

import { DropdownActionItem } from "../";

expect.addSnapshotSerializer(createSerializer(emotion));

describe("Dropdown", () => {
  it("default", () => {
    const component = mount(
      <DropdownActionItem key="edit" value="edit">
        Edit
      </DropdownActionItem>
    );

    expect(toJson(component)).toMatchSnapshot();
  });
  it("default", () => {
    Object.keys(DropdownItemAppearances).forEach(appearance => {
      const component = mount(
        <DropdownActionItem
          key="edit"
          value="edit"
          appearance={DropdownItemAppearances[appearance]}
        >
          Edit
        </DropdownActionItem>
      );

      expect(toJson(component)).toMatchSnapshot();
    });
  });
});
