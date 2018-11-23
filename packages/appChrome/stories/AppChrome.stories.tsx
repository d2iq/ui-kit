import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withReadme } from "storybook-readme";
import { ThemeProvider } from "emotion-theming";
import { number, select, text, withKnobs } from "@storybook/addon-knobs";
import {
  SidebarBareContent,
  PlaceholderIcon
} from "./helpers/StorybookSidebarHelpers";
import DCOSAppChrome from "./helpers/DCOSAppChrome";
import AppChrome from "../components/AppChrome";
import Sidebar from "../components/Sidebar";
import SidebarSection from "../components/SidebarSection";
import SidebarItem from "../components/SidebarItem";
import SidebarItemLabel from "../components/SidebarItemLabel";
import SidebarSubMenu from "../components/SidebarSubMenu";
import SidebarSubMenuItem from "../components/SidebarSubMenuItem";
import HeaderBar from "../components/HeaderBar";
import { padding } from "../../shared/styles/styleUtils";
import {
  white,
  black,
  cyan,
  greyLight,
  greyDark,
  red,
  yellow,
  green,
  blue,
  pink,
  purple
} from "../../design-tokens/build/js/designTokens";

const readme = require("../README.md");
const PaddingHorTheme = {
  paddingHor: "xl"
};
const PaddingVertTheme = {
  paddingVert: "xl"
};
const BackgroundColorTheme = {
  backgroundColor: `${green}`
};
const WidthTheme = {
  width: "400px"
};

