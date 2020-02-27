import * as React from "react";
import { storiesOf } from "@storybook/react";
import * as faker from "faker";
import { DropdownSection, DropdownMenuItem } from "../dropdownMenu";
import { Flex, FlexItem } from "../styleUtils/layout";
import { Text } from "../styleUtils/typography";
import { Icon } from "../icon";
import { SystemIcons } from "../icons/dist/system-icons-enum";
import * as dt from "../design-tokens/build/js/designTokens";

import {
  Table,
  Sorter,
  DropdownMenuCell,
  EmptyCell,
  TooltipHeaderCell
} from ".";

///////////////////////////////////////////////////////////////////////////////
//                                TESTING GEAR                               //
///////////////////////////////////////////////////////////////////////////////
// A low row-count as a default. Some Storybook-addon tries to stringify the whole content of the page, which makes for a slow dev-cycle. turn this up to e.g. 200 if you want to test how the table behaves under load. alternatively you could have a look at how to convince that addon to not serialize stuff...
const ROWS = 20;

type FakerData = { id: number } & Faker.Card;
const { floor, random } = Math;
const getRandomInt = (max: number) => floor(random() * floor(max));
const createCard = (_, id: number) => ({
  ...faker.helpers.createCard(),
  id,
  phone: Math.random() > 0.8 ? null : faker.phone.phoneNumber()
});
const initialData = Array.from({ length: ROWS }, createCard);
function update<A extends { id: number } & Faker.Card>(data: A[]) {
  const indexToReplace = getRandomInt(data.length);
  const newEntry = createCard(null, data[indexToReplace].id);
  return data.map(e =>
    e.id === newEntry.id ? { ...newEntry, name: e.name } : e
  );
}
const DataUpdateContainer = ({
  children,
  updateRateMs
}: {
  children: (_: { items: FakerData[] }) => JSX.Element;
  updateRateMs: number;
}) => {
  const [items, setItems] = React.useState(initialData);
  // update data every couple milliseconds
  React.useEffect(() => {
    const timeout = setTimeout(
      () => void setItems(update(items)),
      updateRateMs
    );
    return () => void clearTimeout(timeout);
  });

  return children({ items });
};

