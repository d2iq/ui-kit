import * as React from "react";
import SlideToggle from "../components/SlideToggle";
import { GridList, Text } from "../..";
import { InputAppearance } from "../../shared/types/inputAppearance";

export const Primary = () => {
  const [checked, setChecked] = React.useState(false);
  const handleClick = () => {
    setChecked(!checked);
  };
  return (
    <SlideToggle
      id="toggle"
      inputLabel="Normal toggle"
      value="unchecked"
      checked={checked}
      onClick={handleClick}
    />
  );
};

export const Appearances = () => {
  return (
    <GridList columnCount={3}>
      <Text>Standard</Text>
      <SlideToggle
        id="std-unchecked"
        inputLabel="Unchecked"
        value="unchecked"
        checked={false}
      />
      <SlideToggle
        id="std-checked"
        inputLabel="Checked"
        value="unchecked"
        checked={true}
      />
      <Text>Error</Text>
      <SlideToggle
        id="err-unchecked"
        appearance={InputAppearance.Error}
        inputLabel="Unchecked"
        value="unchecked"
        checked={false}
      />
      <SlideToggle
        id="err-checked"
        appearance={InputAppearance.Error}
        inputLabel="Checked"
        value="unchecked"
        checked={true}
      />
      <Text>Success</Text>
      <SlideToggle
        id="err-unchecked"
        appearance={InputAppearance.Success}
        inputLabel="Unchecked"
        value="unchecked"
        checked={false}
      />
      <SlideToggle
        id="err-checked"
        appearance={InputAppearance.Success}
        inputLabel="Checked"
        value="unchecked"
        checked={true}
      />
      <Text>Disabled</Text>
      <SlideToggle
        id="dis-unchecked"
        disabled={true}
        inputLabel="Unchecked"
        value="unchecked"
        checked={false}
      />
      <SlideToggle
        id="dis-checked"
        disabled={true}
        inputLabel="Checked"
        value="unchecked"
        checked={true}
      />
    </GridList>
  );
};

export const HintText = () => {
  const [checked, setChecked] = React.useState(false);
  const handleClick = () => {
    setChecked(!checked);
  };
  return (
    <SlideToggle
      id="toggle"
      inputLabel="toggle w/ hint text"
      hintContent="This is some hint text."
      value="unchecked"
      checked={checked}
      onClick={handleClick}
    />
  );
};

export const Errors = () => (
  <SlideToggle
    id="toggle"
    appearance={InputAppearance.Error}
    inputLabel="toggle with errors"
    value="unchecked"
    checked={true}
    errors={["this is an error.", "this is another."]}
  />
);

export const HintTextAndErrors = () => (
  <SlideToggle
    id="toggle"
    appearance={InputAppearance.Error}
    inputLabel="toggle with errors"
    hintContent="This is some hint text."
    value="unchecked"
    checked={true}
    errors={["this is an error.", "this is another."]}
  />
);

export default {
  title: "Forms|SlideToggle",
  component: SlideToggle
};
