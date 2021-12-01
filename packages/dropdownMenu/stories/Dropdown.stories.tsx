import * as React from "react";
import { Story, Meta } from "@storybook/react";
import {
  DropdownMenu,
  DropdownSection,
  DropdownMenuItem,
  DropdownMenuItemIcon,
  DropdownMenuItemAvatar
} from "../index";
import { PopoverListItemAppearances } from "../../shared/types/popoverListItemAppearances";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { grafanaLogo, kibanaLogo, kubernetesLogo } from "./avatarImgs";
import PrimaryDropdownButton from "../../button/components/PrimaryDropdownButton";
import { DropdownMenuProps } from "../components/DropdownMenu";
import { Direction } from "../../dropdownable/components/Dropdownable";

export default {
  title: "Overlays/DropdownMenu",
  component: DropdownMenu,
  subcomponents: {
    DropdownSection,
    DropdownMenuItem,
    DropdownMenuItemIcon,
    DropdownMenuItemAvatar
  },
  decorators: [Story => <div style={{ padding: "5em 10em" }}>{Story()}</div>],
  argTypes: {
    preferredDirections: {
      options: [
        Direction.BottomLeft,
        Direction.BottomRight,
        Direction.BottomCenter
      ]
    },
    children: {
      control: { disable: true }
    },
    overlayRoot: {
      control: { disable: true }
    },
    trigger: {
      control: { disable: true }
    }
  }
} as Meta;

const Template: Story<DropdownMenuProps> = args => (
  <DropdownMenu
    trigger={<PrimaryDropdownButton>Menu</PrimaryDropdownButton>}
    {...args}
  >
    <DropdownSection>
      <DropdownMenuItem key="edit" value="edit">
        Edit
      </DropdownMenuItem>
      <DropdownMenuItem key="scale" value="scale">
        Scale
      </DropdownMenuItem>
      <DropdownMenuItem key="restart" value="restart">
        Restart
      </DropdownMenuItem>
      <DropdownMenuItem key="stop" value="stop">
        Stop
      </DropdownMenuItem>
    </DropdownSection>
  </DropdownMenu>
);

export const Default = Template.bind({});

export const WithDangerousAction = args => (
  <DropdownMenu
    trigger={<PrimaryDropdownButton>Menu</PrimaryDropdownButton>}
    {...args}
  >
    <DropdownSection>
      <DropdownMenuItem key="edit" value="edit">
        Edit
      </DropdownMenuItem>
      <DropdownMenuItem key="scale" value="scale">
        Scale
      </DropdownMenuItem>
      <DropdownMenuItem key="restart" value="restart">
        Restart
      </DropdownMenuItem>
      <DropdownMenuItem key="stop" value="stop">
        Stop
      </DropdownMenuItem>
      <DropdownMenuItem
        appearance={PopoverListItemAppearances.DANGER}
        key="delete"
        value="delete"
      >
        Delete
      </DropdownMenuItem>
    </DropdownSection>
  </DropdownMenu>
);

export const WithDisabledAction = args => (
  <DropdownMenu
    trigger={<PrimaryDropdownButton>Menu</PrimaryDropdownButton>}
    {...args}
  >
    <DropdownSection>
      <DropdownMenuItem key="edit" value="edit">
        Edit
      </DropdownMenuItem>
      <DropdownMenuItem key="scale" value="scale">
        Scale
      </DropdownMenuItem>
      <DropdownMenuItem key="restart" value="restart">
        Restart
      </DropdownMenuItem>
      <DropdownMenuItem key="stop" value="stop">
        Stop
      </DropdownMenuItem>
      <DropdownMenuItem disabled={true} key="delete" value="delete">
        Delete
      </DropdownMenuItem>
    </DropdownSection>
  </DropdownMenu>
);

export const InitialIsOpen = Template.bind({});
InitialIsOpen.args = {
  initialIsOpen: true
};

export const MenuHasMaxHeight = Template.bind({});
MenuHasMaxHeight.args = {
  menuMaxHeight: 90
};

export const MenuHasMaxWidth = args => (
  <DropdownMenu
    menuMaxWidth={200}
    trigger={<PrimaryDropdownButton>Menu</PrimaryDropdownButton>}
    {...args}
  >
    <DropdownSection>
      <DropdownMenuItem key="longWord" value="longWord">
        Donaudampfschifffahrtselektrizitätenhauptbetriebswerkbauunterbeamtengesellschaft
      </DropdownMenuItem>
      <DropdownMenuItem key="edit" value="edit">
        Edit
      </DropdownMenuItem>
      <DropdownMenuItem key="scale" value="scale">
        Scale
      </DropdownMenuItem>
      <DropdownMenuItem key="restart" value="restart">
        Restart
      </DropdownMenuItem>
      <DropdownMenuItem key="stop" value="stop">
        Stop
      </DropdownMenuItem>
    </DropdownSection>
  </DropdownMenu>
);

