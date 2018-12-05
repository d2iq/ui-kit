import React from "react";

class DropdownStuffContainer extends React.Component<
  { children: React.ReactNode | string },
  {}
> {
  render() {
    const style = {
      minWidth: "250px",
      border: "1px solid #ccc",
      backgroundColor: "#fff",
      padding: "5px"
    };

    return <div style={style}>{this.props.children}</div>;
  }
}

export default DropdownStuffContainer;
