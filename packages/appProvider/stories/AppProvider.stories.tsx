import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { AppProvider } from "../index";
import CustomLinkComponent from "./helpers/customLink";
import SecondardButton from "../../button/components/SecondaryButton";

const readme = require("../README.md");

import { red } from "../../design-tokens/build/js/designTokens";

storiesOf("Utils|AppProvider", module)
  .addDecorator(withReadme([readme]))
  .add("link delegate", () => (
    <AppProvider
      theme={{
        colors: {
          textColorInteractive: red
        }
      }}
      linkComponent={CustomLinkComponent}
    >
      <h1>Red-Themed Example App</h1>
      <p>
        Buttons with a url prop render a link which delegates to the component
        specified by the linkComponent
      </p>
      <SecondardButton url="http://unused.example">Hello World</SecondardButton>
    </AppProvider>
  ));
