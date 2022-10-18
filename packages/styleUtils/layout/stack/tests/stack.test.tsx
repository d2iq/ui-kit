import React from "react";
import { render } from "@testing-library/react";
import Stack from "../components/Stack";

describe("Stack", () => {
  it("renders default", () => {
    const { asFragment } = render(
      <Stack>
        <div>Lorem Ipsum is simply dummy text</div>
        <div>of the printing and typesetting industry.</div>
        <div>Lorem Ipsum has been the industry's</div>
      </Stack>
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it("renders with different spacingSize", () => {
    const { asFragment } = render(
      <Stack spacingSize="l">
        <div>Lorem Ipsum is simply dummy text</div>
        <div>of the printing and typesetting industry.</div>
        <div>Lorem Ipsum has been the industry's</div>
      </Stack>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders with responsive spacingSize", () => {
    const { asFragment } = render(
      <Stack spacingSize={{ default: "s", medium: "m" }}>
        <div>Lorem Ipsum is simply dummy text</div>
        <div>of the printing and typesetting industry.</div>
        <div>Lorem Ipsum has been the industry's</div>
      </Stack>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders with a custom tag", () => {
    const { asFragment } = render(
      <Stack tag="ul">
        <li>Lorem Ipsum is simply dummy text</li>
        <li>of the printing and typesetting industry.</li>
        <li>Lorem Ipsum has been the industry's</li>
      </Stack>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
