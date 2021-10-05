import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RsSidebar from "./Base/RsSidebar";
import RsSidebarItem from "./Item/RsSidebarItem";
import RsSidebarGroup from "./Group/RsSideBarGroup";
import RsAvatar from "../rsAvatar/Base/RsAvatar";

import { ReactComponent as ReactLogo } from "../../assets/images/react-logo.svg";

import "boxicons";

import Avatar from "../../assets/images/avatar-1.png";

export default {
  title: "Components/Sidebar",
  component: RsSidebar,
  argTypes: {
    logo: {
      description: "Add elements on top of the entire sidebar.",
      control: { disable: true },
    },
    children: {
      description: "Where the Sidebar items goes",
      control: { disable: true },
    },
    header: {
      description: "Add the elements below the logo and above the items.",
      control: { disable: true },
    },
    footer: {
      description: "Add the elements at the bottom of the sidebar.",
      control: { disable: true },
    },
    open: {
      description: "Determines if the component is visible.",
      table: { defaultValue: { summary: false } },
    },
    absolute: {
      description: "Determine if the component is of absolute position.",
      table: { defaultValue: { summary: false } },
    },
    relative: {
      description: "Determine if the component is relative position.",
      table: { defaultValue: { summary: false } },
    },
    reduce: {
      description:
        "Determine if the component is in a reduced state with a width of 50px.",
      table: { defaultValue: { summary: false } },
    },
    hoverExpand: {
      description:
        "Adds the functionality to expand when the user enters inside the sidebar and vice versa.",
      table: { defaultValue: { summary: false } },
    },
    square: {
      description: "Determine if the component has no border radius",
      table: { defaultValue: { summary: false } },
    },
    notShadow: {
      description: "Remove the shadow from the sidebar",
      table: { defaultValue: { summary: false } },
    },
    color: {
      description: "Change the background color of the sidebar",
      table: {
        defaultValue: { summary: "Primary" },
      },
      control: "color",
    },
    textWhite: {
      description: "Change the text color to white",
      table: { defaultValue: { summary: false } },
    },
    right: {
      description: "Determines if the component is positioned to the right",
      table: {
        defaultValue: { summary: false },
      },
    },
  },
} as ComponentMeta<typeof RsSidebar>;

const Template: ComponentStory<typeof RsSidebar> = (args) => (
  <div className="hidden">
    <RsSidebar {...args}>
      {
        <RsSidebarItem
          // @ts-ignore
          icon={<box-icon name="home" color="#f1eeee"></box-icon>}
          active
        >
          Home
        </RsSidebarItem>
      }
      {
        <RsSidebarItem
          // @ts-ignore
          icon={<box-icon name="grid-alt" color="#f1eeee"></box-icon>}
        >
          Market Overview
        </RsSidebarItem>
      }
      {
        <RsSidebarItem
          // @ts-ignore
          icon={<box-icon name="music" color="#f1eeee"></box-icon>}
        >
          Music
        </RsSidebarItem>
      }
      {
        <RsSidebarItem
          // @ts-ignore
          icon={<box-icon name="donate-heart" color="#f1eeee"></box-icon>}
        >
          Donate
        </RsSidebarItem>
      }
      <RsSidebarGroup
        header={
          <RsSidebarItem
            arrow
            icon={
              // @ts-ignore
              <box-icon name="face" type="solid" color="#f1eeee"></box-icon>
            }
          >
            Social
          </RsSidebarItem>
        }
      >
        {
          <RsSidebarItem
            icon={
              // @ts-ignore
              <box-icon name="facebook" type="logo" color="#f1eeee"></box-icon>
            }
          >
            Facebook
          </RsSidebarItem>
        }
        {
          <RsSidebarItem
            icon={
              // @ts-ignore
              <box-icon name="instagram" type="logo" color="#f1eeee"></box-icon>
            }
          >
            Instagram
          </RsSidebarItem>
        }
        {
          <RsSidebarItem
            icon={
              // @ts-ignore
              <box-icon name="twitter" type="logo" color="#f1eeee"></box-icon>
            }
          >
            Twitter
          </RsSidebarItem>
        }
      </RsSidebarGroup>
    </RsSidebar>
  </div>
);

const FooterContent = () => {
  return (
    <RsAvatar>
      <img src={Avatar} alt="avatar" />
    </RsAvatar>
  );
};

export const Default = Template.bind({});
Default.args = {
  absolute: true,
  //   color: "primary",
  textWhite: true,
  logo: <ReactLogo />,
  open: true,
  footer: <FooterContent />,
};
