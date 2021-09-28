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
  max: 7,
  loadingItems: [3, 4],
};
