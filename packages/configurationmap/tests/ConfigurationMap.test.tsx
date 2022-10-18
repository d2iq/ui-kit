import React from "react";
import { createSerializer } from "@emotion/jest";
import { render, fireEvent, screen } from "@testing-library/react";

import {
  ConfigurationMap,
  ConfigurationMapSection,
  ConfigurationMapHeading,
  ConfigurationMapRow,
  ConfigurationMapLabel,
  ConfigurationMapValue,
  ConfigurationMapValueWithDefault,
  ConfigurationMapRowAction
} from "../";

expect.addSnapshotSerializer(createSerializer());

describe("ConfigurationMap", () => {
  it("renders default", () => {
    const { asFragment } = render(
      <ConfigurationMap>
        <ConfigurationMapSection>
          <ConfigurationMapRow>
            <ConfigurationMapLabel>Name</ConfigurationMapLabel>
            <ConfigurationMapValue>Jane Doe</ConfigurationMapValue>
          </ConfigurationMapRow>
          <ConfigurationMapRow>
            <ConfigurationMapLabel>Role</ConfigurationMapLabel>
            <ConfigurationMapValue>UX Designer</ConfigurationMapValue>
          </ConfigurationMapRow>
          <ConfigurationMapRow>
            <ConfigurationMapLabel>City</ConfigurationMapLabel>
            <ConfigurationMapValue>San Francisco</ConfigurationMapValue>
          </ConfigurationMapRow>
        </ConfigurationMapSection>
      </ConfigurationMap>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders with headline", () => {
    const { asFragment } = render(
      <ConfigurationMap>
        <ConfigurationMapSection>
          <ConfigurationMapHeading>Jane Doe Info</ConfigurationMapHeading>
          <ConfigurationMapRow>
            <ConfigurationMapLabel>Name</ConfigurationMapLabel>
            <ConfigurationMapValue>Jane Doe</ConfigurationMapValue>
          </ConfigurationMapRow>
          <ConfigurationMapRow>
            <ConfigurationMapLabel>Role</ConfigurationMapLabel>
            <ConfigurationMapValue>UX Designer</ConfigurationMapValue>
          </ConfigurationMapRow>
          <ConfigurationMapRow>
            <ConfigurationMapLabel>City</ConfigurationMapLabel>
            <ConfigurationMapValue>San Francisco</ConfigurationMapValue>
          </ConfigurationMapRow>
        </ConfigurationMapSection>
      </ConfigurationMap>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders with actions", () => {
    const rowActionCallback = jest.fn();
    const { asFragment } = render(
      <ConfigurationMap>
        <ConfigurationMapSection>
          <ConfigurationMapRow onlyShowActionOnHover={true}>
            <ConfigurationMapLabel>Name</ConfigurationMapLabel>
            <ConfigurationMapValue>Jane Doe</ConfigurationMapValue>
            <ConfigurationMapRowAction onClick={rowActionCallback}>
              Action
            </ConfigurationMapRowAction>
          </ConfigurationMapRow>
          <ConfigurationMapRow onlyShowActionOnHover={true}>
            <ConfigurationMapLabel>Role</ConfigurationMapLabel>
            <ConfigurationMapValue>UX Designer</ConfigurationMapValue>
            <ConfigurationMapRowAction onClick={rowActionCallback}>
              Action
            </ConfigurationMapRowAction>
          </ConfigurationMapRow>
          <ConfigurationMapRow onlyShowActionOnHover={true}>
            <ConfigurationMapLabel>City</ConfigurationMapLabel>
            <ConfigurationMapValue>San Francisco</ConfigurationMapValue>
            <ConfigurationMapRowAction onClick={rowActionCallback}>
              Action
            </ConfigurationMapRowAction>
          </ConfigurationMapRow>
        </ConfigurationMapSection>
      </ConfigurationMap>
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it("renders with default value", () => {
    const { asFragment } = render(
      <ConfigurationMap>
        <ConfigurationMapSection>
          <ConfigurationMapRow>
            <ConfigurationMapLabel>Name</ConfigurationMapLabel>
            <ConfigurationMapValueWithDefault value="Jane Doe" />
          </ConfigurationMapRow>
          <ConfigurationMapRow>
            <ConfigurationMapLabel>Role</ConfigurationMapLabel>
            <ConfigurationMapValueWithDefault />
          </ConfigurationMapRow>
          <ConfigurationMapRow>
            <ConfigurationMapLabel>City</ConfigurationMapLabel>
            <ConfigurationMapValueWithDefault />
          </ConfigurationMapRow>
        </ConfigurationMapSection>
      </ConfigurationMap>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("calls onClick when action is clicked", () => {
    const rowActionCallback = jest.fn();
    render(
      <ConfigurationMap>
        <ConfigurationMapSection>
          <ConfigurationMapRow onlyShowActionOnHover={true}>
            <ConfigurationMapLabel>Name</ConfigurationMapLabel>
            <ConfigurationMapValue>Jane Doe</ConfigurationMapValue>
            <ConfigurationMapRowAction onClick={rowActionCallback}>
              Action
            </ConfigurationMapRowAction>
          </ConfigurationMapRow>
          <ConfigurationMapRow onlyShowActionOnHover={true}>
            <ConfigurationMapLabel>Role</ConfigurationMapLabel>
            <ConfigurationMapValue>UX Designer</ConfigurationMapValue>
            <ConfigurationMapRowAction onClick={rowActionCallback}>
              Action
            </ConfigurationMapRowAction>
          </ConfigurationMapRow>
          <ConfigurationMapRow onlyShowActionOnHover={true}>
            <ConfigurationMapLabel>City</ConfigurationMapLabel>
            <ConfigurationMapValue>San Francisco</ConfigurationMapValue>
            <ConfigurationMapRowAction onClick={rowActionCallback}>
              Action
            </ConfigurationMapRowAction>
          </ConfigurationMapRow>
        </ConfigurationMapSection>
      </ConfigurationMap>
    );
    const button = screen.getAllByRole("button")[0];

    expect(rowActionCallback).not.toHaveBeenCalled();
    fireEvent.click(button);
    expect(rowActionCallback).toHaveBeenCalled();
  });
});
