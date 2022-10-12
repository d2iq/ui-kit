import React from "react";
import { render } from "@testing-library/react";
import { createSerializer } from "@emotion/jest";
import PopoverListItem from "../components/PopoverListItem";
import { PopoverListItemAppearances } from "../../shared/types/popoverListItemAppearances";
import PopoverListItemIcon from "../components/PopoverListItemIcon";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import PopoverListItemAvatar from "../components/PopoverListItemAvatar";

expect.addSnapshotSerializer(createSerializer());

describe("PopoverListItem", () => {
  it("renders", () => {
    const { asFragment } = render(
      <PopoverListItem index={0} listLength={1}>
        item content content
      </PopoverListItem>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders disabled", () => {
    const { asFragment } = render(
      <PopoverListItem index={0} listLength={1} disabled={true}>
        item content content
      </PopoverListItem>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders active", () => {
    const { asFragment } = render(
      <PopoverListItem index={0} listLength={1} isActive={true}>
        item content content
      </PopoverListItem>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders all appearances", () => {
    Object.keys(PopoverListItemAppearances).forEach(appearance => {
      const { asFragment } = render(
        <PopoverListItem
          index={0}
          listLength={1}
          isSelected={true}
          appearance={PopoverListItemAppearances[appearance]}
        >
          item content content
        </PopoverListItem>
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });
  it("renders selected", () => {
    const { asFragment } = render(
      <PopoverListItem index={0} listLength={1} isSelected={true}>
        item content content
      </PopoverListItem>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders active and selected", () => {
    const { asFragment } = render(
      <PopoverListItem
        index={0}
        listLength={1}
        isSelected={true}
        isActive={true}
      >
        item content content
      </PopoverListItem>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders with icon and avatar", () => {
    const { asFragment } = render(
      <PopoverListItem index={0} listLength={1}>
        <PopoverListItemIcon shape={SystemIcons.ArrowDown} />
        item content content
        <PopoverListItemAvatar src="" />
      </PopoverListItem>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
