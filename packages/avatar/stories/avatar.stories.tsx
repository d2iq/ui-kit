import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { Avatar } from "../index";
import {
  iconSizeXs,
  iconSizeS,
  iconSizeM,
  iconSizeL,
  iconSizeXl
} from "../../design-tokens/build/js/designTokens";
import { serviceImg } from "./helpers/serviceImg";

import readme from "../README.md";
const iconSizes = [iconSizeXs, iconSizeS, iconSizeM, iconSizeL, iconSizeXl];

storiesOf("Graphic elements|Avatar", module)
  .addParameters({
    readme: {
      sidebar: readme,
    },
  })
  .add("default", () => <Avatar src={serviceImg} label="Kubernetes" />)
  .add("all sizes", () => (
    <div
      style={{
        alignItems: "center",
        display: "grid",
        gridTemplateColumns: `${iconSizes.join(" ")}`,
        gridGap: "1rem"
      }}
    >
      <Avatar src={serviceImg} label="Kubernetes" size="xs" />
      <Avatar src={serviceImg} label="Kubernetes" size="s" />
      <Avatar src={serviceImg} label="Kubernetes" size="m" />
      <Avatar src={serviceImg} label="Kubernetes" size="l" />
      <Avatar src={serviceImg} label="Kubernetes" size="xl" />
    </div>
  ))
  .add("empty src", () => <Avatar src="" label="Kubernetes" size="xl" />);
