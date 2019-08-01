import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import styled from "react-emotion";
import { coreColors } from "../../design-tokens/build/js/colorsForStyleguide";
import { Tooltip } from "../../tooltip";
import { themeBorder } from "../../design-tokens/build/js/designTokens";

const {
  white,
  black,
  cyan,
  // colors below this line are just aliases
  success,
  error,
  warning,
  accent,
  ...colors
} = coreColors();

interface CellProps {
  background?: string;
}

const Grid = styled("div")`
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  max-width: 100%;
  padding-bottom: 3rem;
`;

const spread = "1";

const Cell = styled("div")`
  background-color: ${(props: CellProps) =>
    props.background ? props.background : "transparent"};
  color: transparent;
  height: 4rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  &:hover {
    color: ${black};
    text-shadow: 1px 1px ${spread}px ${white}, 1px -1px ${spread}px ${white},
      -1px 1px ${spread}px ${white}, -1px -1px ${spread}px ${white};
  }
`;

const ColorTable = () => (
  <React.Fragment>
    <Grid>
      {Object.entries(colors).map(([name, color]) => (
        <Tooltip trigger={<Cell background={color} />} id={name}>
          {name}
        </Tooltip>
      ))}
    </Grid>
    <Grid>
      <Tooltip trigger={<Cell background={cyan} />} id="cyan">
        cyan
      </Tooltip>
      <Tooltip
        trigger={
          <div style={{ border: `1px solid ${themeBorder}` }}>
            <Cell background={white} />
          </div>
        }
        id="white"
      >
        white
      </Tooltip>
      <Tooltip trigger={<Cell background={black} />} id="black">
        black
      </Tooltip>
    </Grid>
  </React.Fragment>
);

storiesOf("Colors", module)
  .addDecorator(withReadme([``]))
  .add("Color table", () => <ColorTable />);
