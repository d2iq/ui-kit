import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withReadme } from "storybook-readme";
import { ThemeProvider } from "emotion-theming";
import { number, select, text, withKnobs } from "@storybook/addon-knobs";
import { SidebarBareContent } from "./helpers/StorybookSidebarHelpers";
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
import { ProductIcons } from "../../icons/dist/product-icons-enum";
import { Icon } from "../../icon";

const readme = require("../README.md");

storiesOf("AppChrome", module)
  .addDecorator(withReadme([readme]))
  .addDecorator(withKnobs)
  .addParameters({
    info: {
      propTablesExclude: [ThemeProvider]
    }
  })
  .add("AppChrome DCOS clone", () => <DCOSAppChrome sidebarIsOpen={true} />, {
    info: {
      propTables: [AppChrome],
      propTablesExclude: [DCOSAppChrome]
    }
  })
  .add("AppChrome bare", () => (
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
  .add("Sidebar bare", () => (
    <Sidebar isOpen={true}>
      <SidebarBareContent />
    </Sidebar>
  ))
  .add("Sidebar w/ items", () => (
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
  .add("Sidebar w/ items (1 active)", () => (
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
  .add("Sidebar w/ items (w/ icons)", () => (
    <Sidebar isOpen={true}>
      <SidebarSection label="Section header">
        <SidebarItem onClick={action("clicked a nav item")}>
          <SidebarItemLabel icon={ProductIcons.ServicesInverse}>
            Lorem Ipsum
          </SidebarItemLabel>
        </SidebarItem>
        <SidebarItem
          icon={ProductIcons.ServicesInverse}
          onClick={action("clicked a nav item")}
        >
          <SidebarItemLabel icon={ProductIcons.ServicesInverse}>
            Dolor Sit
          </SidebarItemLabel>
        </SidebarItem>
        <SidebarItem
          icon={ProductIcons.ServicesInverse}
          onClick={action("clicked a nav item")}
        >
          <SidebarItemLabel icon={ProductIcons.ServicesInverse}>
            Amet Consecutor
          </SidebarItemLabel>
        </SidebarItem>
        <SidebarItem
          icon={ProductIcons.ServicesInverse}
          onClick={action("clicked a nav item")}
        >
          <SidebarItemLabel icon={ProductIcons.ServicesInverse}>
            Adipiscing Edit
          </SidebarItemLabel>
        </SidebarItem>
        <SidebarItem
          icon={ProductIcons.ServicesInverse}
          onClick={action("clicked a nav item")}
        >
          <SidebarItemLabel icon={ProductIcons.ServicesInverse}>
            Praesent Massa
          </SidebarItemLabel>
        </SidebarItem>
      </SidebarSection>
    </Sidebar>
  ))
  .add("Sidebar w/ submenus", () => (
    <Sidebar isOpen={true}>
      <SidebarSection label="Section header">
        <SidebarSubMenu
          iconWidth="24px"
          label={<SidebarItemLabel>Lorem ipsum</SidebarItemLabel>}
        >
          <SidebarSubMenuItem onClick={action("clicked a nav item")}>
            Lorem Ipsum
          </SidebarSubMenuItem>
          <SidebarSubMenuItem onClick={action("clicked a nav item")}>
            Dolor Sit
          </SidebarSubMenuItem>
        </SidebarSubMenu>
        <SidebarSubMenu
          iconWidth="24px"
          label={<SidebarItemLabel>Dolor Sit</SidebarItemLabel>}
        >
          <SidebarSubMenuItem onClick={action("clicked a nav item")}>
            Lorem Ipsum
          </SidebarSubMenuItem>
          <SidebarSubMenuItem onClick={action("clicked a nav item")}>
            Dolor Sit
          </SidebarSubMenuItem>
        </SidebarSubMenu>
        <SidebarSubMenu
          iconWidth="24px"
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
          iconWidth="24px"
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
          iconWidth="24px"
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
  .add("Sidebar w/ submenus (1 active)", () => (
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
  .add("Sidebar w/ submenus (w/ icons)", () => (
    <Sidebar isOpen={true}>
      <SidebarSection label="Section header">
        <SidebarSubMenu
          label={
            <SidebarItemLabel icon={ProductIcons.ServicesInverse}>
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
            <SidebarItemLabel icon={ProductIcons.ServicesInverse}>
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
            <SidebarItemLabel icon={ProductIcons.ServicesInverse}>
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
            <SidebarItemLabel icon={ProductIcons.ServicesInverse}>
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
            <SidebarItemLabel icon={ProductIcons.ServicesInverse}>
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
  .add("HeaderBar bare", () => (
    <HeaderBar>HeaderBar content goes here</HeaderBar>
  ))
  .add("HeaderBar Customizable w/ Knobs", () => {
    const content = text("Content", "HeaderBar content goes here");
    const colors = {
      black,
      white,
      cyan,
      greyLight,
      greyDark,
      red,
      yellow,
      green,
      blue,
      pink,
      purple
    };
    const color = select("Color", colors, black);

    const paddingSizes = {
      xs: "xs",
      s: "s",
      m: "m",
      l: "l",
      xl: "xl",
      xxl: "xxl",
      none: "none"
    };

    const paddingHorSize = select("Horizontal Padding", paddingSizes, "l");
    const paddingVertSize = select("Vertical Padding", paddingSizes, "xs");

    const CustomTheme = {
      headerBackgroundColor: color,
      headerPaddingHor: paddingHorSize,
      headerPaddingVert: paddingVertSize
    };

    return (
      <ThemeProvider theme={CustomTheme}>
        <HeaderBar>{content}</HeaderBar>
      </ThemeProvider>
    );
  })

  .add("Sidebar Customizable w/ Knobs", () => {
    const sectionHeader = text("Section Header", "Section Header");

    const colors = {
      black,
      white,
      cyan,
      greyLight,
      greyDark,
      red,
      yellow,
      green,
      blue,
      pink,
      purple
    };
    const color = select("Color", colors, black);

    const paddingSizes = {
      xs: "xs",
      s: "s",
      m: "m",
      l: "l",
      xl: "xl",
      xxl: "xxl",
      none: "none"
    };

    const paddingHorSize = select(
      "Sidebar Header Horizontal Padding",
      paddingSizes,
      "l"
    );
    const paddingVertSize = select(
      "Sidebar Header Vertical Padding",
      paddingSizes,
      "xs"
    );

    const sidebarWidth = number("Width (Min: 200px, Max: 800px)", 240, {
      range: true,
      min: 200,
      max: 800,
      step: 1
    });

    const CustomTheme = {
      sidebarBackgroundColor: color,
      sidebarHeaderPaddingHor: paddingHorSize,
      sidebarHeaderPaddingVert: paddingVertSize,
      sidebarWidth: sidebarWidth + "px"
    };

    return (
      <ThemeProvider theme={CustomTheme}>
        <Sidebar isOpen={true}>
          <SidebarSection label={sectionHeader}>
            <SidebarItem isActive={true} onClick={action("clicked a nav item")}>
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
      </ThemeProvider>
    );
  })

  .add("SidebarItem Customizable w/ Knobs", () => {
    const sectionHeader = text("Section Header", "Section Header");
    const content = text("Text", "Lorem Ipsum");

    const paddingSizes = {
      xs: "xs",
      s: "s",
      m: "m",
      l: "l",
      xl: "xl",
      xxl: "xxl",
      none: "none"
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
      sidebarItemPaddingHor: paddingHorSize,
      sidebarItemPaddingVert: paddingVertSize,
      iconWidth
    };

    return (
      <Sidebar isOpen={true}>
        <SidebarSection label={sectionHeader}>
          <ThemeProvider theme={CustomTheme}>
            <SidebarItem onClick={action("clicked a nav item")}>
              <SidebarItemLabel
                icon={
                  <Icon
                    shape={ProductIcons.ServicesInverse}
                    size={`${iconWidth}px`}
                  />
                }
              >
                {content}
              </SidebarItemLabel>
            </SidebarItem>
          </ThemeProvider>
        </SidebarSection>
      </Sidebar>
    );
  })

  .add("SidebarSubMenu Customizable w/ Knobs", () => {
    const sectionHeader = text("Section Header", "Section Header");
    const iconWidth = number("Icon Width (Min: 10px, Max: 100px)", 24, {
      range: true,
      min: 10,
      max: 100,
      step: 1
    });

    const CustomTheme = {
      iconWidth
    };

    return (
      <Sidebar isOpen={true}>
        <SidebarSection label={sectionHeader}>
          <ThemeProvider theme={CustomTheme}>
            <SidebarSubMenu
              label={
                <SidebarItemLabel
                  icon={
                    <Icon
                      shape={ProductIcons.ServicesInverse}
                      size={`${iconWidth}px`}
                    />
                  }
                >
                  Praesent Massa
                </SidebarItemLabel>
              }
              iconWidth={iconWidth + "px"}
              isOpen={true}
              menuHasIcon={true}
            >
              <SidebarSubMenuItem onClick={action("clicked a nav item")}>
                Lorem Ipsum
              </SidebarSubMenuItem>
              <SidebarSubMenuItem onClick={action("clicked a nav item")}>
                Dolor Sit
              </SidebarSubMenuItem>
            </SidebarSubMenu>
          </ThemeProvider>
        </SidebarSection>
      </Sidebar>
    );
  });
