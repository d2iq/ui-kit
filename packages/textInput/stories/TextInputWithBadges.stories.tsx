import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { TextInputWithBadges } from "../index";
import { inputStoryWrapper } from "../../../decorators/inputStoryWrapper";
import TextInputWithBadgesStoryHelper from "./helpers/TextInputWithBadgesStoryHelper";
import { Typeahead } from "../../typeahead";
import TextInputWithBadgesTypeaheadStoryHelper from "./helpers/TextInputWithBadgesTypeaheadStoryHelper";

const readme = require("../README.md");

const typeaheadItems = [
  { value: "exosphere", label: "Exosphere" },
  { value: "thermosphere", label: "Thermosphere" },
  { value: "mesosphere", label: "Mesosphere" },
  { value: "stratosphere", label: "Stratosphere" },
  { value: "ozone-layer", label: "Ozone Layer" },
  { value: "troposphere", label: "Troposphere" }
];

const defaultBadges = [
  {
    label: "Badge one",
    value: "badge-one"
  },
  {
    label: "Badge two",
    value: "badge-two"
  },
  {
    label: "Badge three",
    value: "badge-three"
  }
];

storiesOf("Forms/TextInputWithBadges", module)
  .addDecorator(withReadme([readme]))
  .addDecorator(inputStoryWrapper)
  .add("default", () => (
    <TextInputWithBadgesStoryHelper>
      {({ badges, badgeChangeHandler }) => (
        <TextInputWithBadges
          id="default"
          inputLabel="Default"
          onBadgeChange={badgeChangeHandler}
          badges={badges}
        />
      )}
    </TextInputWithBadgesStoryHelper>
  ))
  .add("pre-filled w/ badges", () => (
    <TextInputWithBadgesStoryHelper badges={defaultBadges}>
      {({ badges, badgeChangeHandler }) => (
        <TextInputWithBadges
          id="prefilled"
          inputLabel="Pre-filled"
          badges={badges}
          onBadgeChange={badgeChangeHandler}
        />
      )}
    </TextInputWithBadgesStoryHelper>
  ))
  .add("custom badge appearance", () => (
    <TextInputWithBadgesStoryHelper badges={defaultBadges}>
      {({ badges, badgeChangeHandler }) => (
        <TextInputWithBadges
          id="appearance"
          inputLabel="Success badges"
          badges={badges}
          onBadgeChange={badgeChangeHandler}
          badgeAppearance="success"
        />
      )}
    </TextInputWithBadgesStoryHelper>
  ))
  .add("used w/ a Typeahead", () => (
    <TextInputWithBadgesTypeaheadStoryHelper items={typeaheadItems}>
      {({
        items,
        selectHandler,
        selectedItems,
        badgeChangeHandler,
        badges
      }) => {
        return (
          <Typeahead
            // removes items from the Typeahead that already exist in the badge input
            items={items.filter(
              item => !badges.map(badge => badge.value).includes(item.value)
            )}
            selectedItems={selectedItems}
            keepOpenOnSelect={false}
            resetInputOnSelect={true}
            textField={
              <TextInputWithBadges
                id="typeahead.default"
                inputLabel="Typeahead"
                placeholder={badges.length ? "" : "Placeholder"}
                badges={badges}
                onBadgeChange={badgeChangeHandler}
              />
            }
            onSelect={selectHandler}
          />
        );
      }}
    </TextInputWithBadgesTypeaheadStoryHelper>
  ))
  .add("used w/ a Typeahead + prefilled w/ badges", () => (
    <TextInputWithBadgesTypeaheadStoryHelper
      items={typeaheadItems}
      badges={[typeaheadItems[0], typeaheadItems[1], typeaheadItems[2]]}
    >
      {({
        items,
        selectHandler,
        selectedItems,
        badgeChangeHandler,
        badges
      }) => {
        return (
          <Typeahead
            // removes items from the Typeahead that already exist in the badge input
            items={items.filter(
              item => !badges.map(badge => badge.value).includes(item.value)
            )}
            selectedItems={selectedItems}
            keepOpenOnSelect={false}
            resetInputOnSelect={true}
            textField={
              <TextInputWithBadges
                id="typeahead.prefilled"
                inputLabel="Pre-filled Typeahead"
                placeholder={badges.length ? "" : "Placeholder"}
                badges={badges}
                onBadgeChange={badgeChangeHandler}
              />
            }
            onSelect={selectHandler}
          />
        );
      }}
    </TextInputWithBadgesTypeaheadStoryHelper>
  ));
