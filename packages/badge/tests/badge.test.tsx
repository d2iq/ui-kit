import React from "react";
import { Badge } from "../";

import { mount } from "enzyme";
import toJson from "enzyme-to-json";

const StringComponent = (): JSX.Element => {
  return <span>string</span>;
};

describe("Badge", () => {
  it("default", () => {
    const component = mount(<Badge>default</Badge>);
    expect(toJson(component)).toMatchSnapshot();
  });

  it("success", () => {
    const component = mount(<Badge appearance="success">success</Badge>);
    expect(toJson(component)).toMatchSnapshot();
  });

  it("primary", () => {
    const component = mount(<Badge appearance="primary">primary</Badge>);
    expect(toJson(component)).toMatchSnapshot();
  });

  it("danger", () => {
    const component = mount(<Badge appearance="danger">danger</Badge>);
    expect(toJson(component)).toMatchSnapshot();
  });

  it("warning", () => {
    const component = mount(<Badge appearance="warning">warning</Badge>);
    expect(toJson(component)).toMatchSnapshot();
  });

  it("outline", () => {
    const component = mount(<Badge appearance="outline">outline</Badge>);
    expect(toJson(component)).toMatchSnapshot();
  });

  it("accept jsx as children", () => {
    const component = mount(
      <Badge>
        <StringComponent />
      </Badge>
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
