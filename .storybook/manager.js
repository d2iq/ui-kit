import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

const theme = create({
  brandTitle: "Mesosphere UI Kit",
  brandUrl: "#",
});
addons.setConfig({
  isFullscreen: false,
  showPanel: true,
  panelPosition: "bottom",
  theme,
});

