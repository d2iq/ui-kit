import * as React from "react";

import { UIKitProvider } from "../index";
import CustomLinkComponent from "./helpers/customLink";
import SecondaryButton from "../../button/components/SecondaryButton";

import { red } from "../../design-tokens/build/js/designTokens";

export default {
  title: "Utils/UIKitProvider",
  component: UIKitProvider
};

export const LinkDelegate = () => (
  <UIKitProvider
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
    <SecondaryButton url="http://unused.example">Hello World</SecondaryButton>
  </UIKitProvider>
);
