import * as React from "react";
import { TextInputWithBadges } from "../index";
import { inputStoryWrapper } from "../../../decorators/inputStoryWrapper";
import TextInputWithBadgesStoryHelper from "./helpers/TextInputWithBadgesStoryHelper";
import { Typeahead } from "../../typeahead";
import TextInputWithBadgesTypeaheadStoryHelper from "./helpers/TextInputWithBadgesTypeaheadStoryHelper";

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

export default {
  title: "Forms/TextInputWithBadges",
  decorators: [inputStoryWrapper],
  component: TextInputWithBadges
};

export const Default = () => (
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
);

export const PreFilledWithBadges = () => (
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
);

export const CustomBadgeAppearance = () => (
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
);

export const DontAddBadgeOnBlur = () => (
  <TextInputWithBadgesStoryHelper>
    {({ badges, badgeChangeHandler }) => (
      <TextInputWithBadges
        id="noAddOnBlur"
        inputLabel="Don't add badge on blur"
        onBadgeChange={badgeChangeHandler}
        badges={badges}
        addBadgeOnBlur={false}
      />
    )}
  </TextInputWithBadgesStoryHelper>
);

export const UsedWithTypeahead = () => (
  <TextInputWithBadgesTypeaheadStoryHelper items={typeaheadItems}>
    {({ items, selectHandler, selectedItems, badgeChangeHandler, badges }) => {
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
);

export const UsedWithTypeaheadPrefilledWBadges = () => (
  <TextInputWithBadgesTypeaheadStoryHelper
    items={typeaheadItems}
    badges={[typeaheadItems[0], typeaheadItems[1], typeaheadItems[2]]}
  >
    {({ items, selectHandler, selectedItems, badgeChangeHandler, badges }) => {
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
);
