import * as React from "react";
import { TextInputWithButtons } from "../index";
import { inputStoryWrapper } from "../../../decorators/inputStoryWrapper";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { TextInputButton } from "../../textInputButton";
import { Icon } from "../../icon";

const btnClickFn = () => {
  alert("button one clicked");
};

export default {
  title: "Forms/TextInputWithButtons",
  decorators: [inputStoryWrapper],
  component: TextInputWithButtons
};

export const OneButton = () => (
  <TextInputWithButtons
    id="oneBtn"
    inputLabel="One button"
    buttons={[
      <TextInputButton
        key={0}
        shape={SystemIcons.Close}
        onClick={btnClickFn}
        aria-label="Clear input"
      />
    ]}
  />
);

export const TwoButtons = () => (
  <TextInputWithButtons
    id="twoBtn"
    inputLabel="Two buttons"
    buttons={[
      <TextInputButton
        key={0}
        shape={SystemIcons.Close}
        onClick={btnClickFn}
        aria-label="Clear input"
      />,
      <TextInputButton
        key={1}
        shape={SystemIcons.Funnel}
        onClick={btnClickFn}
        aria-label="Activate filter"
      />
    ]}
  />
);

export const WithAnIcon = () => (
  <TextInputWithButtons
    id="withIcon"
    inputLabel="With icon"
    iconStart={<Icon shape={SystemIcons.Search} />}
    buttons={[
      <TextInputButton
        key={0}
        shape={SystemIcons.Close}
        onClick={btnClickFn}
        aria-label="Clear input"
      />
    ]}
  />
);

export const WithACustomColoredIcon = () => (
  <TextInputWithButtons
    id="withIcon.colored"
    inputLabel="With colored icon"
    iconStart={<Icon shape={SystemIcons.Search} />}
    buttons={[
      <TextInputButton
        key={0}
        color="red"
        shape={SystemIcons.Close}
        onClick={btnClickFn}
        aria-label="Clear input"
      />
    ]}
  />
);
