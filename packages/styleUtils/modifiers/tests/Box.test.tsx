import React from "react";
import { render } from "@testing-library/react";
import { createSerializer } from "@emotion/jest";
import { Box } from "../";

expect.addSnapshotSerializer(createSerializer());

describe("Box", () => {
  it("renders default", () => {
    const { asFragment } = render(<Box tag="div">Content</Box>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with all props", () => {
    const { asFragment } = render(
      <Box
        bgColor="#000000"
        bgImageUrl="https://via.placeholder.com/150"
        bgImageOptions={{
          position: "top-left",
          repeat: "repeat-x",
          size: "contain"
        }}
        display="block"
        vertAlignChildren="center"
        isVisuallyHidden={true}
        textAlign="center"
        tag="span"
        className="test"
      >
        Content
      </Box>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
