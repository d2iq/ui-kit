import React from "react";
import { shallow, mount } from "enzyme";
import * as emotion from "emotion";
import { createSerializer } from "jest-emotion";
import toJson from "enzyme-to-json";
import { Table, SortBy } from "../Table";
import MockTable from "./fixtures/MockTable";

expect.addSnapshotSerializer(createSerializer(emotion));

describe("Table", () => {
  it("renders", () => {
    const onSortCallback = jest.fn();
    const sortBy: SortBy = {
      prop: "name",
      order: "desc"
    };

    const component = shallow(
      <Table
        className="table"
        columns={MockTable.columns}
        data={MockTable.rows}
        sortBy={sortBy}
        onSortCallback={onSortCallback}
      />
    );

    expect(toJson(component)).toMatchSnapshot();
  });

  it("renders with an empty message", () => {
    const onSortCallback = jest.fn();
    const sortBy: SortBy = {
      prop: "name",
      order: "desc"
    };

    const component = shallow(
      <Table
        className="table"
        columns={MockTable.columns}
        data={MockTable.rows}
        sortBy={sortBy}
        onSortCallback={onSortCallback}
        emptyMessage="nothing to see here"
      />
    );

    expect(toJson(component)).toMatchSnapshot();
  });

  it("should call the callback when the data is sorted", () => {
    const onSortCallback = jest.fn();
    const sortBy: SortBy = {
      prop: "name",
      order: "desc"
    };

    const component = shallow(
      <Table
        className="table"
        columns={MockTable.columns}
        data={MockTable.rows}
        sortBy={sortBy}
        onSortCallback={onSortCallback}
      />
    );

    component
      .find("th")
      .first()
      .simulate("click");
    expect(onSortCallback).toHaveBeenCalled();
  });

  describe("initial sorting", () => {
    it("should sort the data descending on initial mount", () => {
      const component = mount(
        <Table
          className="table"
          columns={MockTable.columns}
          data={MockTable.rows}
          itemHeight={20}
          sortBy={{ prop: "name", order: "desc" }}
        />
      );
      const tableRows = component.find("tr");

      expect(tableRows.get(2).props.children[0].props.children).toEqual("Zach");
      expect(tableRows.get(6).props.children[0].props.children).toEqual(
        "Francis"
      );
    });

    it("should sort the data ascending on initial mount", () => {
      const component = mount(
        <Table
          className="table"
          columns={MockTable.columns}
          data={MockTable.rows}
          itemHeight={20}
          sortBy={{ prop: "name", order: "asc" }}
        />
      );

      const tableRows = component.find("tr");

      expect(tableRows.get(2).props.children[0].props.children).toEqual(
        "Francis"
      );
      expect(tableRows.get(6).props.children[0].props.children).toEqual("Zach");
    });
  });
});
