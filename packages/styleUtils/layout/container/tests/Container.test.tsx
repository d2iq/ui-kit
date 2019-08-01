import React from "react";
import { shallow } from "enzyme";
import * as emotion from "emotion";
import { createSerializer } from "jest-emotion";
import toJson from "enzyme-to-json";

import Container from "../components/Container";

expect.addSnapshotSerializer(createSerializer(emotion));

describe("Container", () => {
  it("renders default", () => {
    const component = shallow(
      <Container>
        <div>content</div>
      </Container>
    );

    expect(toJson(component)).toMatchSnapshot();
  });
});
