import * as React from "react";
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

export default {
  title: "Overlays/DropdownMenu",
  component: DropdownMenu,
  subcomponents: {
    DropdownSection,
    DropdownMenuItem,
    DropdownMenuItemIcon,
    DropdownMenuItemAvatar
  }
};

export const Default = () => (
  <DropdownMenu trigger={<PrimaryDropdownButton>Menu</PrimaryDropdownButton>}>
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

export const WithDangerousAction = () => (
  <DropdownMenu trigger={<PrimaryDropdownButton>Menu</PrimaryDropdownButton>}>
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

export const WithDisabledAction = () => (
  <DropdownMenu trigger={<PrimaryDropdownButton>Menu</PrimaryDropdownButton>}>
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

export const InitialIsOpen = () => (
  <DropdownMenu
    initialIsOpen={true}
    trigger={<PrimaryDropdownButton>Menu</PrimaryDropdownButton>}
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

export const MenuHasMaxHeight = () => (
  <DropdownMenu
    menuMaxHeight={90}
    trigger={<PrimaryDropdownButton>Menu</PrimaryDropdownButton>}
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

export const MenuHasMaxWidth = () => (
  <DropdownMenu
    menuMaxWidth={200}
    trigger={<PrimaryDropdownButton>Menu</PrimaryDropdownButton>}
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

export const WithOnSelectCallback = () => {
  const onSelect = selectedItem => {
    alert(`onSelect called with:

      • selectedItem: "${selectedItem}"
      • stateAndHelpers: Downshift state and helper fns
      `);
  };

  return (
    <DropdownMenu
      onSelect={onSelect}
      trigger={<PrimaryDropdownButton>Menu</PrimaryDropdownButton>}
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
};

export const WithSections = () => (
  <DropdownMenu trigger={<PrimaryDropdownButton>Menu</PrimaryDropdownButton>}>
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

export const WithIconsAndAvatarsPositionStart = () => (
  <DropdownMenu trigger={<PrimaryDropdownButton>Menu</PrimaryDropdownButton>}>
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

export const WithIconsAndAvatarsPositionEnd = () => (
  <DropdownMenu trigger={<PrimaryDropdownButton>Menu</PrimaryDropdownButton>}>
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

export const WithIconsAndAvatarsPositionStartAndEnd = () => (
  <DropdownMenu trigger={<PrimaryDropdownButton>Menu</PrimaryDropdownButton>}>
    <DropdownSection>
      <DropdownMenuItem key="edit" value="edit">
        <DropdownMenuItemIcon position="start" shape={SystemIcons.Pencil} />
        Edit
        <DropdownMenuItemIcon
          position="end"
          shape={SystemIcons.TriangleRight}
        />
      </DropdownMenuItem>
      <DropdownMenuItem key="scale" value="scale">
        <DropdownMenuItemIcon position="start" shape={SystemIcons.ArrowUp} />
        Scale
        <DropdownMenuItemIcon
          position="end"
          shape={SystemIcons.TriangleRight}
        />
      </DropdownMenuItem>
      <DropdownMenuItem key="restart" value="restart">
        <DropdownMenuItemIcon position="start" shape={SystemIcons.Repeat} />
        Restart
        <DropdownMenuItemIcon
          position="end"
          shape={SystemIcons.TriangleRight}
        />
      </DropdownMenuItem>
      <DropdownMenuItem key="stop" value="stop">
        <DropdownMenuItemIcon
          position="start"
          shape={SystemIcons.CircleMinus}
        />
        Stop
        <DropdownMenuItemIcon
          position="end"
          shape={SystemIcons.TriangleRight}
        />
      </DropdownMenuItem>
    </DropdownSection>

    <DropdownSection>
      <DropdownMenuItem key="grafana" value="grafana">
        <DropdownMenuItemAvatar position="start" src={grafanaLogo} />
        Grafana
        <DropdownMenuItemIcon
          position="end"
          shape={SystemIcons.TriangleRight}
        />
      </DropdownMenuItem>
      <DropdownMenuItem key="kibana" value="kibana">
        <DropdownMenuItemAvatar position="start" src={kibanaLogo} />
        Kibana
        <DropdownMenuItemIcon
          position="end"
          shape={SystemIcons.TriangleRight}
        />
      </DropdownMenuItem>
      <DropdownMenuItem key="kubernetes" value="kubernetes">
        <DropdownMenuItemAvatar position="start" src={kubernetesLogo} />
        Kubernetes
        <DropdownMenuItemIcon
          position="end"
          shape={SystemIcons.TriangleRight}
        />
      </DropdownMenuItem>
    </DropdownSection>
  </DropdownMenu>
);
