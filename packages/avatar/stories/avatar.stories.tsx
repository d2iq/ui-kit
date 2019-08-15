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

const readme = require("../README.md");
const iconSizes = [iconSizeXs, iconSizeS, iconSizeM, iconSizeL, iconSizeXl];

storiesOf("Avatar", module)
  .addDecorator(withReadme([readme]))
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
      <Avatar src={serviceImg} label="Kubernetes" size={iconSizeXs} />
      <Avatar src={serviceImg} label="Kubernetes" size={iconSizeS} />
      <Avatar src={serviceImg} label="Kubernetes" size={iconSizeM} />
      <Avatar src={serviceImg} label="Kubernetes" size={iconSizeL} />
      <Avatar src={serviceImg} label="Kubernetes" size={iconSizeXl} />
    </div>
  ))
  .add("empty src", () => (
    <Avatar src="" label="Kubernetes" size={iconSizeXl} />
  ));
