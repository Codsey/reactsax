import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RsCheckbox from "./Base/RsCheckbox";

import "boxicons";

export default {
  title: "Components/Checkbox",
  component: RsCheckbox,
  argTypes: {
    children: {
      description:
        "The component children is basically the checkbox label and it can be a string or any element",
      control: { type: "text" },
      defaultValue: "Checkbox",
      type: { summary: "string or any element" },
    },
    color: {
      description:
        "Changes the color of the component it can be a Reactsax color or any HEX/RGB Value",
      table: {
        defaultValue: { summary: "Primary" },
      },
      control: "color",
    },
    checked: {
      description: "You can control the checkbox with the checked property",
      table: {
        defaultValue: { summary: false },
      },
    },
    disabled: {
      description: "Gives the checkbox a disabled status",
      table: {
        defaultValue: { summary: false },
      },
    },
    loading: {
      description: "Gives the checkbox a loading status",
      table: {
        defaultValue: { summary: false },
      },
    },
    labelBefore: {
      description:
        "If you want the checkbox label to be placed before the checkbox",
      table: {
        defaultValue: { summary: false },
      },
    },
    indeterminate: {
      description:
        "There are some cases where you have several checkboxes and you need one that manages all the others for this you can do it with the indeterminate property that adds a different style to the checkbox",
      table: {
        defaultValue: { summary: false },
      },
    },
    lineThrough: {
      description:
        "Add a line in the middle of the label when the checkbox is checked",
      table: {
        defaultValue: { summary: false },
      },
    },
    icon: {
      description: "Change the icon inside the checkbox component",
      control: { disable: true },
    },
  },
} as ComponentMeta<typeof RsCheckbox>;

const Template: ComponentStory<typeof RsCheckbox> = (args) => {
  const [checked, setChecked] = useState(true);

  const handleChange = (e: any) => {
    setChecked((prevState) => !prevState);
  };
  return (
    <div className="center">
      <RsCheckbox
        {...args}
        checked={checked}
        onChange={(e: any) => handleChange(e)}
      />
    </div>
  );
};

export const Default = Template.bind({});

export const Color = Template.bind({});
Color.args = {
  color: "#ca13eb",
};

export const Icon = Template.bind({});
Icon.args = {
  icon: (
    // @ts-ignore
    <box-icon name="happy-heart-eyes" type="solid" color="#eae9e9"></box-icon>
  ),
};

export const LabelBefore = Template.bind({});
LabelBefore.args = {
  labelBefore: true,
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  checked: true,
};

export const LineThrough = Template.bind({});
LineThrough.args = {
  lineThrough: true,
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  indeterminate: true,
};
