import React from "react";
import Badge from '../badge';
import renderer from 'react-test-renderer';

describe("Badge", () => {
  it("default", () => {
    expect(renderer
    .create(<Badge>default</Badge>)
    .toJSON()).toMatchSnapshot()
  });

  it("success", () => {
    expect(renderer
    .create(<Badge appearance="success">success</Badge>)
    .toJSON()).toMatchSnapshot()
  });

  it("information", () => {
    expect(renderer
    .create(<Badge appearance="information">information</Badge>)
    .toJSON()).toMatchSnapshot()
  });

  it("warning", () => {
    expect(renderer
    .create(<Badge appearance="warning">warning</Badge>)
    .toJSON()).toMatchSnapshot()
  });

  it("danger", () => {
    expect(renderer
    .create(<Badge appearance="danger">danger</Badge>)
    .toJSON()).toMatchSnapshot()
  });
});
