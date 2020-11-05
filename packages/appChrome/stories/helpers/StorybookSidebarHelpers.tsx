import * as React from "react";
import { action } from "@storybook/addon-actions";
import {
  SidebarSection,
  SidebarItem,
  SidebarItemLabel,
  SidebarSubMenu,
  SidebarSubMenuItem
} from "../../index";
import { padding } from "../../../shared/styles/styleUtils";
import { ProductIcons } from "../../../icons/dist/product-icons-enum";

const alignToLogoStyles = {
  outer: { marginLeft: "-7px", marginRight: "-7px" },
  inner: { marginLeft: "-4px" }
};

export const SidebarContent = ({ sidebarData }) =>
  sidebarData.map((section, i) => (
    <SidebarSection
      label={
        section.sectionLabel ? (
          <div style={alignToLogoStyles.outer}>{section.sectionLabel}</div>
        ) : (
          ""
        )
      }
      key={`section-${i}`}
    >
      {section.items.map(item =>
        item.subItems ? (
          <SidebarSubMenu
            iconWidth="s"
            label={
              <div style={alignToLogoStyles.outer}>
                <SidebarItemLabel icon={ProductIcons.ServicesInverse}>
                  <div>{item.label}</div>
                </SidebarItemLabel>
              </div>
            }
            menuHasIcon={true}
            key={item.label}
          >
            {item.subItems.map(subItem => (
              <SidebarSubMenuItem
                onClick={action(`go to ${subItem.label}`)}
                key={subItem.label}
              >
                <div style={alignToLogoStyles.outer}>{subItem.label}</div>
              </SidebarSubMenuItem>
            ))}
          </SidebarSubMenu>
        ) : (
          <SidebarItem onClick={action(`go to ${item.label}`)} key={item.label}>
            <div style={alignToLogoStyles.outer}>
              <SidebarItemLabel icon={ProductIcons.ServicesInverse}>
                <div>{item.label}</div>
              </SidebarItemLabel>
            </div>
          </SidebarItem>
        )
      )}
    </SidebarSection>
  ));

export const SidebarBareContent = () => (
  <div className={padding("all", "l")}>
    <p style={{ marginTop: 0, fontSize: "1.125em", fontWeight: 500 }}>
      Content goes here
    </p>
    <ul>
      <li className={padding("bottom")} key="one">
        Lorem Ipsum
      </li>
      <li className={padding("bottom")} key="two">
        Dolor Sit
      </li>
      <li className={padding("bottom")} key="three">
        Amet Consecutor
      </li>
      <li className={padding("bottom")} key="four">
        Adipiscing Elit
      </li>
      <li className={padding("bottom")} key="five">
        Praesent Massa
      </li>
    </ul>
  </div>
);
