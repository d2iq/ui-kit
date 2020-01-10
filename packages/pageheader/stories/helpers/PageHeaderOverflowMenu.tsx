import * as React from "react";
import { SecondaryButton } from "../../../button";
import { Popover, PopoverListItem } from "../../../popover";
import { SystemIcons } from "../../../icons/dist/system-icons-enum";
import Dropdownable, {
  Direction
} from "../../../dropdownable/components/Dropdownable";

class PageHeaderOverflowMenu extends React.PureComponent<
  {},
  { open: boolean }
> {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleClose() {
    this.setState({
      open: false
    });
  }

  handleOpen() {
    this.setState({ open: true });
  }

  render() {
    return (
      <Dropdownable
        open={this.state.open}
        onClose={this.handleClose}
        preferredDirections={[Direction.BottomRight, Direction.BottomLeft]}
        dropdown={
          <Popover key="Dropdown">
            <PopoverListItem index={0} listLength={3}>
              Overflow One
            </PopoverListItem>
            <PopoverListItem index={1} listLength={3}>
              Overflow Two
            </PopoverListItem>
            <PopoverListItem index={2} listLength={3}>
              Overflow Three
            </PopoverListItem>
          </Popover>
        }
      >
        <SecondaryButton
          iconStart={SystemIcons.EllipsisVertical}
          onClick={this.handleOpen}
        />
      </Dropdownable>
    );
  }
}

export default PageHeaderOverflowMenu;
