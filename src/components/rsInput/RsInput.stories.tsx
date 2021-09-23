import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RsInput from "./Base/RsInput";

import "../../styles/reactsax.scss";

export default {
  title: "Components/Input",
  component: RsInput,
  argTypes: {
    placeholder: {
      description: "It's the placeholder of the input",
    },
    label: {
      description: "Adds a label to the input",
    },
    labelPlaceholder: {
      description:
        "You can have a placeholder with a great animation when being or in focus or with a value becoming a label above the input",
    },
    color: {
      description:
        "Change the color of the component and add a border below with the color property, the allowed values ​​are the main colors of reactsax and the colors (RGB y HEX)",
      control: { type: "color" },
      table: {
        defaultValue: { summary: "primary" },
      },
    },
    icon: {
      description: "Add icon to the input using the icon property",
      control: { disable: true },
    },
    iconAfter: {
      description:
        "You can position the icon after the input using this property",
      table: {
        defaultValue: { summary: false },
      },
    },
    message: {
      description:
        "You can add a message below the input to report that a field is missing or the value is wrong",
    },
    messageType: {
      description: "To control the message color it accepts reactsax colors",
      defaultValue: "primary",
      table: {
        defaultValue: { summary: "primary" },
      },
    },
    state: {
      description: "Change the color of the input for some state",
    },
    progress: {
      description:
        "Add a validation progress bar, the most common is its use to validate passwords and correct data within the input, its value is (0 - 100).",
    },
    loading: {
      description: "Add a loading animation to the input",
      table: {
        defaultValue: { summary: false },
      },
    },
    type: {
      description: "Change the type of input",
      control: { disable: true },
    },
    border: {
      description: "Changes the styles of the input to bordered input",
      table: {
        defaultValue: { summary: false },
      },
    },
    shadow: {
      description: "Adds shadow to the input",
      table: {
        defaultValue: { summary: false },
      },
    },
    // DISABLED PROP
    onChange: {
      table: { disable: true },
    },
    // WILL BE ADDED LATER
    iconClick: {
      table: { disable: true },
    },
  },
} as ComponentMeta<typeof RsInput>;

const Template: ComponentStory<typeof RsInput> = (args) => (
  <div className="center">
    <RsInput {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "Name",
  onChange: () => {},
};
