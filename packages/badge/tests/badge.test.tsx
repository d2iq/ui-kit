import React from "react";
import { render } from "@testing-library/react";
import { Badge } from "../";

const StringComponent = (): JSX.Element => {
  return <span>string</span>;
};

describe("Badge", () => {
  it("default", () => {
    const { asFragment } = render(<Badge>default</Badge>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("success", () => {
    const { asFragment } = render(<Badge appearance="success">success</Badge>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("primary", () => {
    const { asFragment } = render(<Badge appearance="primary">primary</Badge>);

    expect(asFragment()).toMatchSnapshot();
  });

  it("danger", () => {
    const { asFragment } = render(<Badge appearance="danger">danger</Badge>);

    expect(asFragment()).toMatchSnapshot();
  });

  it("warning", () => {
    const { asFragment } = render(<Badge appearance="warning">warning</Badge>);

    expect(asFragment()).toMatchSnapshot();
  });

  it("outline", () => {
    const { asFragment } = render(<Badge appearance="outline">outline</Badge>);

    expect(asFragment()).toMatchSnapshot();
  });

  it("accept jsx as children", () => {
    const { asFragment } = render(
      <Badge>
        <StringComponent />
      </Badge>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
