import * as React from "react";

const getSubChildren = child => child && child.props && child.props.children;
const getReactChildrenText = (children: React.ReactChildren) => {
  return React.Children.toArray(children)
    .reduce(
      (flattened, child) => [
        ...flattened,
        React.isValidElement(child) && child.type !== "string"
          ? getReactChildrenText(getSubChildren(child))
          : child
      ],
      new Array()
    )
    .join(" ")
    .replace(/ +(?= )/g, ""); // remove duplicate spaces if tags are inline like <span>Lorem</span>[SPACE]<span>ipsum</span>
};

export default getReactChildrenText;
