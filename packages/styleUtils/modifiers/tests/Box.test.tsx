import React from "react";
import { shallow } from "enzyme";
import * as emotion from "emotion";
import { createSerializer } from "jest-emotion";
import toJson from "enzyme-to-json";
import { Box } from "../";

expect.addSnapshotSerializer(createSerializer(emotion));

describe("Box", () => {
  it("renders default", () => {
    const component = shallow(<Box tag="div">Content</Box>);
    expect(toJson(component)).toMatchSnapshot();
  });

  it("renders with all props", () => {
    const component = shallow(
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
    expect(toJson(component)).toMatchSnapshot();
  });
});
