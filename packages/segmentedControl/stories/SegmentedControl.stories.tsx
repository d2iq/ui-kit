import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { SegmentedControl } from "../index";
import SegmentedControlButton from "../components/SegmentedControlButton";
import SegmentedControlStoryHelper from "./helpers/SegmentedControlStoryHelper";
import { Icon } from "../../icon";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { iconSizeXs } from "../../design-tokens/build/js/designTokens";

const readme = require("../README.md");

storiesOf("Forms|SegmentedControl", module)
  .addDecorator(withReadme([readme]))
  .add("default", () => (
    <SegmentedControlStoryHelper>
      {({ changeHandler, selectedSegment }) => (
        <SegmentedControl
          id="default"
          selectedSegment={selectedSegment}
          onSelect={changeHandler}
        >
          <SegmentedControlButton value="exosphere">
            Exosphere
          </SegmentedControlButton>
          <SegmentedControlButton value="thermosphere">
            Thermosphere
          </SegmentedControlButton>
          <SegmentedControlButton value="mesosphere">
            Mesosphere
          </SegmentedControlButton>
          <SegmentedControlButton value="stratosphere">
            Stratosphere
          </SegmentedControlButton>
        </SegmentedControl>
      )}
    </SegmentedControlStoryHelper>
  ))
  .add("with a selected segment", () => (
    <SegmentedControlStoryHelper selectedSegment="exosphere">
      {({ changeHandler, selectedSegment }) => (
        <SegmentedControl
          id="selectedSegment"
          selectedSegment={selectedSegment}
          onSelect={changeHandler}
        >
          <SegmentedControlButton value="exosphere">
            Exosphere
          </SegmentedControlButton>
          <SegmentedControlButton value="thermosphere">
            Thermosphere
          </SegmentedControlButton>
          <SegmentedControlButton value="mesosphere">
            Mesosphere
          </SegmentedControlButton>
          <SegmentedControlButton value="stratosphere">
            Stratosphere
          </SegmentedControlButton>
        </SegmentedControl>
      )}
    </SegmentedControlStoryHelper>
  ))
  .add("icon-only button labels", () => (
    <SegmentedControlStoryHelper>
      {({ changeHandler, selectedSegment }) => (
        <SegmentedControl
          id="nontextChildren"
          selectedSegment={selectedSegment}
          onSelect={changeHandler}
        >
          <SegmentedControlButton value="list">
            <Icon
              ariaLabel="list view"
              shape={SystemIcons.List}
              size={iconSizeXs}
            />
          </SegmentedControlButton>
          <SegmentedControlButton value="charts">
            <Icon
              ariaLabel="chart view"
              shape={SystemIcons.Donut}
              size={iconSizeXs}
            />
          </SegmentedControlButton>
        </SegmentedControl>
      )}
    </SegmentedControlStoryHelper>
  ))
  .add("with tooltip content", () => (
    <SegmentedControlStoryHelper>
      {({ changeHandler, selectedSegment }) => (
        <SegmentedControl
          id="nontextChildren"
          selectedSegment={selectedSegment}
          onSelect={changeHandler}
        >
          <SegmentedControlButton
            value="list"
            tooltipContent="Turn on the list"
          >
            <Icon
              ariaLabel="list view"
              shape={SystemIcons.List}
              size={iconSizeXs}
            />
          </SegmentedControlButton>
          <SegmentedControlButton
            value="charts"
            tooltipContent="Turn on the charts"
          >
            <Icon
              ariaLabel="chart view"
              shape={SystemIcons.Donut}
              size={iconSizeXs}
            />
          </SegmentedControlButton>
        </SegmentedControl>
      )}
    </SegmentedControlStoryHelper>
  ))
  .add(
    "custom SegmentedControlButton id prop",
    () => (
      <SegmentedControlStoryHelper>
        {({ changeHandler, selectedSegment }) => (
          <SegmentedControl
            id="test"
            selectedSegment={selectedSegment}
            onSelect={changeHandler}
          >
            <SegmentedControlButton id="btn.exosphere" value="exosphere">
              Exosphere
            </SegmentedControlButton>
            <SegmentedControlButton id="btn.thermosphere" value="thermosphere">
              Thermosphere
            </SegmentedControlButton>
            <SegmentedControlButton id="btn.mesosphere" value="mesosphere">
              Mesosphere
            </SegmentedControlButton>
            <SegmentedControlButton id="btn.stratosphere" value="stratosphere">
              Stratosphere
            </SegmentedControlButton>
          </SegmentedControl>
        )}
      </SegmentedControlStoryHelper>
    ),
    {
      info: {
        text:
          "This example has no visual impacts. The only change is that the id attribute on the <input> element is set to whatever was passed to the SegmentedControlButton id prop"
      }
    }
  );
