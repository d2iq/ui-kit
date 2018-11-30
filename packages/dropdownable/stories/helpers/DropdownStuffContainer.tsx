import React from "react";

class DropdownStuffContainer extends React.Component<
  { width?: string; children: React.ReactNode | string },
  {}
> {
  render() {
    const style = {
      width: this.props.width || "inherit",
      height: "180px",
      border: "1px solid #ccc",
      backgroundColor: "#fff"
    };

    return <div style={style}>{this.props.children}</div>;
  }
}

export default DropdownStuffContainer;
