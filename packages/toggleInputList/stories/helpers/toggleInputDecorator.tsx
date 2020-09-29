import * as React from "react";

export const toggleInputDecorator = storyFn => (
  <>
    <p>
      Use the Knobs panel to toggle between radio inputs and checkbox inputs
    </p>
    {storyFn()}
  </>
);
