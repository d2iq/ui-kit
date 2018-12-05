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

  it("should call onFocus when input gains focus", () => {
    const focusFn = jest.fn();
    const component = shallow(
      <TextInputWithIcon
        id="test.input"
        inputLabel="Test Focus"
        onFocus={focusFn}
        iconStart={<DownTriangle />}
      />
    );
    expect(focusFn).not.toHaveBeenCalled();
    component.find("input").simulate("focus");
    expect(focusFn).toHaveBeenCalled();
  });

  it("should call onBlur when input loses focus", () => {
    const blurFn = jest.fn();
    const component = shallow(
      <TextInputWithIcon
        id="test.input"
        inputLabel="Test Blur"
        onBlur={blurFn}
        iconStart={<DownTriangle />}
      />
    );
    expect(blurFn).not.toHaveBeenCalled();
    component.find("input").simulate("focus");
    expect(blurFn).not.toHaveBeenCalled();
    component.find("input").simulate("blur");
    expect(blurFn).toHaveBeenCalled();
  });
});
