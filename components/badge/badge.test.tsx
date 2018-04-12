import React from "react";
import renderer from 'react-test-renderer';
import Badge from '../badge';

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
    .create(<Badge appearance="success">success</Badge>)
    .toJSON()).toMatchSnapshot()
  });

  it("primary", () => {
    expect(renderer
    .create(<Badge appearance="primary">primary</Badge>)
    .toJSON()).toMatchSnapshot()
  });

  it("danger", () => {
    expect(renderer
    .create(<Badge appearance="danger">danger</Badge>)
    .toJSON()).toMatchSnapshot()
  });

  it("warning", () => {
    expect(renderer
    .create(<Badge appearance="warning">warning</Badge>)
    .toJSON()).toMatchSnapshot()
  });

  it("outline", () => {
    expect(renderer
    .create(<Badge appearance="outline">outline</Badge>)
    .toJSON()).toMatchSnapshot()
  });

  it("accept jsx as children", () => {
    expect(renderer
    .create(<Badge><StringComponent /></Badge>)
    .toJSON()).toMatchSnapshot()
  });

  it("can have onClick event", () => {
    const foo = () => {
      return true;
    };

    expect(renderer
    .create(<Badge onClick={foo}>onClick badge</Badge>)
    .toJSON()).toMatchSnapshot()
  });
});
