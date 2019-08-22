import React from "react";
import { shallow } from "enzyme";
import * as emotion from "emotion";
import { createSerializer } from "jest-emotion";
import toJson from "enzyme-to-json";
import DropdownMenuItem from "../components/DropdownMenuItem";
import { DropdownItemAppearances } from "../../shared/types/dropdownItemAppearances";
import DropdownMenuItemIcon from "../components/DropdownMenuItemIcon";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import DropdownMenuItemAvatar from "../components/DropdownMenuItemAvatar";

expect.addSnapshotSerializer(createSerializer(emotion));

describe("DropdownMenuItem", () => {
  it("renders", () => {
    const component = shallow(
      <DropdownMenuItem index={0} listLength={1}>
        item content content
      </DropdownMenuItem>
    );
    expect(toJson(component)).toMatchSnapshot();
  });
  it("renders disabled", () => {
    const component = shallow(
      <DropdownMenuItem index={0} listLength={1} disabled={true}>
        item content content
      </DropdownMenuItem>
    );
    expect(toJson(component)).toMatchSnapshot();
  });
  it("renders active", () => {
    const component = shallow(
      <DropdownMenuItem index={0} listLength={1} isActive={true}>
        item content content
      </DropdownMenuItem>
    );
    expect(toJson(component)).toMatchSnapshot();
  });
  it("renders all appearances", () => {
    Object.keys(DropdownItemAppearances).forEach(appearance => {
      const component = shallow(
        <DropdownMenuItem
          index={0}
          listLength={1}
          isSelected={true}
          appearance={DropdownItemAppearances[appearance]}
        >
          item content content
        </DropdownMenuItem>
      );
      expect(toJson(component)).toMatchSnapshot();
    });
  });
  it("renders selected", () => {
    const component = shallow(
      <DropdownMenuItem index={0} listLength={1} isSelected={true}>
        item content content
      </DropdownMenuItem>
    );
    expect(toJson(component)).toMatchSnapshot();
  });
  it("renders active and selected", () => {
    const component = shallow(
      <DropdownMenuItem
        index={0}
        listLength={1}
        isSelected={true}
        isActive={true}
      >
        item content content
      </DropdownMenuItem>
    );
    expect(toJson(component)).toMatchSnapshot();
  });
  it("renders with icon and avatar", () => {
    const component = shallow(
      <DropdownMenuItem index={0} listLength={1}>
        <DropdownMenuItemIcon shape={SystemIcons.ArrowDown} />
        item content content
        <DropdownMenuItemAvatar src="" />
      </DropdownMenuItem>
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
