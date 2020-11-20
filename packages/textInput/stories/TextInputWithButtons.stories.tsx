import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { TextInputWithButtons } from "../index";
import { inputStoryWrapper } from "../../../decorators/inputStoryWrapper";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { TextInputButton } from "../../textInputButton";
import { Icon } from "../../icon";

import readme from "../README.md";

const btnClickFn = () => {
  alert("button one clicked");
};

storiesOf("Forms|TextInputWithButtons", module)
  .addParameters({
    readme: {
      sidebar: readme,
    },
  })
  .addDecorator(inputStoryWrapper)
  .addParameters({
    info: {
      propTables: [TextInputWithButtons, TextInputButton]
    }
  })
  .add("one button", () => (
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
  ))
  .add("two buttons", () => (
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
  ))
  .add("with an icon", () => (
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
  ))
  .add("with a custom colored icon", () => (
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
  ));