const onSelect = selectedItem => {
  alert(`onSelect called with:

    • selectedItem: "${selectedItem}"
    • stateAndHelpers: Downshift state and helper fns
    `);
};

export const WithOnSelectCallback = Template.bind({});
WithOnSelectCallback.args = {
  onSelect
};

export const WithSections = args => (
  <DropdownMenu
    trigger={<PrimaryDropdownButton>Menu</PrimaryDropdownButton>}
    {...args}
  >
    <DropdownSection>
      <DropdownMenuItem key="edit" value="edit">
        Edit
      </DropdownMenuItem>
      <DropdownMenuItem key="scale" value="scale">
        Scale
      </DropdownMenuItem>
    </DropdownSection>

    <DropdownSection>
      <DropdownMenuItem key="restart" value="restart">
        Restart
      </DropdownMenuItem>
      <DropdownMenuItem key="restartDelay" value="restartDelay">
        Restart Delay
      </DropdownMenuItem>
    </DropdownSection>

    <DropdownSection>
      <DropdownMenuItem key="pause" value="pause">
        Pause
      </DropdownMenuItem>
      <DropdownMenuItem key="stop" value="stop">
        Stop
      </DropdownMenuItem>
    </DropdownSection>
  </DropdownMenu>
);

export const WithIconsAndAvatarsPositionStart = args => (
  <DropdownMenu
    trigger={<PrimaryDropdownButton>Menu</PrimaryDropdownButton>}
    {...args}
  >
    <DropdownSection>
      <DropdownMenuItem key="edit" value="edit">
        <DropdownMenuItemIcon shape={SystemIcons.Pencil} />
        Edit
      </DropdownMenuItem>
      <DropdownMenuItem key="scale" value="scale">
        <DropdownMenuItemIcon shape={SystemIcons.ArrowUp} />
        Scale
      </DropdownMenuItem>
      <DropdownMenuItem key="restart" value="restart">
        <DropdownMenuItemIcon shape={SystemIcons.Repeat} />
        Restart
      </DropdownMenuItem>
      <DropdownMenuItem key="stop" value="stop">
        <DropdownMenuItemIcon shape={SystemIcons.CircleMinus} />
        Stop
      </DropdownMenuItem>
    </DropdownSection>

    <DropdownSection>
      <DropdownMenuItem key="grafana" value="grafana">
        <DropdownMenuItemAvatar src={grafanaLogo} />
        Grafana
      </DropdownMenuItem>
      <DropdownMenuItem key="kibana" value="kibana">
        <DropdownMenuItemAvatar src={kibanaLogo} />
        Kibana
      </DropdownMenuItem>
      <DropdownMenuItem key="kubernetes" value="kubernetes">
        <DropdownMenuItemAvatar src={kubernetesLogo} />
        Kubernetes
      </DropdownMenuItem>
    </DropdownSection>
  </DropdownMenu>
);

export const WithIconsAndAvatarsPositionEnd = args => (
  <DropdownMenu
    trigger={<PrimaryDropdownButton>Menu</PrimaryDropdownButton>}
    {...args}
  >
    <DropdownSection>
      <DropdownMenuItem key="edit" value="edit">
        <DropdownMenuItemIcon position="end" shape={SystemIcons.Pencil} />
        Edit
      </DropdownMenuItem>
      <DropdownMenuItem key="scale" value="scale">
        <DropdownMenuItemIcon position="end" shape={SystemIcons.ArrowUp} />
        Scale
      </DropdownMenuItem>
      <DropdownMenuItem key="restart" value="restart">
        <DropdownMenuItemIcon position="end" shape={SystemIcons.Repeat} />
        Restart
      </DropdownMenuItem>
      <DropdownMenuItem key="stop" value="stop">
        <DropdownMenuItemIcon position="end" shape={SystemIcons.CircleMinus} />
        Stop
      </DropdownMenuItem>
    </DropdownSection>

    <DropdownSection>
      <DropdownMenuItem key="grafana" value="grafana">
        <DropdownMenuItemAvatar position="end" src={grafanaLogo} />
        Grafana
      </DropdownMenuItem>
      <DropdownMenuItem key="kibana" value="kibana">
        <DropdownMenuItemAvatar position="end" src={kibanaLogo} />
        Kibana
      </DropdownMenuItem>
      <DropdownMenuItem key="kubernetes" value="kubernetes">
        <DropdownMenuItemAvatar position="end" src={kubernetesLogo} />
        Kubernetes
      </DropdownMenuItem>
    </DropdownSection>
  </DropdownMenu>
);
