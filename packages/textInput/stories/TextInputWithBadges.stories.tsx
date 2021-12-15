import * as React from "react";
import { Story, Meta } from "@storybook/react";
import { TextInputWithBadges } from "../index";
import { InputStoryWrapper } from "../../../decorators/inputStoryWrapper";
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
  decorators: [Story => <InputStoryWrapper>{Story()}</InputStoryWrapper>],
  component: TextInputWithBadges,
  argTypes: {
    hintContent: {
      inputLabel: {
        control: {
          type: "text"
        }
      },
      control: {
        type: "text"
      }
    },
    tooltipContent: {
      control: {
        type: "text"
      }
    },
    errors: {
      control: { disable: true }
    }
  },
  args: {
    appearance: "standard",
    inputLabel: "Default Input Label"
  }
} as Meta;

const Template: Story = args => (
  <TextInputWithBadgesStoryHelper>
    {({ badges, badgeChangeHandler }) => (
      <TextInputWithBadges
        id="default"
        inputLabel="Default Input Label"
        onBadgeChange={badgeChangeHandler}
        badges={defaultBadges}
        {...args}
      />
    )}
  </TextInputWithBadgesStoryHelper>
);

export const Default = Template.bind({});

export const DontAddBadgeOnBlur = args => (
  <TextInputWithBadgesStoryHelper>
    {({ badges, badgeChangeHandler }) => (
      <TextInputWithBadges
        id="noAddOnBlur"
        inputLabel="Don't add badge on blur"
        onBadgeChange={badgeChangeHandler}
        badges={badges}
        addBadgeOnBlur={false}
        {...args}
      />
    )}
  </TextInputWithBadgesStoryHelper>
);

export const UsedWithTypeaheadPrefilledWBadges = args => (
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
              {...args}
            />
          }
          onSelect={selectHandler}
        />
      );
    }}
  </TextInputWithBadgesTypeaheadStoryHelper>
);
