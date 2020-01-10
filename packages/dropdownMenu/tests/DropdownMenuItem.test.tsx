import React from "react";
import { mount } from "enzyme";
import * as emotion from "emotion";
import { createSerializer } from "jest-emotion";
import toJson from "enzyme-to-json";
import { PopoverListItemAppearances } from "../../shared/types/popoverListItemAppearances";

import { DropdownMenuItem } from "..";

expect.addSnapshotSerializer(createSerializer(emotion));

describe("Dropdown", () => {
  it("default", () => {
    const component = mount(
      <DropdownMenuItem key="edit" value="edit">
        Edit
      </DropdownMenuItem>
    );

    expect(toJson(component)).toMatchSnapshot();
  });
  it("default", () => {
    Object.keys(PopoverListItemAppearances).forEach(appearance => {
      const component = mount(
        <DropdownMenuItem
          key="edit"
          value="edit"
          appearance={PopoverListItemAppearances[appearance]}
        >
          Edit
        </DropdownMenuItem>
      );

      expect(toJson(component)).toMatchSnapshot();
    });
  });
});
