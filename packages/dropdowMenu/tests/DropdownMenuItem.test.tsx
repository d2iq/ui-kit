import React from "react";
import { shallow } from "enzyme";
import * as emotion from "emotion";
import { createSerializer } from "jest-emotion";
import toJson from "enzyme-to-json";
import DropdownMenuItem from "../components/DropdownMenuItem";

expect.addSnapshotSerializer(createSerializer(emotion));

describe("DropdownMenuItem", () => {
  it("renders", () => {
    const component = shallow(
      <DropdownMenuItem index={0} listLength={1}>
        item content content
      </DropdownMenuItem>
    );
    expect(toJson(component)).toMatchSnapshot();
  });
  it("renders disabled", () => {
    const component = shallow(
      <DropdownMenuItem index={0} listLength={1} disabled={true}>
        item content content
      </DropdownMenuItem>
    );
    expect(toJson(component)).toMatchSnapshot();
  });
  it("renders active", () => {
    const component = shallow(
      <DropdownMenuItem index={0} listLength={1} isActive={true}>
        item content content
      </DropdownMenuItem>
    );
    expect(toJson(component)).toMatchSnapshot();
  });
  it("renders selected", () => {
    const component = shallow(
      <DropdownMenuItem index={0} listLength={1} isSelected={true}>
        item content content
      </DropdownMenuItem>
    );
    expect(toJson(component)).toMatchSnapshot();
  });
  it("renders active and selected", () => {
    const component = shallow(
      <DropdownMenuItem
        index={0}
        listLength={1}
        isSelected={true}
        isActive={true}
      >
        item content content
      </DropdownMenuItem>
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
