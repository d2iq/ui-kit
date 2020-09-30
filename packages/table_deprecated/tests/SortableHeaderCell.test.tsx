import React from "react";

import { SortableHeaderCell } from "../";
import * as emotion from "emotion";
import { createSerializer } from "jest-emotion";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import HeaderCell from "../components/HeaderCell";

expect.addSnapshotSerializer(createSerializer(emotion));

describe("SortableHeaderCell", () => {
  it("renders default", () => {
    const sortFn = jest.fn();
    const wrapper = shallow(
      <SortableHeaderCell
        sortHandler={sortFn}
        sortDirection="DESC"
        columnContent="column content"
      />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("updates toggles state.hovered on hover", () => {
    const sortFn = jest.fn();
    const wrapper = shallow(
      <SortableHeaderCell
        sortHandler={sortFn}
        sortDirection="DESC"
        columnContent="column content"
      />
    );

    expect(wrapper.state("hovered")).toBe(false);

    wrapper.find(HeaderCell).simulate("mouseenter");
    expect(wrapper.state("hovered")).toBe(true);

    wrapper.find(HeaderCell).simulate("mouseleave");
    expect(wrapper.state("hovered")).toBe(false);
  });
});