/* tslint:disable:jsx-no-lambda */
storiesOf("Data listing|Table V2", module)
  .add("default", () => (
    <Table
      data={initialData}
      // toId fn needed to make react render stuff fast.
      toId={el => el.id.toString()}
      columns={[
        { id: "name", header: "Name", render: x => x.name },
        { id: "username", header: "Username", render: x => x.username },
        { id: "email", header: "Email", render: x => x.email },
        { id: "phone", header: "Phone", render: x => x.phone },
        { id: "website", header: "Website", render: x => x.website },
        { id: "company", header: "Company", render: x => x.company.name }
      ]}
    />
  ))
  .add("with updating data", () => (
    <DataUpdateContainer updateRateMs={1000}>
      {({ items }) => (
        <Table
          data={items}
          // toId fn needed to make react render stuff fast.
          toId={el => el.id.toString()}
          columns={[
            { id: "name", header: "Name", render: x => x.name },
            { id: "username", header: "Username", render: x => x.username },
            { id: "email", header: "Email", render: x => x.email },
            { id: "phone", header: "Phone", render: x => x.phone },
            { id: "website", header: "Website", render: x => x.website },
            { id: "company", header: "Company", render: x => x.company.name }
          ]}
        />
      )}
    </DataUpdateContainer>
  ))
  .add("columns with custom widths", () => (
    <Table
      data={initialData}
      // toId fn needed to make react render stuff fast.
      toId={el => el.id.toString()}
      columns={[
        {
          id: "name",
          header: "200px",
          render: x => x.name,
          initialWidth: "200px"
        },
        {
          id: "username",
          header: "200px",
          render: x => x.username,
          initialWidth: "200px"
        },
        {
          id: "email",
          header: "minmax(300px, 1fr)",
          render: x => x.email,
          initialWidth: "minmax(300px, 1fr)"
        },
        {
          id: "phone",
          header: "minmax(300px, 1fr)",
          render: x => x.phone,
          initialWidth: "minmax(300px, 1fr)"
        },
        {
          id: "website",
          header: "minmax(200px, 300px)",
          render: x => x.website,
          initialWidth: "minmax(200px, 300px)"
        },
        {
          id: "company",
          header: "minmax(200px, 300px)",
          render: x => x.company.name,
          initialWidth: "minmax(200px, 300px)"
        }
      ]}
    />
  ))
  .add("sortable columns", () => (
    <Table
      data={initialData}
      // toId fn needed to make react render stuff fast.
      toId={el => el.id.toString()}
      columns={[
        {
          id: "name",
          header: 'Sorter.string("name")',
          render: x => x.name,
          sorter: Sorter.string("name")
        },
        {
          id: "id",
          header: 'Sorter.number("id")',
          render: x => x.id,
          sorter: Sorter.number("id")
        },
        {
          id: "email",
          header: "Custom sort fn",
          render: x => x.email,
          sorter: dir => (a, b) =>
            (dir === "asc" ? 1 : -1) * a.email.localeCompare(b.email)
        },
        {
          id: "phone",
          header: 'Sorter.string("phone") with nulls',
          render: x => x.phone,
          sorter: Sorter.string("phone")
        },
        { id: "website", header: "No sort", render: x => x.website },
        { id: "company", header: "No Sort", render: x => x.company.name }
      ]}
      initialSorter={{ by: "name", order: "asc" }}
    />
  ))
  .add("column text alignment", () => (
    <Table
      data={initialData}
      // toId fn needed to make react render stuff fast.
      toId={el => el.id.toString()}
      columns={[
        { id: "name", header: "Left", render: x => x.name, textAlign: "left" },
        { id: "id", header: "Right", render: x => x.id, textAlign: "right" },
        {
          id: "email",
          header: "Center",
          render: x => x.email,
          textAlign: "center"
        },
        { id: "phone", header: "Phone", render: x => x.phone },
        { id: "website", header: "Website", render: x => x.website },
        { id: "company", header: "Company", render: x => x.company.name }
      ]}
    />
  ))
  .add("column header w/ tooltip", () => (
    <Table
      data={initialData}
      // toId fn needed to make react render stuff fast.
      toId={el => el.id.toString()}
      columns={[
        {
          id: "name",
          header: (
            <TooltipHeaderCell tooltipContent="Fake names">
              Name
            </TooltipHeaderCell>
          ),
          render: x => x.name
        },
        { id: "username", header: "Username", render: x => x.username },
        { id: "email", header: "Email", render: x => x.email },
        { id: "phone", header: "Phone", render: x => x.phone },
        { id: "website", header: "Website", render: x => x.website },
        { id: "company", header: "Company", render: x => x.company.name }
      ]}
    />
  ))
  .add("action menu on each row", () => (
    <Table
      data={initialData}
      // toId fn needed to make react render stuff fast.
      toId={el => el.id.toString()}
      columns={[
        { id: "name", header: "Name", render: x => x.name },
        { id: "username", header: "Username", render: x => x.username },
        { id: "email", header: "Email", render: x => x.email },
        { id: "phone", header: "Phone", render: x => x.phone },
        { id: "website", header: "Website", render: x => x.website },
        { id: "company", header: "Company", render: x => x.company.name },
        {
          id: "dropdown",
          header: "",
          render: () => (
            <DropdownMenuCell>
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
            </DropdownMenuCell>
          )
        }
      ]}
    />
  ))
  .add("empty cells", () => (
    <Table
      data={initialData}
      // toId fn needed to make react render stuff fast.
      toId={el => el.id.toString()}
      columns={[
        { id: "name", header: "Name", render: x => x.name },
        { id: "username", header: "Username", render: () => <EmptyCell /> },
        { id: "email", header: "Email", render: x => x.email },
        { id: "phone", header: "Phone", render: x => x.phone },
        { id: "website", header: "Website", render: x => x.website },
        { id: "company", header: "Company", render: x => x.company.name }
      ]}
    />
  ))
  .add("cells rendered w/ React components", () => (
    <Table
      data={initialData}
      // toId fn needed to make react render stuff fast.
      toId={el => el.id.toString()}
      columns={[
        {
          id: "name",
          header: "Name",
          render: x => (
            <a href={`http://google.com/?q=${encodeURIComponent(x.name)}`}>
              {x.name}
            </a>
          )
        },
        {
          id: "username",
          header: "Username",
          render: x => (
            <Flex gutterSize="xs" align="center">
              <FlexItem flex="shrink">
                <Icon shape={SystemIcons.User} size={dt.iconSizeXs} />
              </FlexItem>
              <FlexItem>
                <Text wrap="truncate">{x.username}</Text>
              </FlexItem>
            </Flex>
          )
        },
        {
          id: "email",
          header: "Email",
          render: x => (
            <a href={`mailto:${x.email}`} target="_blank">
              {x.email}
            </a>
          )
        },
        { id: "phone", header: "Phone", render: x => <span>{x.phone}</span> },
        {
          id: "website",
          header: "Website",
          render: x => (
            <a href={x.website} target="_blank">
              {x.website}
            </a>
          )
        },
        {
          id: "company",
          header: "Company",
          render: x => (
            <Flex gutterSize="xs" align="center">
              <FlexItem flex="shrink">
                <Icon shape={SystemIcons.Folder} size={dt.iconSizeXs} />
              </FlexItem>
              <FlexItem>
                <Text wrap="truncate">{x.company.name}</Text>
              </FlexItem>
            </Flex>
          )
        }
      ]}
    />
  ))
  .add("without a sticky first column", () => (
    <Table
      data={initialData}
      // toId fn needed to make react render stuff fast.
      toId={el => el.id.toString()}
      columns={[
        {
          id: "name",
          header: "Name",
          render: x => x.name,
          initialWidth: "minmax(400px, 1fr)"
        },
        {
          id: "username",
          header: "Username",
          render: x => x.username,
          initialWidth: "400px"
        },
        {
          id: "email",
          header: "Email",
          render: x => x.email,
          initialWidth: "400px"
        },
        {
          id: "phone",
          header: "Phone",
          render: x => x.phone,
          initialWidth: "400px"
        },
        {
          id: "website",
          header: "Website",
          render: x => x.website,
          initialWidth: "400px"
        },
        {
          id: "company",
          header: "Company",
          render: x => x.company.name,
          initialWidth: "400px"
        }
      ]}
      stickyFirstCol={false}
    />
  ))
  .add("using onStateChange", () => (
    <>
      <p>Resize a colum and check the browser console.</p>
      <Table
        data={initialData}
        // toId fn needed to make react render stuff fast.
        toId={el => el.id.toString()}
        onStateChange={state => {
          // TODO: make this work with storybook actions
          console.log(state);
        }}
        columns={[
          { id: "name", header: "Name", render: x => x.name },
          { id: "username", header: "Username", render: x => x.username },
          { id: "email", header: "Email", render: x => x.email },
          { id: "phone", header: "Phone", render: x => x.phone },
          { id: "website", header: "Website", render: x => x.website },
          { id: "company", header: "Company", render: x => x.company.name }
        ]}
      />
    </>
  ));
/* tslint:enable */
