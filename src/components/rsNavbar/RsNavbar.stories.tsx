import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RsNavbar from "./Base/RsNavbar";
import RsNavbarItem from "./Item/RsNavbarItem";
import RsButton from "../rsButton/Base/RsButton";

import { ReactComponent as ReactLogo } from "../../assets/images/react-logo.svg";

export default {
  title: "Components/Navbar",
  component: RsNavbar,
  argTypes: {
    color: {
      description:
        "Changes the color of the component it can be a Reactsax color or any HEX/RGB Value",
      table: {
        defaultValue: { summary: "dark" },
      },
      control: "color",
    },
    textWhite: {
      description: "Change the Navbar Items font color to white",
      table: {
        defaultValue: { summary: false },
      },
    },
    hideScroll: {
      description:
        "Add functionality to hide navbar when user scroll down and show when scroll up",
      table: {
        defaultValue: { summary: false },
      },
    },
    paddingScroll: {
      description:
        "Add the functionality that the component has a padding up and down that when it is lowered the scroll is eliminated giving a pleasant effect",
      table: {
        defaultValue: { summary: false },
      },
    },
    square: {
      description:
        "Remove the border-radius property by making the component square",
      table: {
        defaultValue: { summary: false },
      },
    },
    fixed: {
      description: "Defines if the component is fixed on the screen.",
      table: {
        defaultValue: { summary: false },
      },
    },
    shadow: {
      description: "Add a shadow to the component.",
      table: {
        defaultValue: { summary: false },
      },
    },
    shadowScroll: {
      description:
        "Add functionality to add shadow to component when scrollTop is more than 0.",
      table: {
        defaultValue: { summary: false },
      },
    },
  },
} as ComponentMeta<typeof RsNavbar>;

const Template: ComponentStory<typeof RsNavbar> = (args) => (
  <div className="example-nav">
    <RsNavbar {...args}>
      <RsNavbarItem>
        <ReactLogo />
      </RsNavbarItem>
      <div className="center-nav-item">
        <RsNavbarItem active>Guide</RsNavbarItem>
        <RsNavbarItem>Documents</RsNavbarItem>
        <RsNavbarItem>Components</RsNavbarItem>
        <RsNavbarItem>License</RsNavbarItem>
      </div>
      <div className="right-nav-item">
        <RsButton flat={true}>Login</RsButton>
        <RsButton>Get Started</RsButton>
      </div>
    </RsNavbar>
    <div className="square">
      <div className="child">child 1</div>
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  color: "dark",
  textWhite: true,
};

export const Color = Template.bind({});
Color.args = {
  color: "#b300bf",
  textWhite: true,
};

export const Square = Template.bind({});
Square.args = {
  color: "dark",
  textWhite: true,
  square: true,
};