storiesOf("AppChrome", module)
  .addDecorator(withReadme([readme]))
  .addWithInfo("AppChrome DCOS clone", () => (
    <DCOSAppChrome sidebarIsOpen={true} />
  ))
  .addWithInfo("AppChrome bare", () => (
    <AppChrome
      sidebar={
        <Sidebar isOpen={true}>
          <SidebarBareContent />
        </Sidebar>
      }
      headerBar={<HeaderBar>HeaderBar content goes here</HeaderBar>}
      mainContent={
        <div className={padding("all", "l")}>Main app content goes here</div>
      }
    />
  ))
  .addWithInfo("Sidebar bare", () => (
    <Sidebar isOpen={true}>
      <SidebarBareContent />
    </Sidebar>
  ))
  .addWithInfo("Sidebar bare w/ custom background", () => (
    <ThemeProvider theme={BackgroundColorTheme}>
      <Sidebar isOpen={true}>
        <SidebarBareContent />
      </Sidebar>
    </ThemeProvider>
  ))
  .addWithInfo("Sidebar bare w/ custom width", () => (
    <ThemeProvider theme={WidthTheme}>
      <Sidebar isOpen={true}>
        <SidebarBareContent />
      </Sidebar>
    </ThemeProvider>
  ))
  .addWithInfo("Sidebar w/ items", () => (
    <Sidebar isOpen={true}>
      <SidebarSection label="Section header">
        <SidebarItem onClick={action("clicked a nav item")}>
          <SidebarItemLabel>Lorem Ipsum</SidebarItemLabel>
        </SidebarItem>
        <SidebarItem onClick={action("clicked a nav item")}>
          <SidebarItemLabel>Dolor Sit</SidebarItemLabel>
        </SidebarItem>
        <SidebarItem onClick={action("clicked a nav item")}>
          <SidebarItemLabel>Amet Consecutor</SidebarItemLabel>
        </SidebarItem>
        <SidebarItem onClick={action("clicked a nav item")}>
          <SidebarItemLabel>Adipiscing Edit</SidebarItemLabel>
        </SidebarItem>
        <SidebarItem onClick={action("clicked a nav item")}>
          <SidebarItemLabel>Praesent Massa</SidebarItemLabel>
        </SidebarItem>
      </SidebarSection>
    </Sidebar>
  ))
  .addWithInfo("Sidebar w/ item w/ custom horizontal padding", () => (
    <Sidebar isOpen={true}>
      <SidebarSection label="Section header">
        <ThemeProvider theme={PaddingHorTheme}>
          <SidebarItem onClick={action("clicked a nav item")}>
            <SidebarItemLabel>Lorem Ipsum</SidebarItemLabel>
          </SidebarItem>
        </ThemeProvider>
      </SidebarSection>
    </Sidebar>
  ))
  .addWithInfo("Sidebar w/ item w/ custom vetical padding", () => (
    <Sidebar isOpen={true}>
      <SidebarSection label="Section header">
        <ThemeProvider theme={PaddingVertTheme}>
          <SidebarItem onClick={action("clicked a nav item")}>
            <SidebarItemLabel>Lorem Ipsum</SidebarItemLabel>
          </SidebarItem>
        </ThemeProvider>
      </SidebarSection>
    </Sidebar>
  ))
  .addWithInfo("Sidebar w/ items (1 active)", () => (
    <Sidebar isOpen={true}>
      <SidebarSection label="Section header">
        <SidebarItem onClick={action("clicked a nav item")} isActive={true}>
          <SidebarItemLabel>Lorem Ipsum</SidebarItemLabel>
        </SidebarItem>
        <SidebarItem onClick={action("clicked a nav item")}>
          <SidebarItemLabel>Dolor Sit</SidebarItemLabel>
        </SidebarItem>
        <SidebarItem onClick={action("clicked a nav item")}>
          <SidebarItemLabel>Amet Consecutor</SidebarItemLabel>
        </SidebarItem>
        <SidebarItem onClick={action("clicked a nav item")}>
          <SidebarItemLabel>Adipiscing Edit</SidebarItemLabel>
        </SidebarItem>
        <SidebarItem onClick={action("clicked a nav item")}>
          <SidebarItemLabel>Praesent Massa</SidebarItemLabel>
        </SidebarItem>
      </SidebarSection>
    </Sidebar>
  ))
  .addWithInfo("Sidebar w/ items (w/ icons)", () => (
    <Sidebar isOpen={true}>
      <SidebarSection label="Section header">
        <SidebarItem onClick={action("clicked a nav item")}>
          <SidebarItemLabel icon={<PlaceholderIcon />}>
            Lorem Ipsum
          </SidebarItemLabel>
        </SidebarItem>
        <SidebarItem
          icon={<PlaceholderIcon />}
          onClick={action("clicked a nav item")}
        >
          <SidebarItemLabel icon={<PlaceholderIcon />}>
            Dolor Sit
          </SidebarItemLabel>
        </SidebarItem>
        <SidebarItem
          icon={<PlaceholderIcon />}
          onClick={action("clicked a nav item")}
        >
          <SidebarItemLabel icon={<PlaceholderIcon />}>
            Amet Consecutor
          </SidebarItemLabel>
        </SidebarItem>
        <SidebarItem
          icon={<PlaceholderIcon />}
          onClick={action("clicked a nav item")}
        >
          <SidebarItemLabel icon={<PlaceholderIcon />}>
            Adipiscing Edit
          </SidebarItemLabel>
        </SidebarItem>
        <SidebarItem
          icon={<PlaceholderIcon />}
          onClick={action("clicked a nav item")}
        >
          <SidebarItemLabel icon={<PlaceholderIcon />}>
            Praesent Massa
          </SidebarItemLabel>
        </SidebarItem>
      </SidebarSection>
    </Sidebar>
  ))
  .addWithInfo("Sidebar w/ item (w/ custom width icon)", () => (
    <Sidebar isOpen={true}>
      <SidebarSection label="Section header">
        <SidebarItem onClick={action("clicked a nav item")}>
          <SidebarItemLabel icon={<PlaceholderIcon width="12px" />}>
            Lorem Ipsum
          </SidebarItemLabel>
        </SidebarItem>
      </SidebarSection>
    </Sidebar>
  ))
  .addWithInfo("Sidebar w/ submenus", () => (
    <Sidebar isOpen={true}>
      <SidebarSection label="Section header">
        <SidebarSubMenu
          label={<SidebarItemLabel>Lorem ipsum</SidebarItemLabel>}
        >
          <SidebarSubMenuItem onClick={action("clicked a nav item")}>
            Lorem Ipsum
          </SidebarSubMenuItem>
          <SidebarSubMenuItem onClick={action("clicked a nav item")}>
            Dolor Sit
          </SidebarSubMenuItem>
        </SidebarSubMenu>
        <SidebarSubMenu label={<SidebarItemLabel>Dolor Sit</SidebarItemLabel>}>
          <SidebarSubMenuItem onClick={action("clicked a nav item")}>
            Lorem Ipsum
          </SidebarSubMenuItem>
          <SidebarSubMenuItem onClick={action("clicked a nav item")}>
            Dolor Sit
          </SidebarSubMenuItem>
        </SidebarSubMenu>
        <SidebarSubMenu
          label={<SidebarItemLabel>Amet Consecutor</SidebarItemLabel>}
        >
          <SidebarSubMenuItem onClick={action("clicked a nav item")}>
            Lorem Ipsum
          </SidebarSubMenuItem>
          <SidebarSubMenuItem onClick={action("clicked a nav item")}>
            Dolor Sit
          </SidebarSubMenuItem>
        </SidebarSubMenu>
        <SidebarSubMenu
          label={<SidebarItemLabel>Adipiscing Edit</SidebarItemLabel>}
        >
          <SidebarSubMenuItem onClick={action("clicked a nav item")}>
            Lorem Ipsum
          </SidebarSubMenuItem>
          <SidebarSubMenuItem onClick={action("clicked a nav item")}>
            Dolor Sit
          </SidebarSubMenuItem>
        </SidebarSubMenu>
        <SidebarSubMenu
          label={<SidebarItemLabel>Praesent Massa</SidebarItemLabel>}
        >
          <SidebarSubMenuItem onClick={action("clicked a nav item")}>
            Lorem Ipsum
          </SidebarSubMenuItem>
          <SidebarSubMenuItem onClick={action("clicked a nav item")}>
            Dolor Sit
          </SidebarSubMenuItem>
        </SidebarSubMenu>
      </SidebarSection>
    </Sidebar>
  ))
  .addWithInfo("Sidebar w/ submenus (1 active)", () => (
    <Sidebar isOpen={true}>
      <SidebarSection label="Section header">
        <SidebarSubMenu
          isOpen={true}
          label={<SidebarItemLabel>Lorem ipsum</SidebarItemLabel>}
        >
          <SidebarSubMenuItem
            onClick={action("clicked a nav item")}
            isActive={true}
          >
            Lorem Ipsum
          </SidebarSubMenuItem>
          <SidebarSubMenuItem onClick={action("clicked a nav item")}>
            Dolor Sit
          </SidebarSubMenuItem>
        </SidebarSubMenu>
        <SidebarSubMenu label={<SidebarItemLabel>Dolor Sit</SidebarItemLabel>}>
          <SidebarSubMenuItem onClick={action("clicked a nav item")}>
            Lorem Ipsum
          </SidebarSubMenuItem>
          <SidebarSubMenuItem onClick={action("clicked a nav item")}>
            Dolor Sit
          </SidebarSubMenuItem>
        </SidebarSubMenu>
        <SidebarSubMenu
          label={<SidebarItemLabel>Amet Consecutor</SidebarItemLabel>}
        >
          <SidebarSubMenuItem onClick={action("clicked a nav item")}>
            Lorem Ipsum
          </SidebarSubMenuItem>
          <SidebarSubMenuItem onClick={action("clicked a nav item")}>
            Dolor Sit
          </SidebarSubMenuItem>
        </SidebarSubMenu>
        <SidebarSubMenu
          label={<SidebarItemLabel>Adipiscing Edit</SidebarItemLabel>}
        >
          <SidebarSubMenuItem onClick={action("clicked a nav item")}>
            Lorem Ipsum
          </SidebarSubMenuItem>
          <SidebarSubMenuItem onClick={action("clicked a nav item")}>
            Dolor Sit
          </SidebarSubMenuItem>
        </SidebarSubMenu>
        <SidebarSubMenu
          label={<SidebarItemLabel>Praesent Massa</SidebarItemLabel>}
        >
          <SidebarSubMenuItem onClick={action("clicked a nav item")}>
            Lorem Ipsum
          </SidebarSubMenuItem>
          <SidebarSubMenuItem onClick={action("clicked a nav item")}>
            Dolor Sit
          </SidebarSubMenuItem>
        </SidebarSubMenu>
      </SidebarSection>
    </Sidebar>
  ))
  .addWithInfo("Sidebar w/ submenus (w/ icons)", () => (
    <Sidebar isOpen={true}>
      <SidebarSection label="Section header">
        <SidebarSubMenu
          label={
            <SidebarItemLabel icon={<PlaceholderIcon />}>
              Lorem ipsum
            </SidebarItemLabel>
          }
          menuHasIcon={true}
        >
          <SidebarSubMenuItem onClick={action("clicked a nav item")}>
            Lorem Ipsum
          </SidebarSubMenuItem>
          <SidebarSubMenuItem onClick={action("clicked a nav item")}>
            Dolor Sit
          </SidebarSubMenuItem>
        </SidebarSubMenu>
        <SidebarSubMenu
          label={
            <SidebarItemLabel icon={<PlaceholderIcon />}>
              Dolor Sit
            </SidebarItemLabel>
          }
          menuHasIcon={true}
        >
          <SidebarSubMenuItem onClick={action("clicked a nav item")}>
            Lorem Ipsum
          </SidebarSubMenuItem>
          <SidebarSubMenuItem onClick={action("clicked a nav item")}>
            Dolor Sit
          </SidebarSubMenuItem>
        </SidebarSubMenu>
        <SidebarSubMenu
          label={
            <SidebarItemLabel icon={<PlaceholderIcon />}>
              Amet Consecutor
            </SidebarItemLabel>
          }
          menuHasIcon={true}
        >
          <SidebarSubMenuItem onClick={action("clicked a nav item")}>
            Lorem Ipsum
          </SidebarSubMenuItem>
          <SidebarSubMenuItem onClick={action("clicked a nav item")}>
            Dolor Sit
          </SidebarSubMenuItem>
        </SidebarSubMenu>
        <SidebarSubMenu
          label={
            <SidebarItemLabel icon={<PlaceholderIcon />}>
              Adipiscing Edit
            </SidebarItemLabel>
          }
          menuHasIcon={true}
        >
          <SidebarSubMenuItem onClick={action("clicked a nav item")}>
            Lorem Ipsum
          </SidebarSubMenuItem>
          <SidebarSubMenuItem onClick={action("clicked a nav item")}>
            Dolor Sit
          </SidebarSubMenuItem>
        </SidebarSubMenu>
        <SidebarSubMenu
          label={
            <SidebarItemLabel icon={<PlaceholderIcon />}>
              Praesent Massa
            </SidebarItemLabel>
          }
          menuHasIcon={true}
        >
          <SidebarSubMenuItem onClick={action("clicked a nav item")}>
            Lorem Ipsum
          </SidebarSubMenuItem>
          <SidebarSubMenuItem onClick={action("clicked a nav item")}>
            Dolor Sit
          </SidebarSubMenuItem>
        </SidebarSubMenu>
      </SidebarSection>
    </Sidebar>
  ))
  .addWithInfo("HeaderBar bare", () => (
    <HeaderBar>HeaderBar content goes here</HeaderBar>
  ))
  .addWithInfo("HeaderBar bare w/ custom background", () => (
    <ThemeProvider theme={BackgroundColorTheme}>
      <HeaderBar>HeaderBar content goes here</HeaderBar>
    </ThemeProvider>
  ))
  .addWithInfo("HeaderBar bare w/ custom horizontal padding", () => (
    <ThemeProvider theme={PaddingHorTheme}>
      <HeaderBar>HeaderBar content goes here</HeaderBar>
    </ThemeProvider>
  ))
  .addWithInfo("HeaderBar bare w/ custom vertical padding", () => (
    <ThemeProvider theme={PaddingVertTheme}>
      <HeaderBar>HeaderBar content goes here</HeaderBar>
    </ThemeProvider>
  ));

