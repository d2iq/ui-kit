import * as React from "react";
import { createSerializer } from "@emotion/jest";
import { create } from "react-test-renderer";

import { AppChrome } from "../";

expect.addSnapshotSerializer(createSerializer());

describe("AppChrome", () => {
  it("renders with the app chrome regions", () => {
    const component = create(
      <AppChrome
        sidebar={<div>Sidebar content</div>}
        headerBar={<div>Header content goes here</div>}
        mainContent={<div>Main app content goes here</div>}
      />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
