import { iconDecorator } from "../decorators/iconDecorator";

require("../packages/shared/styles/global").injectStorybookResetCss();

// Necessary for icons to render properly
export const decorators = [iconDecorator];
