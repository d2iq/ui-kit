import * as React from "react";
import { css } from "emotion";
import { AppChrome, HeaderBar, Sidebar } from "../../index";
import Clickable from "../../../clickable/components/clickable";
import { SidebarContent } from "./StorybookSidebarHelpers";
import { flex, flexItem, padding } from "../../../shared/styles/styleUtils";
import { atMediaUp } from "../../../shared/styles/breakpoints";

const dcosSidebarData = [
  {
    items: [
      { label: "Dashboard" },
      { label: "Services" },
      { label: "Jobs" },
      { label: "Catalog" }
    ]
  },
  {
    sectionLabel: "Resources",
    items: [
      { label: "Nodes" },
      {
        label: "Networking",
        subItems: [{ label: "Networks" }, { label: "Service Addresses" }]
      },
      { label: "Secrets" }
    ]
  },
  {
    sectionLabel: "System",
    items: [
      {
        label: "Cluster",
        subItems: [{ label: "Overview" }, { label: "Linked Clusters" }]
      },
      { label: "Components" },
      {
        label: "Settings",
        subItems: [
          { label: "UI Settings" },
          { label: "Package Repositories" },
          { label: "Secret Stores" },
          { label: "LDAP Directory" },
          { label: "Identity Providers" }
        ]
      },
      {
        label: "Organization",
        subItems: [
          { label: "Users" },
          { label: "Groups" },
          { label: "Service Accounts" }
        ]
      }
    ]
  }
];

class DCOSAppChrome extends React.Component<
  { sidebarIsOpen: boolean },
  { sidebarIsOpen: boolean }
> {
  constructor(props) {
    super(props);

    this.state = { sidebarIsOpen: props.sidebarIsOpen };

    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar() {
    this.setState({ sidebarIsOpen: !this.state.sidebarIsOpen });
  }

  render() {
    return (
      <AppChrome
        sidebar={
          <Sidebar isOpen={this.state.sidebarIsOpen}>
            <div
              className={css`
              ${padding("bottom", "l")}
              ${padding("top", "l")}

              ${atMediaUp.large(css`
                ${padding("bottom", "xl")} ${padding("top", "xl")};
              `)};
            `}
            >
              <SidebarContent sidebarData={dcosSidebarData} />
            </div>
          </Sidebar>
        }
        headerBar={
          <HeaderBar>
            <div
              className={flex({ align: "center" })}
              style={{ width: "100%" }}
            >
              <Clickable action={this.toggleSidebar} tabIndex={0}>
                <div className={flexItem("shrink")}>☰</div>
              </Clickable>
              <div className={flexItem("grow")}>Mesosphere logo</div>
              <div className={flexItem("shrink")}>User menu</div>
              <div className={flexItem("shrink")}>Cluster menu</div>
            </div>
          </HeaderBar>
        }
        mainContent={<div>Pretend DCOS is here</div>}
      />
    );
  }
}

export default DCOSAppChrome;
