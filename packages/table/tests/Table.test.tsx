import React from "react";

import { Table, Column } from "../";
import { fillColumns, clampWidth } from "../components/Table";
import serializer from "jest-emotion";
import { render, shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

expect.addSnapshotSerializer(serializer);

describe("Table", () => {
  const items = [
    {
      name: "Brian Vaughn",
      role: "Software Engineer",
      city: "San Jose",
      state: "CA",
      zipcode: 95125
    },
    {
      name: "Jon Doe",
      role: "Product engineer",
      city: "Mountain View",
      state: "CA",
      zipcode: 95125
    }
  ];

  const nameCellRenderer = ({ name }: { name?: string }) => (
    <strong>{name}</strong>
  );
  const cityCellRenderer = ({ city }: { city?: string }) => (
    <strong>{city}</strong>
  );
  const roleCellRenderer = ({ role }: { role?: string }) => <em>{role}</em>;
  const stateCellRenderer = ({ state }: { state?: string }) => (
    <span>{state}</span>
  );
  const zipcodeCellRenderer = ({ zipcode }: { zipcode?: string }) => (
    <span>{zipcode}</span>
  );
  const width = ({ width: totalWidth }: { width?: number }) =>
    totalWidth ? totalWidth * 0.3 : 100;

  it("renders default", () => {
    const component = render(
      <Table data={items}>
        <Column header="name" cellRenderer={nameCellRenderer} width={width} />
        <Column header="role" cellRenderer={roleCellRenderer} width={width} />
        <Column header="state" cellRenderer={stateCellRenderer} width={width} />
        <Column
          header="zipcode"
          cellRenderer={zipcodeCellRenderer}
          width={width}
        />
        <Column header="city" cellRenderer={cityCellRenderer} width={width} />
      </Table>
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it("renders with growToFill cols", () => {
    const component = render(
      <Table data={items}>
        <Column
          header="name"
          cellRenderer={nameCellRenderer}
          growToFill={true}
        />
        <Column
          header="role"
          cellRenderer={roleCellRenderer}
          growToFill={true}
        />
        <Column
          header="state"
          cellRenderer={stateCellRenderer}
          growToFill={true}
        />
        <Column
          header="zipcode"
          cellRenderer={zipcodeCellRenderer}
          width={width}
        />
        <Column header="city" cellRenderer={cityCellRenderer} width={width} />
      </Table>
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it("renders again with new data", () => {
    const itemRenderer = item => <span>{item}</span>;
    const component = mount(
      <Table data={[1, 2, 3]}>
        <Column header="item" cellRenderer={itemRenderer} width={width} />
      </Table>
    );
    expect(toJson(component)).toMatchSnapshot();

    component.setProps({
      data: [4, 5, 6]
    });
    expect(toJson(component)).toMatchSnapshot();
  });

  describe("getData", () => {
    it("will return the right array", () => {
      const width = () => 10;
      const cell = number => <span>{number}</span>;
      const component = shallow(
        <Table data={[1, 2, 3]}>
          <Column header="test" cellRenderer={cell} width={width} />
        </Table>
      );
      const instance = component.instance() as Table<number>;
      expect(instance.getData([1, 2, 3])).toEqual([{}, 1, 2, 3]);
    });
  });

  describe("clampWidth", () => {
    it("returns the minumum width if the base is lower than minWidth", () => {
      expect(clampWidth(100, 200, 300)).toEqual(200);
    });
    it("returns the maximum width if the base is higher than maxWidth", () => {
      expect(clampWidth(400, 200, 300)).toEqual(300);
    });
  });

  describe("fillColumns", () => {
    it("returns resized column widths", () => {
      const columns = [
        // tslint:disable:jsx-wrap-multiline
        <Column
          header="name"
          cellRenderer={nameCellRenderer}
          growToFill={true}
          key={0}
        />,
        <Column
          header="role"
          cellRenderer={roleCellRenderer}
          growToFill={true}
          key={1}
        />,
        <Column
          header="state"
          cellRenderer={stateCellRenderer}
          growToFill={true}
          key={2}
        />,
        <Column
          header="zipcode"
          cellRenderer={zipcodeCellRenderer}
          growToFill={true}
          key={3}
        />,
        <Column
          header="city"
          cellRenderer={cityCellRenderer}
          growToFill={true}
          key={4}
        />
        // tslint:enable:jsx-wrap-multiline
      ];
      const colWidths = [150, 150, 150, 150, 150];
      const availableWidth = 1000;

      expect(
        fillColumns(columns, colWidths, availableWidth).reduce(
          (acc, curr) => acc + curr,
          0
        )
      ).toEqual(availableWidth);
    });
    it("distributes extra width to other columns when one has a maxWidth", () => {
      const columns = [
        // tslint:disable:jsx-wrap-multiline
        <Column
          header="name"
          cellRenderer={nameCellRenderer}
          growToFill={true}
          maxWidth={100}
          key={0}
        />,
        <Column
          header="role"
          cellRenderer={roleCellRenderer}
          growToFill={true}
          key={1}
        />,
        <Column
          header="state"
          cellRenderer={stateCellRenderer}
          growToFill={true}
          key={2}
        />,
        <Column
          header="zipcode"
          cellRenderer={zipcodeCellRenderer}
          growToFill={true}
          key={3}
        />,
        <Column
          header="city"
          cellRenderer={cityCellRenderer}
          growToFill={true}
          key={4}
        />
        // tslint:enable:jsx-wrap-multiline
      ];
      const colWidths = [100, 150, 150, 150, 150];
      const availableWidth = 1000;

      expect(
        fillColumns(columns, colWidths, availableWidth).reduce(
          (acc, curr) => acc + curr,
          0
        )
      ).toEqual(availableWidth);
    });
  });
});
