import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RsButton from "./Base/RsButton";
import RsButtonGroup from "./Group/RsButtonGroup";

import "boxicons";

import "../../App.css";

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
    rippleProp: { table: { disable: true } },
    // SIZE OF THE BUTTON
    size: {
      options: ["xl", "large", "default", "small", "mini"],
      control: { type: "radio" },
      defaultValue: "default",
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
      description:
        "It completely makes the corners of the button straight (Removes border-radius)",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    // Loading
    loading: {
      description: "It adds loading status to the button",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    // Upload
    upload: {
      description: "It adds uploading status to the button",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    // Block
    block: {
      description: "It makes the button have the full width",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    // Animation Type
    animationType: {
      description: "Specify the animation type",
      table: {
        defaultValue: {
          summary: "null",
        },
      },
    },
    // Animation Component
    animate: {
      description:
        "The Element or string that the button children is animted to on hover",
      control: {
        type: "text",
      },
    },
    // Controling Animation State
    animateInactive: {
      description: "If you want to manually control the animation",
      table: {
        defaultValue: {
          summary: "null",
        },
      },
    },
    // Flat
    flat: {
      description: "Changes the style of the button to flat",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    // Border
    border: {
      description: "Changes the style of the button to only have borders",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    gradient: {
      description:
        "Automatically generates gradient color from the provided color",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    relief: {
      description: "Changes the style of the button to relief", // CHANGE LATER
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    transparent: {
      description: "Changes the style of the button to transparent",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    shadow: {
      description:
        "Adds shadow effect to the buttons (Affected by dark/light reactsax property)",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    floating: {
      description: "Adds floating effect to the button",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
} as ComponentMeta<typeof RsButton>;

const Template: ComponentStory<typeof RsButton> = (args) => (
  <div className="center">
    <RsButton {...args}>{args.children}</RsButton>
  </div>
);

const GroupTemplate: ComponentStory<typeof RsButtonGroup> = (args) => (
  <div className="center">
    <RsButtonGroup>
      <RsButton {...args}>{args.children}</RsButton>
      <RsButton {...args}>{args.children}</RsButton>
      <RsButton {...args}>{args.children}</RsButton>
    </RsButtonGroup>
  </div>
);

const SizeTemplate: ComponentStory<typeof RsButton> = (args) => (
  <div className="center">
    <RsButton size="xl">XLarge</RsButton>
    <RsButton size="l">Large</RsButton>
    <RsButton size="default">Default</RsButton>
    <RsButton size="small">Small</RsButton>
    <RsButton size="mini">Mini</RsButton>
  </div>
);

export const Default = Template.bind({});
Default.args = {};

export const Flat = Template.bind({});
Flat.args = {
  flat: true,
};

export const Border = Template.bind({});
Border.args = {
  border: true,
};

export const Gradient = Template.bind({});
Gradient.args = {
  color: "#ab09a0",
  gradient: true,
};

export const Relief = Template.bind({});
Relief.args = {
  relief: true,
};

export const Transparent = Template.bind({});
Transparent.args = {
  transparent: true,
};

export const Shadow = Template.bind({});
Shadow.args = {
  shadow: true,
};

export const Color = Template.bind({});
Color.args = {
  color: "rgb(13, 166, 16)",
};

export const Icon = Template.bind({});
Icon.args = {
  icon: true,
  // @ts-ignore
  children: <box-icon name="home" type="solid" color="#e6dfdf"></box-icon>,
};

export const Circle = Template.bind({});
Circle.args = {
  circle: true,
  children: "A",
};

export const Square = Template.bind({});
Square.args = {
  square: true,
};

export const Size = SizeTemplate.bind({});
Size.args = {};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const Upload = Template.bind({});
Upload.args = {
  upload: true,
};

export const Block = Template.bind({});
Block.args = {
  block: true,
};

export const Animate = Template.bind({});
Animate.args = {
  animationType: "vertical",
  animate: "Animated",
};

export const Floating = Template.bind({});
Floating.args = {
  floating: true,
};

export const Group = GroupTemplate.bind({});
Group.args = {
  children: "I'm A Button",
};
