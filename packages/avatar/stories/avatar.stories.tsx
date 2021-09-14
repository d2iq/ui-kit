import * as React from "react";
import { Avatar } from "../index";
import {
  iconSizeXs,
  iconSizeS,
  iconSizeM,
  iconSizeL,
  iconSizeXl
} from "../../design-tokens/build/js/designTokens";
import { serviceImg } from "./helpers/serviceImg";

const iconSizes = [iconSizeXs, iconSizeS, iconSizeM, iconSizeL, iconSizeXl];

export default {
  title: "Graphic Elements/Avatar",
  component: Avatar
};

export const Default = () => <Avatar src={serviceImg} label="Kubernetes" />;

export const AllSizes = () => (
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
);

export const EmptySrc = () => <Avatar src="" label="Kubernetes" size="xl" />;
