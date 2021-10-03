import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RsSidebar from "./Base/RsSidebar";
import RsSidebarItem from "./Item/RsSidebarItem";

import { ReactComponent as ReactLogo } from "../../assets/images/react-logo.svg";

import "boxicons";

export default {
  title: "Components/Sidebar",
  component: RsSidebar,
  argTypes: {},
} as ComponentMeta<typeof RsSidebar>;

const Template: ComponentStory<typeof RsSidebar> = (args) => (
  <div style={{ position: "relative" }}>
    <RsSidebar {...args}>
      {
        <RsSidebarItem
          // @ts-ignore
          icon={<box-icon name="home" type="solid" color="#e4dada"></box-icon>}
        >
          Item 1
        </RsSidebarItem>
      }
    </RsSidebar>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  relative: true,
//   color: "primary",
  textWhite: true,
  logo: <ReactLogo />,
  open: true,
};
