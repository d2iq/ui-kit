import * as React from "react";
import { DropdownSection, DropdownMenuItem } from "../dropdownMenu";
import { Flex, FlexItem } from "../styleUtils/layout";
import { Text } from "../styleUtils/typography";
import { Icon } from "../icon";
import { SystemIcons } from "../icons/dist/system-icons-enum";
import { greyLightLighten1 } from "../design-tokens/build/js/designTokens";
import { mockTableData } from "./mockTableData.json";

import {
  Table,
  Sorter,
  DropdownMenuCell,
  EmptyCell,
  TooltipHeaderCell,
  MutedCell
} from ".";

///////////////////////////////////////////////////////////////////////////////
//                                TESTING GEAR                               //
///////////////////////////////////////////////////////////////////////////////
// A low row-count as a default. Some Storybook-addon tries to stringify the whole content of the page, which makes for a slow dev-cycle. turn this up to e.g. 200 if you want to test how the table behaves under load. alternatively you could have a look at how to convince that addon to not serialize stuff...
const ROWS = 20;

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone?: string;
  website: string;
  company: {
    name: string;
  };
}
const { floor, random } = Math;
const getRandomInt = (max: number) => floor(random() * floor(max));

const initialData = mockTableData
  .slice(0, ROWS)
  .map((card, index) => ({ ...card, id: index }));

function update<A extends User>(data: A[], cursor: number) {
  const indexToReplace = getRandomInt(data.length);
  const newEntry = mockTableData[cursor];
  return data.map(e =>
    e.id === indexToReplace
      ? { ...newEntry, name: e.name, id: indexToReplace }
      : e
  );
}

const defaultColumns = [
  { id: "name", header: "Name", render: x => x.name },
  { id: "username", header: "Username", render: x => x.username },
  { id: "email", header: "Email", render: x => x.email },
  { id: "phone", header: "Phone", render: x => x.phone },
  { id: "website", header: "Website", render: x => x.website },
  { id: "company", header: "Company", render: x => x.company.name }
];

export default {
  title: "Data Listing/Table",
  component: Table
};

export const Default = () => (
  <Table
    data={initialData}
    toId={el => el.id.toString()}
    columns={defaultColumns}
  />
);

export const WithVariableCols = () => {
  const [cols, setCols] = React.useState(defaultColumns);

  // every second we're changing the columns to show.
  React.useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      const toRemove = i % 2 ? [] : ["email", "phone"];
      setCols(defaultColumns.filter(c => !toRemove.includes(c.id)));
      i = i + 1;
    }, 1000);
    return () => clearInterval(intervalId);
  }, [setCols]);

  return (
    <Table data={initialData} toId={el => el.id.toString()} columns={cols} />
  );
};

export const WithUpdatingData = () => {
  const [items, setItems] = React.useState(initialData);
  const cursor = React.useRef(ROWS);
  // update data every couple milliseconds
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (cursor.current >= mockTableData.length) {
        clearTimeout(timeout);
      } else {
        setItems(update(items, cursor.current));

        cursor.current++;
      }
    }, 1000);
    return () => void clearTimeout(timeout);
  }, [cursor, items, setItems]);

  return (
    <Table
      data={items}
      // toId fn needed to make react render stuff fast.
      toId={el => el.id.toString()}
      columns={defaultColumns}
    />
  );
};

export const ColumnsWithCustomWidths = () => (
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
);

export const ColumnsWithWrappingContent = () => (
  <Table
    data={initialData}
    // toId fn needed to make react render stuff fast.
    toId={el => el.id.toString()}
    columns={[
      {
        id: "name",
        header: "Name",
        render: x => x.name,
        initialWidth: "100px",
        contentNoWrap: false
      },
      {
        id: "username",
        header: "Username",
        render: x => x.username,
        contentNoWrap: false
      },
      {
        id: "email",
        header: "E-mail",
        render: x => x.email,
        contentNoWrap: false
      },
      {
        id: "phone",
        header: "Phone",
        render: x => x.phone,
        contentNoWrap: false
      },
      {
        id: "website",
        header: "Website",
        render: x => x.website,
        contentNoWrap: false
      },
      {
        id: "company",
        header: "Company (With Longer Title)",
        render: x => x.company.name,
        initialWidth: "200px",
        contentNoWrap: false
      }
    ]}
  />
);

export const SortableColumns = () => (
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
);

export const ColumnTextAlignment = () => (
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
);

export const ColumnHeaderWithTooltip = () => (
  <Table
    data={initialData}
    // toId fn needed to make react render stuff fast.
    toId={el => el.id.toString()}
    columns={[
      {
        id: "email",
        render: x => x.email,
        sorter: Sorter.string("email"),
        header: (
          <TooltipHeaderCell
            tooltipContent={
              <Text color={greyLightLighten1}>Tooltip with Text Component</Text>
            }
          >
            Email
          </TooltipHeaderCell>
        )
      },
      { id: "phone", header: "Phone", render: x => x.phone },
      {
        id: "name",
        header: (
          <TooltipHeaderCell tooltipContent="Name Data">Name</TooltipHeaderCell>
        ),
        render: x => x.name,
        sorter: Sorter.string("name")
      },

      {
        id: "website",
        header: (
          <TooltipHeaderCell tooltipContent="Website Data">
            Website
          </TooltipHeaderCell>
        ),
        render: x => x.website,
        sorter: Sorter.string("website")
      },
      {
        id: "company",
        render: x => x.company.name,
        header: (
          <TooltipHeaderCell tooltipContent="Company Data">
            Company
          </TooltipHeaderCell>
        )
      }
    ]}
  />
);

export const ActionMenuOnEachRow = () => (
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
);

export const EmptyCells = () => (
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
);

export const MutedCells = () => (
  <Table
    data={initialData}
    // toId fn needed to make react render stuff fast.
    toId={el => el.id.toString()}
    columns={[
      { id: "name", header: "Name", render: x => x.name },
      { id: "username", header: "Username", render: x => x.username },
      {
        id: "email",
        header: "Email",
        render: x => <MutedCell>No email provided</MutedCell>
      },
      { id: "phone", header: "Phone", render: x => x.phone },
      { id: "website", header: "Website", render: x => x.website },
      { id: "company", header: "Company", render: x => x.company.name }
    ]}
  />
);

export const CellsRenderedWithReactComponents = () => (
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
              <Icon shape={SystemIcons.User} size="xs" />
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
          <a href={`mailto:${x.email}`} target="_blank" rel="noreferrer">
            {x.email}
          </a>
        )
      },
      { id: "phone", header: "Phone", render: x => <span>{x.phone}</span> },
      {
        id: "website",
        header: "Website",
        render: x => (
          <a href={x.website} target="_blank" rel="noreferrer">
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
              <Icon shape={SystemIcons.Folder} size="xs" />
            </FlexItem>
            <FlexItem>
              <Text wrap="truncate">{x.company.name}</Text>
            </FlexItem>
          </Flex>
        )
      }
    ]}
  />
);

export const WithoutStickyFirstColumn = () => (
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
);

export const UsingOnStateChange = () => (
  <>
    <p>Resize a column and check the browser console.</p>
    <Table
      data={initialData}
      // toId fn needed to make react render stuff fast.
      toId={el => el.id.toString()}
      onStateChange={state => {
        // TODO: make this work with storybook actions
        console.log(state);
      }}
      columns={defaultColumns}
    />
  </>
);
