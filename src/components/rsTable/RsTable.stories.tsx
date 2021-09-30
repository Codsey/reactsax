import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RsTable from "./Base/RsTable";
import RsTableTd from "./Td/RsTableTd";
import RsTableTh from "./Th/RsTableTh";
import RsTableTr from "./Tr/RsTableTr";

export default {
  title: "Components/Table",
  component: RsTable,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof RsTable>;

const Template: ComponentStory<typeof RsTable> = (args) => (
  <div className="center" style={{ textAlign: "left" }}>
    <RsTable {...args}>
      <RsTableTr thead>
        <RsTableTh>ID</RsTableTh>
        <RsTableTh>Name</RsTableTh>
        <RsTableTh>Email</RsTableTh>
      </RsTableTr>
      <RsTableTr>
        <RsTableTd>1</RsTableTd>
        <RsTableTd>Moe</RsTableTd>
        <RsTableTd>moe@moe.com</RsTableTd>
      </RsTableTr>
      <RsTableTr>
        <RsTableTd>2</RsTableTd>
        <RsTableTd>Moe</RsTableTd>
        <RsTableTd>moe@moe.com</RsTableTd>
      </RsTableTr>
      <RsTableTr>
        <RsTableTd>3</RsTableTd>
        <RsTableTd>Moe</RsTableTd>
        <RsTableTd>moe@moe.com</RsTableTd>
      </RsTableTr>
    </RsTable>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  striped: true,
};
