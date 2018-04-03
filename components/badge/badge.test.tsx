import React from "react";
import Badge from '../badge';
import renderer from 'react-test-renderer';

const StringComponent = () : JSX.Element => {
  return (
    <span>string</span>
  )
};

describe("Badge", () => {
  it("default", () => {
    expect(renderer
    .create(<Badge>default</Badge>)
    .toJSON()).toMatchSnapshot()
  });

  it("success", () => {
    expect(renderer
    .create(<Badge theme="success">success</Badge>)
    .toJSON()).toMatchSnapshot()
  });

  it("primary", () => {
    expect(renderer
    .create(<Badge theme="primary">primary</Badge>)
    .toJSON()).toMatchSnapshot()
  });

  it("danger", () => {
    expect(renderer
    .create(<Badge theme="danger">danger</Badge>)
    .toJSON()).toMatchSnapshot()
  });

  it("warning", () => {
    expect(renderer
    .create(<Badge theme="warning">warning</Badge>)
    .toJSON()).toMatchSnapshot()
  });

  it("outline", () => {
    expect(renderer
    .create(<Badge theme="outline">outline</Badge>)
    .toJSON()).toMatchSnapshot()
  });

  it("accept jsx as children", () => {
    expect(renderer
    .create(<Badge><StringComponent /></Badge>)
    .toJSON()).toMatchSnapshot()
  });
});
