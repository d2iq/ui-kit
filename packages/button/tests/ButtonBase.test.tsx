import React from "react";

import ButtonBase, { ButtonAppearances } from "../components/ButtonBase";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import * as emotion from "emotion";
import { createSerializer } from "jest-emotion";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

expect.addSnapshotSerializer(createSerializer(emotion));

describe("ButtonBase", () => {
  it("renders all appearances with props", () => {
    Object.keys(ButtonAppearances).forEach(appearance => {
      const component = shallow(
        <ButtonBase
          appearance={ButtonAppearances[appearance]}
          isFullWidth={true}
          type="submit"
          aria-haspopup={true}
          disabled={true}
          isProcessing={true}
          iconStart={SystemIcons.Check}
          iconEnd={SystemIcons.Check}
        >
          Button
        </ButtonBase>
      );
      expect(toJson(component)).toMatchSnapshot();
    });
  });
  it("calls onClick prop when clicked", () => {
    const someFn = jest.fn();
    const component = mount(
      <ButtonBase appearance={ButtonAppearances.Standard} onClick={someFn}>
        Button
      </ButtonBase>
    );
    expect(someFn).not.toHaveBeenCalled();
    component.simulate("click");
    expect(someFn).toHaveBeenCalled();
  });
  it("does not call onClick prop when disabled", () => {
    const anotherFn = jest.fn();
    const component = mount(
      <ButtonBase
        appearance={ButtonAppearances.Standard}
        disabled={true}
        onClick={anotherFn}
      >
        Button
      </ButtonBase>
    );
    expect(anotherFn).not.toHaveBeenCalled();
    component.simulate("click");
    expect(anotherFn).not.toHaveBeenCalled();
  });
});
