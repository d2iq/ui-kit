import React from "react";

import { Table, Column } from "../";
import * as emotion from "emotion";
import { createSerializer } from "jest-emotion";
import { render, shallow } from "enzyme";
import toJson from "enzyme-to-json";

expect.addSnapshotSerializer(createSerializer(emotion));

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
});
