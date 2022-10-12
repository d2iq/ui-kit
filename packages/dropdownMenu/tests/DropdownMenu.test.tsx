import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { DropdownMenu, DropdownSection, DropdownMenuItem } from "..";

describe("Dropdown", () => {
  it("renders a closed dropdown", () => {
    const { baseElement } = render(
      <DropdownMenu trigger="Dropdown trigger">
        <DropdownSection>
          <DropdownMenuItem key="edit" value="edit">
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem key="scale" value="scale">
            Scale
          </DropdownMenuItem>
          <DropdownMenuItem key="restart" value="restart">
            Restart
          </DropdownMenuItem>
          <DropdownMenuItem key="stop" value="stop">
            Stop
          </DropdownMenuItem>
        </DropdownSection>
      </DropdownMenu>
    );

    expect(baseElement).toMatchSnapshot();
  });
  it("renders an open dropdown", () => {
    const { baseElement } = render(
      <DropdownMenu initialIsOpen={true} trigger="Dropdown trigger">
        <DropdownSection>
          <DropdownMenuItem key="edit" value="edit">
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem key="scale" value="scale">
            Scale
          </DropdownMenuItem>
          <DropdownMenuItem key="restart" value="restart">
            Restart
          </DropdownMenuItem>
          <DropdownMenuItem key="stop" value="stop">
            Stop
          </DropdownMenuItem>
        </DropdownSection>
      </DropdownMenu>
    );

    expect(baseElement).toMatchSnapshot();
  });
  it("renders a dropdown with a max height", () => {
    const { baseElement } = render(
      <DropdownMenu trigger="Dropdown trigger" menuMaxHeight={50}>
        <DropdownSection>
          <DropdownMenuItem key="edit" value="edit">
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem key="scale" value="scale">
            Scale
          </DropdownMenuItem>
          <DropdownMenuItem key="restart" value="restart">
            Restart
          </DropdownMenuItem>
          <DropdownMenuItem key="stop" value="stop">
            Stop
          </DropdownMenuItem>
        </DropdownSection>
      </DropdownMenu>
    );

    expect(baseElement).toMatchSnapshot();
  });
  it("renders an open dropdown with multiple sections", () => {
    const { baseElement } = render(
      <DropdownMenu initialIsOpen={true} trigger="Dropdown trigger">
        <DropdownSection>
          <DropdownMenuItem key="edit" value="edit">
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem key="scale" value="scale">
            Scale
          </DropdownMenuItem>
        </DropdownSection>

        <DropdownSection>
          <DropdownMenuItem key="restart" value="restart">
            Restart
          </DropdownMenuItem>
          <DropdownMenuItem key="restartDelay" value="restartDelay">
            Restart Delay
          </DropdownMenuItem>
        </DropdownSection>

        <DropdownSection>
          <DropdownMenuItem key="pause" value="pause">
            Pause
          </DropdownMenuItem>
          <DropdownMenuItem key="stop" value="stop">
            Stop
          </DropdownMenuItem>
        </DropdownSection>
      </DropdownMenu>
    );

    expect(baseElement).toMatchSnapshot();
  });
  it("renders an element passed as to the trigger prop", () => {
    render(
      <DropdownMenu trigger={<div>Dropdown trigger</div>}>
        <DropdownSection>
          <DropdownMenuItem key="edit" value="edit">
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem key="scale" value="scale">
            Scale
          </DropdownMenuItem>
          <DropdownMenuItem key="restart" value="restart">
            Restart
          </DropdownMenuItem>
          <DropdownMenuItem key="stop" value="stop">
            Stop
          </DropdownMenuItem>
        </DropdownSection>
      </DropdownMenu>
    );

    const trigger = screen.queryByText(/dropdown trigger/i);

    expect(trigger).toBeTruthy();
  });
  it("toggles the dropdown menu by clicking twice", async () => {
    const user = userEvent.setup();

    render(
      <DropdownMenu trigger={<div>Dropdown trigger</div>}>
        <DropdownSection>
          <DropdownMenuItem key="edit" value="edit">
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem key="scale" value="scale">
            Scale
          </DropdownMenuItem>
          <DropdownMenuItem key="restart" value="restart">
            Restart
          </DropdownMenuItem>
          <DropdownMenuItem key="stop" value="stop">
            Stop
          </DropdownMenuItem>
        </DropdownSection>
      </DropdownMenu>
    );

    const trigger = screen.getByText(/dropdown trigger/i);

    expect(screen.queryByText(/edit/i)).toBeFalsy();
    await user.click(trigger);
    expect(screen.queryByText(/edit/i)).toBeTruthy();
    await user.click(trigger);
    expect(screen.queryByText(/edit/i)).toBeFalsy();
  });
  it("toggles the dropdown menu by pressing the spacebar twice", async () => {
    const user = userEvent.setup();

    render(
      <DropdownMenu trigger={<div>Dropdown trigger</div>}>
        <DropdownSection>
          <DropdownMenuItem key="edit" value="edit">
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem key="scale" value="scale">
            Scale
          </DropdownMenuItem>
          <DropdownMenuItem key="restart" value="restart">
            Restart
          </DropdownMenuItem>
          <DropdownMenuItem key="stop" value="stop">
            Stop
          </DropdownMenuItem>
        </DropdownSection>
      </DropdownMenu>
    );
    const trigger = screen.getByText(/dropdown trigger/i);

    expect(screen.queryByText(/edit/i)).toBeFalsy();

    // click to focus, then space to close menu
    await user.click(trigger);
    await user.keyboard(" ");

    await user.keyboard(" ");
    expect(screen.queryByText(/edit/i)).toBeTruthy();

    await user.keyboard(" ");
    expect(screen.queryByText(/edit/i)).toBeFalsy();
  });
  it("selects first item and passes it's value to onSelect", async () => {
    const user = userEvent.setup();
    const onSelectFn = jest.fn();

    render(
      <DropdownMenu onSelect={onSelectFn} trigger={<div>Dropdown trigger</div>}>
        <DropdownSection>
          <DropdownMenuItem key="edit" value="edit">
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem key="scale" value="scale">
            Scale
          </DropdownMenuItem>
          <DropdownMenuItem key="restart" value="restart">
            Restart
          </DropdownMenuItem>
          <DropdownMenuItem key="stop" value="stop">
            Stop
          </DropdownMenuItem>
        </DropdownSection>
      </DropdownMenu>
    );
    const trigger = screen.getByText(/dropdown trigger/i);

    expect(onSelectFn).not.toHaveBeenCalled();

    await user.click(trigger);
    await user.keyboard("{ArrowDown}");
    await user.keyboard("{Enter}");

    // using `expect.anything()` because the second parameter is an object
    // that comes from Downshift, and there's no good way to know exactly
    // what to expect
    expect(onSelectFn).toHaveBeenCalledWith("edit", expect.anything());
  });
  it("calls onSelect prop with the selected value", async () => {
    const user = userEvent.setup();
    const onSelectFn = jest.fn();

    render(
      <DropdownMenu onSelect={onSelectFn} trigger={<div>Dropdown trigger</div>}>
        <DropdownSection>
          <DropdownMenuItem disabled={true} key="edit" value="edit">
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem key="scale" value="scale">
            Scale
          </DropdownMenuItem>
          <DropdownMenuItem key="restart" value="restart">
            Restart
          </DropdownMenuItem>
          <DropdownMenuItem key="stop" value="stop">
            Stop
          </DropdownMenuItem>
        </DropdownSection>
      </DropdownMenu>
    );
    const trigger = screen.getByText(/dropdown trigger/i);

    expect(onSelectFn).not.toHaveBeenCalled();

    await user.click(trigger);
    await user.keyboard("{ArrowDown}");
    await user.keyboard("{Enter}");

    // using `expect.anything()` because the second parameter is an object
    // that comes from Downshift, and there's no good way to know exactly
    // what to expect
    expect(onSelectFn).not.toHaveBeenCalledWith("edit", expect.anything());
    expect(onSelectFn).toHaveBeenCalled();
  });
});
