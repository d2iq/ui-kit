import React from "react";
import BadgeButton from '../badgeButton';
import renderer from 'react-test-renderer';

const StringComponent = () : JSX.Element => {
  return (
    <span>string</span>
  )
};

describe("BadgeButton", () => {
  it("default", () => {
    expect(renderer
    .create(<BadgeButton>default</BadgeButton>)
    .toJSON()).toMatchSnapshot()
  });

  it("success", () => {
    expect(renderer
    .create(<BadgeButton appearance="success">success</BadgeButton>)
    .toJSON()).toMatchSnapshot()
  });

  it("primary", () => {
    expect(renderer
    .create(<BadgeButton appearance="primary">primary</BadgeButton>)
    .toJSON()).toMatchSnapshot()
  });

  it("danger", () => {
    expect(renderer
    .create(<BadgeButton appearance="danger">danger</BadgeButton>)
    .toJSON()).toMatchSnapshot()
  });

  it("warning", () => {
    expect(renderer
    .create(<BadgeButton appearance="warning">warning</BadgeButton>)
    .toJSON()).toMatchSnapshot()
  });

  it("outline", () => {
    expect(renderer
    .create(<BadgeButton appearance="outline">outline</BadgeButton>)
    .toJSON()).toMatchSnapshot()
  });

  it("accept jsx as children", () => {
    expect(renderer
    .create(<BadgeButton><StringComponent /></BadgeButton>)
    .toJSON()).toMatchSnapshot()
  });
});
