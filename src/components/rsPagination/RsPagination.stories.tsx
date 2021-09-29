import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RsPagination from "./Base/RsPagination";

export default {
  title: "Components/Pagination",
  component: RsPagination,
  argTypes: {
    length: {
      description: "It's the number of the pages and it's a required property",
    },
    max: {
      description:
        "It's the number of items (buttons) to be showen in the pagination",
      table: { defaultValue: { summary: 9 } },
    },
    color: {
      description:
        "Changes the color of the component it can be a Reactsax color or any HEX/RGB Value",
      table: {
        defaultValue: { summary: "Primary" },
      },
      control: "color",
    },
    disabled: {
      description: "Disables the pagination",
      table: { defaultValue: { summary: false } },
    },
    notArrows: {
      description: "It removes the back and next arrows",
      table: { defaultValue: { summary: false } },
    },
    onlyArrows: {
      description:
        "You may need in small spaces to remove the buttons and leave only the arrows",
      table: { defaultValue: { summary: false } },
    },
    circle: {
      description:
        "Change the radius of all the elements that make up the component by making them circular",
      table: { defaultValue: { summary: false } },
    },
    square: {
      description:
        "Change the radius of all the elements that make up the component making them square",
      table: { defaultValue: { summary: false } },
    },
    buttonsDotted: {
      description:
        "Completely change the style of the component and remove the internal numbers in each button with the property",
      table: { defaultValue: { summary: false } },
    },
    disabledItems: {
      description:
        "You can disable specific buttons by providing the page numbers in an array to this property",
      control: { disable: true },
    },
    loadingItems: {
      description:
        "You can add loading anuimation to specific buttons by providing the page numbers in an array to this property",
      control: { disable: true },
    },
    notMargin: {
      description:
        "Change the style of the entire component by removing the margin between the buttons and changing the radius",
      table: { defaultValue: { summary: false } },
    },
    progress: {
      description:
        "Add a progress bar to the pagination by referencing where you find the last page",
      table: { defaultValue: { summary: false } },
    },
    dottedNumber: {
      description:
        "You can change the number of pages that are added when the user clicks on the points to advance more pages quickly",
      table: { defaultValue: { summary: 5 } },
    },
    infinite: {
      description:
        "You can make the pagination infinite with the infinite property, this means that the arrow buttons are no longer in the disabled state",
      table: { defaultValue: { summary: false } },
    },
  },
} as ComponentMeta<typeof RsPagination>;

const Template: ComponentStory<typeof RsPagination> = (args) => (
  <div className="center">
    <RsPagination {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  length: 10,
};

export const Color = Template.bind({});
Color.args = {
  length: 10,
  color: "#eb4034",
};

export const Disabled = Template.bind({});
Disabled.args = {
  length: 10,
  disabled: true,
};

export const NotArrows = Template.bind({});
NotArrows.args = {
  length: 10,
  notArrows: true,
};

export const OnlyArrows = Template.bind({});
OnlyArrows.args = {
  length: 10,
  onlyArrows: true,
};

export const Circle = Template.bind({});
Circle.args = {
  length: 10,
  circle: true,
};

export const Square = Template.bind({});
Square.args = {
  length: 10,
  square: true,
};

export const ButtonsDotted = Template.bind({});
ButtonsDotted.args = {
  length: 10,
  buttonsDotted: true,
};

export const DisabledItems = Template.bind({});
DisabledItems.args = {
  length: 10,
  disabledItems: [3, 6],
};

export const LoadingItems = Template.bind({});
LoadingItems.args = {
  length: 10,
  loadingItems: [3, 6],
};

export const NotMargin = Template.bind({});
NotMargin.args = {
  length: 10,
  notMargin: true,
};

export const Progress = Template.bind({});
Progress.args = {
  length: 10,
  progress: true,
};

export const DottedNumber = Template.bind({});
DottedNumber.args = {
  length: 100,
  dottedNumber: 10,
};

export const Infinite = Template.bind({});
Infinite.args = {
  length: 10,
  infinite: true,
};
