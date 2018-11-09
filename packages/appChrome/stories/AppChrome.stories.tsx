import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withReadme } from "storybook-readme";
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

const readme = require("../README.md");

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
  ));
