import React from "react";
import { render } from "enzyme";
import toJSON from "enzyme-to-json";
import Stack from "../components/Stack";

describe("Stack", () => {
  it("renders default", () => {
    expect(
      toJSON(
        render(
          <Stack>
            <div>Lorem Ipsum is simply dummy text</div>
            <div>of the printing and typesetting industry.</div>
            <div>Lorem Ipsum has been the industry's</div>
          </Stack>
        )
      )
    ).toMatchSnapshot();
  });
  it("renders with different spacingSize", () => {
    expect(
      toJSON(
        render(
          <Stack spacingSize="l">
            <div>Lorem Ipsum is simply dummy text</div>
            <div>of the printing and typesetting industry.</div>
            <div>Lorem Ipsum has been the industry's</div>
          </Stack>
        )
      )
    ).toMatchSnapshot();
  });
  it("renders with responsive spacingSize", () => {
    expect(
      toJSON(
        render(
          <Stack spacingSize={{ default: "s", medium: "m" }}>
            <div>Lorem Ipsum is simply dummy text</div>
            <div>of the printing and typesetting industry.</div>
            <div>Lorem Ipsum has been the industry's</div>
          </Stack>
        )
      )
    ).toMatchSnapshot();
  });
  it("renders with a custom tag", () => {
    expect(
      toJSON(
        render(
          <Stack tag="ul">
            <li>Lorem Ipsum is simply dummy text</li>
            <li>of the printing and typesetting industry.</li>
            <li>Lorem Ipsum has been the industry's</li>
          </Stack>
        )
      )
    ).toMatchSnapshot();
  });
});
