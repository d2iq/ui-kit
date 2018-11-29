import React from "react";
import * as emotion from "emotion";
import { createSerializer } from "jest-emotion";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import TextInputWithIcon from "../components/TextInputWithIcon";
import { TextInputAppearance } from "../components/TextInput";
import { CloseIcon, DownTriangle } from "../../shared/icons";

expect.addSnapshotSerializer(createSerializer(emotion));

describe("TextInputWithIcon", () => {
  it("should render all appearances with iconStart", () => {
    Object.keys(TextInputAppearance).forEach(appearance => {
      const component = shallow(
        <TextInputWithIcon
          id={`test.icon_start_input.${TextInputAppearance[appearance]}`}
          inputLabel={TextInputAppearance[appearance]}
          appearance={TextInputAppearance[appearance]}
          iconStart={<DownTriangle />}
        />
      );
      expect(toJson(component)).toMatchSnapshot();
    });
  });

  it("should render all appearances with iconEnd", () => {
    Object.keys(TextInputAppearance).forEach(appearance => {
      const component = shallow(
        <TextInputWithIcon
          id={`test.icon_end_input.${TextInputAppearance[appearance]}`}
          inputLabel={TextInputAppearance[appearance]}
          appearance={TextInputAppearance[appearance]}
          iconEnd={<CloseIcon />}
        />
      );
      expect(toJson(component)).toMatchSnapshot();
    });
  });

  it("should render all appearances with twoIcons", () => {
    Object.keys(TextInputAppearance).forEach(appearance => {
      const component = shallow(
        <TextInputWithIcon
          id={`test.two_icon_input.${TextInputAppearance[appearance]}`}
          inputLabel={TextInputAppearance[appearance]}
          appearance={TextInputAppearance[appearance]}
          iconStart={<DownTriangle />}
          iconEnd={<CloseIcon />}
        />
      );
      expect(toJson(component)).toMatchSnapshot();
    });
  });
});
