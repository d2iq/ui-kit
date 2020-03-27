import * as React from "react";
import { withKnobs, number, select } from "@storybook/addon-knobs";
import styled from "react-emotion";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import GridList from "../components/GridList";
import { themeBorder } from "../../../../design-tokens/build/js/designTokens";
import { SpaceSize } from "../../../../shared/styles/styleUtils/modifiers/modifierUtils";

const BorderedBox = styled("div")`
  border: 1px solid ${themeBorder};
`;

const readme = require("../README.md");
const gridChildren = new Array(12).fill(0).map((_, i) => (
  <li key={i}>
    <BorderedBox>item</BorderedBox>
  </li>
));

storiesOf("Layout|GridList", module)
  .addDecorator(withReadme([readme]))
  .addDecorator(withKnobs)
  .add("columnCount", () => {
    const columnCount = number("columnCount", 3);
    return (
      <div>
        <p>Use the Knobs panel to adjust the number of columns per row</p>
        <GridList columnCount={columnCount}>{gridChildren}</GridList>
      </div>
    );
  })
  .add("responsive columnCount", () => (
    <div>
      <p>Change the width of the viewport to see the column count change</p>
      <GridList columnCount={{ small: 1, medium: 2, large: 3 }}>
        {gridChildren}
      </GridList>
    </div>
  ))
  .add("gutterSize", () => {
    const gutterSizes = {
      xxs: "xxs",
      xs: "xs",
      s: "s",
      m: "m",
      l: "l",
      xl: "xl",
      xxl: "xxl",
      none: "none"
    };
    const gutterSize = select("gutterSizes", gutterSizes, "m");
    return (
      <div>
        <p>Use the Knobs panel to adjust the gutter size</p>
        <GridList gutterSize={gutterSize as SpaceSize} columnCount={3}>
          {gridChildren}
        </GridList>
      </div>
    );
  })
  .add("responsive gutterSize", () => (
    <div>
      <p>Change the width of the viewport to see the gutter size change</p>
      <GridList
        gutterSize={{ small: "m", medium: "l", large: "xl" }}
        columnCount={3}
      >
        {gridChildren}
      </GridList>
    </div>
  ));
