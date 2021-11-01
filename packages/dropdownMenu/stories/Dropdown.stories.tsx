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
import { ProductIcons } from "../../icons/dist/product-icons-enum";

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

export const WithFooterSection = () => (
  <DropdownMenu
    menuMaxHeight={420}
    trigger={<PrimaryDropdownButton>Workspaces</PrimaryDropdownButton>}
  >
    <DropdownSection>
      <DropdownMenuItem key="workspace1" value="workspace1">
        <DropdownMenuItemIcon shape={ProductIcons.Global} />
        Global
      </DropdownMenuItem>
    </DropdownSection>
    <DropdownSection>
      <DropdownMenuItem key="default-workspace" value="default-workspace">
        <DropdownMenuItemIcon shape={ProductIcons.Components} />
        Default Workspace
      </DropdownMenuItem>
      <DropdownMenuItem
        key="management-cluster-workspace"
        value="management-cluster-workspace"
      >
        <DropdownMenuItemIcon shape={ProductIcons.Components} />
        Management Cluster Workspace
      </DropdownMenuItem>
      <DropdownMenuItem key="workspace1" value="workspace1">
        <DropdownMenuItemIcon shape={ProductIcons.Components} />
        Workspace 1
      </DropdownMenuItem>
      <DropdownMenuItem key="workspace2" value="workspace2">
        <DropdownMenuItemIcon shape={ProductIcons.Components} />
        Workspace 2
      </DropdownMenuItem>
      <DropdownMenuItem key="workspace3" value="workspace3">
        <DropdownMenuItemIcon shape={ProductIcons.Components} />
        Workspace 3
      </DropdownMenuItem>
      <DropdownMenuItem key="workspace4" value="workspace4">
        <DropdownMenuItemIcon shape={ProductIcons.Components} />
        Workspace 4
      </DropdownMenuItem>
      <DropdownMenuItem key="workspace5" value="workspace5">
        <DropdownMenuItemIcon shape={ProductIcons.Components} />
        Workspace 5
      </DropdownMenuItem>
      <DropdownMenuItem key="workspace6" value="workspace6">
        <DropdownMenuItemIcon shape={ProductIcons.Components} />
        Workspace 6
      </DropdownMenuItem>
      <DropdownMenuItem key="workspace7" value="workspace7">
        <DropdownMenuItemIcon shape={ProductIcons.Components} />
        Workspace 7
      </DropdownMenuItem>
      <DropdownMenuItem key="workspace8" value="workspace8">
        <DropdownMenuItemIcon shape={ProductIcons.Components} />
        Workspace 8
      </DropdownMenuItem>
      <DropdownMenuItem key="workspace9" value="workspace9">
        <DropdownMenuItemIcon shape={ProductIcons.Components} />
        Workspace 9
      </DropdownMenuItem>
      <DropdownMenuItem key="workspace10" value="workspace10">
        <DropdownMenuItemIcon shape={ProductIcons.Components} />
        Workspace 10
      </DropdownMenuItem>
      <DropdownMenuItem key="workspace11" value="workspace11">
        <DropdownMenuItemIcon shape={ProductIcons.Components} />
        Workspace 11
      </DropdownMenuItem>
      <DropdownMenuItem key="workspace12" value="workspace12">
        <DropdownMenuItemIcon shape={ProductIcons.Components} />
        Workspace 12
      </DropdownMenuItem>
      <DropdownMenuItem key="workspace13" value="workspace13">
        <DropdownMenuItemIcon shape={ProductIcons.Components} />
        Workspace 13
      </DropdownMenuItem>
      <DropdownMenuItem key="workspace14" value="workspace14">
        <DropdownMenuItemIcon shape={ProductIcons.Components} />
        Workspace 14
      </DropdownMenuItem>
      <DropdownMenuItem key="workspace15" value="workspace15">
        <DropdownMenuItemIcon shape={ProductIcons.Components} />
        Workspace 15
      </DropdownMenuItem>
    </DropdownSection>

    <DropdownSection footer>
      <DropdownMenuItem key="create-workspace" value="create-workspace">
        Create Workspace
      </DropdownMenuItem>
      <DropdownMenuItem key="manage-workspaces" value="manage-workspaces">
        Manage Workspaces
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
