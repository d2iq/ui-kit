import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";

import { PageHeader } from "../index";
import { PrimaryButton, SecondaryButton } from "../../button";
import PageHeaderOverflowMenu from "./helpers/PageHeaderOverflowMenu";

const readme = require("../README.md");
const action = () => alert("Action triggered");

storiesOf("PageHeader", module)
  .addDecorator(withReadme([readme]))
  .add("default", () => (
    <PageHeader
      breadcrumbElements={[
        <div key="Universe">Universe</div>,
        <div key="MilkyWay">Milky Way</div>,
        <div key="Earth">Earth</div>
      ]}
      actions={[
        <SecondaryButton onClick={action} key="Action2">
          Secondary
        </SecondaryButton>,
        <PrimaryButton onClick={action} key="Action1">
          Primary
        </PrimaryButton>
      ]}
    />
  ))
  .add("with overflow menu", () => (
    <PageHeader
      breadcrumbElements={[
        <div key="Universe">Universe</div>,
        <div key="MilkyWay">Milky Way</div>,
        <div key="Earth">Earth</div>
      ]}
      actions={[
        <SecondaryButton onClick={action} key="Action2">
          Secondary
        </SecondaryButton>,
        <PrimaryButton onClick={action} key="Action1">
          Primary
        </PrimaryButton>,
        <PageHeaderOverflowMenu key="OverflowMenu" />
      ]}
    />
  ))
  .add("without actions", () => (
    <PageHeader
      breadcrumbElements={[
        <div key="Universe">Universe</div>,
        <div key="MilkyWay">Milky Way</div>,
        <div key="Earth">Earth</div>
      ]}
    />
  ));
