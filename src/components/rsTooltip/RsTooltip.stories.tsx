import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RsTooltip from "./Base/RsTooltip";
import RsButton from "../rsButton/Base/RsButton";

export default {
  title: "Components/Tooltip",
  component: RsTooltip,
  argTypes: {
    tooltip: {
      description: "it's the content of the tooltip component",
    },
    left: {
      description: "Change the position of the tooltip to the left",
      table: {
        defaultValue: { summary: false },
      },
    },
    right: {
      description: "Change the position of the tooltip to the right",
      table: {
        defaultValue: { summary: false },
      },
    },
    bottom: {
      description: "Change the position of the tooltip to the bottom",
      table: {
        defaultValue: { summary: false },
      },
    },
    color: {
      description:
        "Changes the color of the component it can be a Reactsax color or any HEX/RGB Value",
      table: {
        defaultValue: { summary: "rgb(17, 18, 20)" },
      },
      control: "color",
    },
    border: {
      description:
        "Change the style of the tooltip by adding a border and changing the color of the background (Now the color property would change the color of the border)",
      table: { defaultValue: { summary: false } },
    },
    borderThick: {
      description:
        "Change the style of the tooltip by adding a bottom border and changing the color of the background (Now the color property would change the color of the border)",
      table: { defaultValue: { summary: false } },
    },
    square: {
      description:
        "Change the border-radius of the tooltip so that it is completely a rectangle",
      table: { defaultValue: { summary: false } },
    },
    circle: {
      description:
        "Change the border-radius of the tooltip to make it more circular",
      table: { defaultValue: { summary: false } },
    },
    shadow: {
      description:
        "Change the style of the tooltip to have a shadow and the background color",
      table: { defaultValue: { summary: false } },
    },
    noArrow: {
      description:
        "In some cases you may need to remove the arrow from the tooltip",
      table: { defaultValue: { summary: false } },
    },
    loading: {
      description: "Add an animation and loading style to the tooltip",
      table: { defaultValue: { summary: false } },
    },
    notHover: {
      description:
        "If you want to disable the tooltip for any reason you can set the notHover value to true",
      table: { defaultValue: { summary: false } },
    },
    interactivity: {
      description:
        "Determine if the tooltip is interactive and makes it possible to click without automatically hiding.",
      table: { defaultValue: { summary: false } },
    },
  },
} as ComponentMeta<typeof RsTooltip>;

const Template: ComponentStory<typeof RsTooltip> = (args) => {
  return (
    <div className="center">
      <RsTooltip {...args}>
        <RsButton>Hover Here</RsButton>
      </RsTooltip>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  tooltip: "Hello",
};
