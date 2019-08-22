import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import {
  Dropdown,
  DropdownActions,
  DropdownActionItem,
  DropdownActionItemIcon,
  DropdownActionItemAvatar
} from "../index";
import { DropdownItemAppearances } from "../../shared/types/dropdownItemAppearances";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { grafanaLogo, kibanaLogo, kubernetesLogo } from "./avatarImgs";
import PrimaryDropdownButton from "../../button/components/PrimaryDropdownButton";

const readme = require("../README.md");

storiesOf("Dropdown", module)
  .addDecorator(withReadme([readme]))
  .add("default", () => (
    <Dropdown trigger={<PrimaryDropdownButton>Menu</PrimaryDropdownButton>}>
      <DropdownActions>
        <DropdownActionItem key="edit" value="edit">
          Edit
        </DropdownActionItem>
        <DropdownActionItem key="scale" value="scale">
          Scale
        </DropdownActionItem>
        <DropdownActionItem key="restart" value="restart">
          Restart
        </DropdownActionItem>
        <DropdownActionItem key="stop" value="stop">
          Stop
        </DropdownActionItem>
      </DropdownActions>
    </Dropdown>
  ))
  .add("with dangerous action", () => (
    <Dropdown trigger={<PrimaryDropdownButton>Menu</PrimaryDropdownButton>}>
      <DropdownActions>
        <DropdownActionItem key="edit" value="edit">
          Edit
        </DropdownActionItem>
        <DropdownActionItem key="scale" value="scale">
          Scale
        </DropdownActionItem>
        <DropdownActionItem key="restart" value="restart">
          Restart
        </DropdownActionItem>
        <DropdownActionItem key="stop" value="stop">
          Stop
        </DropdownActionItem>
        <DropdownActionItem
          appearance={DropdownItemAppearances.DANGER}
          key="delete"
          value="delete"
        >
          Delete
        </DropdownActionItem>
      </DropdownActions>
    </Dropdown>
  ))
  .add("initialIsOpen", () => (
    <Dropdown
      initialIsOpen={true}
      trigger={<PrimaryDropdownButton>Menu</PrimaryDropdownButton>}
    >
      <DropdownActions>
        <DropdownActionItem key="edit" value="edit">
          Edit
        </DropdownActionItem>
        <DropdownActionItem key="scale" value="scale">
          Scale
        </DropdownActionItem>
        <DropdownActionItem key="restart" value="restart">
          Restart
        </DropdownActionItem>
        <DropdownActionItem key="stop" value="stop">
          Stop
        </DropdownActionItem>
      </DropdownActions>
    </Dropdown>
  ))
  .add("menu has max height", () => (
    <Dropdown
      menuMaxHeight={90}
      trigger={<PrimaryDropdownButton>Menu</PrimaryDropdownButton>}
    >
      <DropdownActions>
        <DropdownActionItem key="edit" value="edit">
          Edit
        </DropdownActionItem>
        <DropdownActionItem key="scale" value="scale">
          Scale
        </DropdownActionItem>
        <DropdownActionItem key="restart" value="restart">
          Restart
        </DropdownActionItem>
        <DropdownActionItem key="stop" value="stop">
          Stop
        </DropdownActionItem>
      </DropdownActions>
    </Dropdown>
  ))
  .add("with onSelect callback", () => {
    const onSelect = selectedItem => {
      alert(`onSelect called with:
        
      • selectedItem: "${selectedItem}"
      • stateAndHelpers: Downshift state and helper fns
      `);
    };

    return (
      <Dropdown
        onSelect={onSelect}
        trigger={<PrimaryDropdownButton>Menu</PrimaryDropdownButton>}
      >
        <DropdownActions>
          <DropdownActionItem key="edit" value="edit">
            Edit
          </DropdownActionItem>
          <DropdownActionItem key="scale" value="scale">
            Scale
          </DropdownActionItem>
          <DropdownActionItem key="restart" value="restart">
            Restart
          </DropdownActionItem>
          <DropdownActionItem key="stop" value="stop">
            Stop
          </DropdownActionItem>
        </DropdownActions>
      </Dropdown>
    );
  })
  .add("with sections", () => (
    <Dropdown trigger={<PrimaryDropdownButton>Menu</PrimaryDropdownButton>}>
      <DropdownActions>
        <DropdownActionItem key="edit" value="edit">
          Edit
        </DropdownActionItem>
        <DropdownActionItem key="scale" value="scale">
          Scale
        </DropdownActionItem>
      </DropdownActions>

      <DropdownActions>
        <DropdownActionItem key="restart" value="restart">
          Restart
        </DropdownActionItem>
        <DropdownActionItem key="restartDelay" value="restartDelay">
          Restart Delay
        </DropdownActionItem>
      </DropdownActions>

      <DropdownActions>
        <DropdownActionItem key="pause" value="pause">
          Pause
        </DropdownActionItem>
        <DropdownActionItem key="stop" value="stop">
          Stop
        </DropdownActionItem>
      </DropdownActions>
    </Dropdown>
  ))
  .add("with icons and avatars (position=start)", () => (
    <Dropdown trigger={<PrimaryDropdownButton>Menu</PrimaryDropdownButton>}>
      <DropdownActions>
        <DropdownActionItem key="edit" value="edit">
          <DropdownActionItemIcon shape={SystemIcons.Pencil} />
          Edit
        </DropdownActionItem>
        <DropdownActionItem key="scale" value="scale">
          <DropdownActionItemIcon shape={SystemIcons.ArrowUp} />
          Scale
        </DropdownActionItem>
        <DropdownActionItem key="restart" value="restart">
          <DropdownActionItemIcon shape={SystemIcons.Repeat} />
          Restart
        </DropdownActionItem>
        <DropdownActionItem key="stop" value="stop">
          <DropdownActionItemIcon shape={SystemIcons.CircleMinus} />
          Stop
        </DropdownActionItem>
      </DropdownActions>

      <DropdownActions>
        <DropdownActionItem key="grafana" value="grafana">
          <DropdownActionItemAvatar src={grafanaLogo} />
          Grafana
        </DropdownActionItem>
        <DropdownActionItem key="kibana" value="kibana">
          <DropdownActionItemAvatar src={kibanaLogo} />
          Kibana
        </DropdownActionItem>
        <DropdownActionItem key="kubernetes" value="kubernetes">
          <DropdownActionItemAvatar src={kubernetesLogo} />
          Kubernetes
        </DropdownActionItem>
      </DropdownActions>
    </Dropdown>
  ))
  .add("with icons and avatars (position=end)", () => (
    <Dropdown trigger={<PrimaryDropdownButton>Menu</PrimaryDropdownButton>}>
      <DropdownActions>
        <DropdownActionItem key="edit" value="edit">
          <DropdownActionItemIcon position="end" shape={SystemIcons.Pencil} />
          Edit
        </DropdownActionItem>
        <DropdownActionItem key="scale" value="scale">
          <DropdownActionItemIcon position="end" shape={SystemIcons.ArrowUp} />
          Scale
        </DropdownActionItem>
        <DropdownActionItem key="restart" value="restart">
          <DropdownActionItemIcon position="end" shape={SystemIcons.Repeat} />
          Restart
        </DropdownActionItem>
        <DropdownActionItem key="stop" value="stop">
          <DropdownActionItemIcon
            position="end"
            shape={SystemIcons.CircleMinus}
          />
          Stop
        </DropdownActionItem>
      </DropdownActions>

      <DropdownActions>
        <DropdownActionItem key="grafana" value="grafana">
          <DropdownActionItemAvatar position="end" src={grafanaLogo} />
          Grafana
        </DropdownActionItem>
        <DropdownActionItem key="kibana" value="kibana">
          <DropdownActionItemAvatar position="end" src={kibanaLogo} />
          Kibana
        </DropdownActionItem>
        <DropdownActionItem key="kubernetes" value="kubernetes">
          <DropdownActionItemAvatar position="end" src={kubernetesLogo} />
          Kubernetes
        </DropdownActionItem>
      </DropdownActions>
    </Dropdown>
  ))
  .add("with icons and avatars (position=start&end)", () => (
    <Dropdown trigger={<PrimaryDropdownButton>Menu</PrimaryDropdownButton>}>
      <DropdownActions>
        <DropdownActionItem key="edit" value="edit">
          <DropdownActionItemIcon position="start" shape={SystemIcons.Pencil} />
          Edit
          <DropdownActionItemIcon
            position="end"
            shape={SystemIcons.TriangleRight}
          />
        </DropdownActionItem>
        <DropdownActionItem key="scale" value="scale">
          <DropdownActionItemIcon
            position="start"
            shape={SystemIcons.ArrowUp}
          />
          Scale
          <DropdownActionItemIcon
            position="end"
            shape={SystemIcons.TriangleRight}
          />
        </DropdownActionItem>
        <DropdownActionItem key="restart" value="restart">
          <DropdownActionItemIcon position="start" shape={SystemIcons.Repeat} />
          Restart
          <DropdownActionItemIcon
            position="end"
            shape={SystemIcons.TriangleRight}
          />
        </DropdownActionItem>
        <DropdownActionItem key="stop" value="stop">
          <DropdownActionItemIcon
            position="start"
            shape={SystemIcons.CircleMinus}
          />
          Stop
          <DropdownActionItemIcon
            position="end"
            shape={SystemIcons.TriangleRight}
          />
        </DropdownActionItem>
      </DropdownActions>

      <DropdownActions>
        <DropdownActionItem key="grafana" value="grafana">
          <DropdownActionItemAvatar position="start" src={grafanaLogo} />
          Grafana
          <DropdownActionItemIcon
            position="end"
            shape={SystemIcons.TriangleRight}
          />
        </DropdownActionItem>
        <DropdownActionItem key="kibana" value="kibana">
          <DropdownActionItemAvatar position="start" src={kibanaLogo} />
          Kibana
          <DropdownActionItemIcon
            position="end"
            shape={SystemIcons.TriangleRight}
          />
        </DropdownActionItem>
        <DropdownActionItem key="kubernetes" value="kubernetes">
          <DropdownActionItemAvatar position="start" src={kubernetesLogo} />
          Kubernetes
          <DropdownActionItemIcon
            position="end"
            shape={SystemIcons.TriangleRight}
          />
        </DropdownActionItem>
      </DropdownActions>
    </Dropdown>
  ));
