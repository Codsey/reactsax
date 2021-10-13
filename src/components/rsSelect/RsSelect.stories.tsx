import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RsSelect from "./Base/RsSelect";

export default {
  title: "Components/Select",
  component: RsSelect,
  argTypes: {},
} as ComponentMeta<typeof RsSelect>;

const Template: ComponentStory<typeof RsSelect> = (args) => (
  <RsSelect {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "Name",
  options: [
    { label: "Name1", value: "name1" },
    { label: "Name2", value: "name2" },
    { label: "Name3", value: "name3" },
    { label: "Name4", value: "name4" },
  ],
  multiple: true,
};
