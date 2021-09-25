import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RsSwitch from "./Base/RsSwitch";

import "boxicons";

export default {
  title: "Components/Switch",
  component: RsSwitch,
  argTypes: {
    children: {
      description:
        "It's the text of the switch, you can have a different text or element on switch on and off by using switchOff and switchOn properties",
      table: {
        type: { summary: "string or any element" },
      },
    },
    checked: {
      description:
        "If you want to have the switch controlled you can use the checked property",
      control: {
        disable: true,
      },
    },
    color: {
      description:
        "Changes the color of the component it can be a Reactsax color or any HEX/RGB Value",
      table: {
        defaultValue: { summary: "Primary" },
      },
      control: "color",
    },
    switchOn: {
      description: "It's the text of the switch when it's turned on",
      control: { disable: true },
    },
    switchOff: {
      description: "It's the text of the switch when it's turned off",
      control: { disable: true },
    },
    loading: {
      description: "Add a loading animation to the component",
      table: {
        defaultValue: { summary: false },
      },
    },
    indeterminate: {
      description: "Add an undetermined state to the component ",
      table: {
        defaultValue: { summary: false },
      },
    },
    square: {
      description: "Change the circular style to square",
      table: { defaultValue: { summary: false } },
    },
    circle: {
      description:
        "If you want the string or element to be on the circle itself you can add it to this property (check example below)",
      control: { disable: true },
    },
  },
} as ComponentMeta<typeof RsSwitch>;

const Template: ComponentStory<typeof RsSwitch> = (args) => (
  <div className="center">
    <RsSwitch {...args} />
  </div>
);

const LoadingTemplate: ComponentStory<typeof RsSwitch> = (args) => {
  const [loading, setLoading] = useState(false);

  const handleChange = () => {
    setLoading((prevState) => !prevState);
  };

  return (
    <div className="center">
      <RsSwitch onChange={handleChange}>Active Loading</RsSwitch>
      <RsSwitch loading={loading} />
    </div>
  );
};

export const Default = Template.bind({});

export const Color = Template.bind({});
Color.args = {
  color: "danger",
};

export const Children = Template.bind({});
Children.args = {
  children: "Hello",
};

export const SwitchOnAndSwitchOff = Template.bind({});
SwitchOnAndSwitchOff.args = {
  switchOn: "On",
  switchOff: "Off",
};

export const Icons = Template.bind({});
Icons.args = {
  //@ts-ignore
  switchOn: <box-icon name="sun" type="solid" color="#e4dede"></box-icon>,
  //@ts-ignore
  switchOff: <box-icon name="moon" type="solid" color="#e4dede"></box-icon>,
};

export const Loading = LoadingTemplate.bind({});

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  indeterminate: true,
};

export const Square = Template.bind({});
Square.args = {
  square: true,
};
