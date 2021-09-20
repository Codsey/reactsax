import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RsButton from "./RsButton";

export default {
  title: "Components/Button",
  component: RsButton,
  argTypes: {
    //CHILDREN
    children: {
      description:
        "Children is what goes inside of the button. It can be a text/icon or simply any element",
      table: {
        defaultValue: { summary: "A Button" },
        type: { summary: "string or any Element" },
      },
      control: { type: "text" },
      defaultValue: "A Button",
    },
    // COLOR OF THE COMPONENT
    color: {
      description:
        "Changes the color of the component it can be a Reactsax color or any HEX/RGB Value",
      table: {
        defaultValue: { summary: "Primary" },
      },
      control: "color",
    },
    // UNUSED PROP
    componentColor: { table: { disable: true } },
    // SIZE OF THE BUTTON
    size: {
      options: ["xl", "large", "default", "small", "mini"],
      control: { type: "select" },
      description:
        "Change the size of the entire button including padding, font-size and border ",
      table: {
        defaultValue: { summary: "deafult" },
      },
    },
    // ACTIVE STATE
    active: {
      description: "Changes the state of the button to active state",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    // DISABLED STATE
    disabled: {
      description: "Changes the state of the button to disabled state",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    // ICON
    icon: {
      description:
        "It changes the size of the button to fit the icon, if your button will only include icon set icon to true and add the icon as a child to the button",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    // CIRCLE
    circle: {
      description: "It completely round the corners of the button",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    // Square
    square: {
      description: "It completely makes the corners of the button straight (Removes border-radius)",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
} as ComponentMeta<typeof RsButton>;

const Template: ComponentStory<typeof RsButton> = (args) => (
  <RsButton {...args}>{args.children}</RsButton>
);

export const Default = Template.bind({});
Default.args = {};

export const Loading = Template.bind({});
Loading.args = { loading: true };
