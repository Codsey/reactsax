import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RsAlert from "./Base/rsAlert";

import "../../App.css";

import "boxicons";

export default {
  title: "Components/Alert",
  component: RsAlert,
  argTypes: {
    // Children
    children: {
      description:
        "Children is what goes inside of the Alert. It can be a text or simply any element",
      table: {
        defaultValue: { summary: "Hello World" },
        type: { summary: "string or any Element" },
      },
      control: { type: "text" },
      defaultValue: "Hello World",
    },
    // Title
    title: {
      description: "It's the title of the Alert",
      table: {
        defaultValue: { summary: "A Title" },
      },
      control: { type: "text" },
      defaultValue: "A Title",
    },
    // Color
    color: {
      description:
        "Changes the color of the component it can be a Reactsax color or any HEX/RGB Value",
      table: {
        defaultValue: { summary: "Primary" },
      },
      control: "color",
    },
    // Solid
    solid: {
      description:
        "It changes the color of the Alert to a solid color instead of a transparent color",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    // Border
    border: {
      description: "It changes the style to only have border",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    // Shadow
    shadow: {
      description: "It Changes the style of the Alert to have a Shadow", // FIX LATER
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    // Relief
    relief: {
      description: "It changes the style of the alert to relief",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    // Footer
    footer: {
      description: "Footer of the Alert can includes text or any Element",
      table: {
        defaultValue: {
          summary: "",
        },
      },
      control: { type: "text" },
      defaultValue: "I'm A footer",
    },
    // Pagination
    pagination: {
      description:
        "There are times when we need to show a lot of content to the user but we don't want to extend the text and make the alert very large and tall",
    },
    icon: {
      description:
        "You can add an Icon to the left on the Alert by using the icon property",
      control: { disable: true },
    },

    // Temporarily disabled (coming soon)
    active: {
      table: { disable: true },
    },
    closable: {
      table: { disable: true },
    },
    hiddenContent: {
      table: { disable: true },
    },
    toggleHiddenContent: {
      table: { disable: true },
    },
  },
} as ComponentMeta<typeof RsAlert>;

const Template: ComponentStory<typeof RsAlert> = (args) => (
  <div className="center">
    <RsAlert {...args}>{args.children}</RsAlert>
  </div>
);

export const Default = Template.bind({});
Default.args = {};

export const Solid = Template.bind({});
Solid.args = {
  solid: true,
};

export const Border = Template.bind({});
Border.args = {
  border: true,
};

export const Shadow = Template.bind({});
Shadow.args = {
  shadow: true,
};

export const Gradient = Template.bind({});
Gradient.args = {
  gradient: true,
};

export const Relief = Template.bind({});
Relief.args = {
  relief: true,
};

export const Color = Template.bind({});
Color.args = {
  color: "#b8237f",
};

export const Icon = Template.bind({});
Icon.args = {
  // @ts-ignore
  icon: <box-icon name="docker" type="logo" color="#195bff"></box-icon>,
  footer: "",
};

export const Pagination = Template.bind({});
Pagination.args = {
  pagination: ["Page1", "Page2", "Page3"],
  footer: "",
};