const stories = storiesOf("AppChrome", module);
stories.addDecorator(withKnobs);
stories.add("HeaderBar Customizable w/ Knobs", () => {
  const content = text("Content", "HeaderBar content goes here");
  const colors = {
    Black: black,
    White: white,
    Cyan: cyan,
    GreyLight: greyLight,
    GreyDark: greyDark,
    Red: red,
    Yellow: yellow,
    Green: green,
    Blue: blue,
    Pink: pink,
    Purple: purple
  };
  const color = select("Color", colors, black);

  const paddingSizes = {
    xs: "xs",
    s: "s",
    m: "m",
    l: "l",
    xl: "xl",
    xxl: "xxl"
  };

  const paddingHorSize = select("Horizontal Padding", paddingSizes, "l");
  const paddingVertSize = select("Vertical Padding", paddingSizes, "xs");

  const CustomTheme = {
    backgroundColor: color,
    paddingHor: paddingHorSize,
    paddingVert: paddingVertSize
  };

  return (
    <ThemeProvider theme={CustomTheme}>
      <HeaderBar>{content}</HeaderBar>
    </ThemeProvider>
  );
});

stories.add("Sidebar Customizable w/ Knobs", () => {
  const colors = {
    Black: black,
    White: white,
    Cyan: cyan,
    GreyLight: greyLight,
    GreyDark: greyDark,
    Red: red,
    Yellow: yellow,
    Green: green,
    Blue: blue,
    Pink: pink,
    Purple: purple
  };
  const color = select("Color", colors, black);

  const sidebarWidth = number("Width (Min: 200px, Max: 800px)", 240, {
    range: true,
    min: 200,
    max: 800,
    step: 1
  });

  const CustomTheme = {
    backgroundColor: color,
    width: sidebarWidth + "px"
  };

  return (
    <ThemeProvider theme={CustomTheme}>
      <Sidebar isOpen={true}>
        <SidebarBareContent />
      </Sidebar>
    </ThemeProvider>
  );
});

stories.add("SidebarItem Customizable w/ Knobs", () => {
  const sectionHeader = text("Section Header", "Section Header");
  const content = text("Text", "Lorem Ipsum");

  const paddingSizes = {
    xs: "xs",
    s: "s",
    m: "m",
    l: "l",
    xl: "xl",
    xxl: "xxl"
  };

  const paddingHorSize = select("Horizontal Padding", paddingSizes, "l");
  const paddingVertSize = select("Vertical Padding", paddingSizes, "xs");

  const iconWidth = number("Icon Width (Min: 10px, Max: 100px)", 24, {
    range: true,
    min: 10,
    max: 100,
    step: 1
  });

  const CustomTheme = {
    paddingHor: paddingHorSize,
    paddingVert: paddingVertSize,
    iconWidth
  };

  return (
    <Sidebar isOpen={true}>
      <SidebarSection label={sectionHeader}>
        <ThemeProvider theme={CustomTheme}>
          <SidebarItem onClick={action("clicked a nav item")}>
            <SidebarItemLabel icon={<PlaceholderIcon width={iconWidth} />}>
              {content}
            </SidebarItemLabel>
          </SidebarItem>
        </ThemeProvider>
      </SidebarSection>
    </Sidebar>
  );
});
