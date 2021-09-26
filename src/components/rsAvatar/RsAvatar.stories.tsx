import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RsAvatar from "./Base/RsAvatar";
import RsAvatarGroup from "./Group/RsAvatarGroup";

import Avatar from "../../assets/images/avatar-1.png";

import "boxicons";

export default {
  title: "Components/Avatar",
  component: RsAvatar,
  argTypes: {
    children: {
      description: "It's the avatar content it can be a string or any element",
      control: { disable: true },
      table: { type: { summary: "string or any element" } },
    },
    color: {
      description:
        "Changes the color of the component it can be a Reactsax color or any HEX/RGB Value",
      table: {
        defaultValue: { summary: "Primary" },
      },
      control: "color",
    },
    size: {
      description:
        "Change the size of the component to the number provided if for example the size value is 60 equivalent to 60px in height and width",
      table: {
        defaultValue: { summary: 44 },
      },
    },
    badge: {
      description:
        "Add a badge to the component, It can be a boolean if you want to use the default dot badge or you can just add any element to the badge property",
      control: {
        disable: true,
      },
    },
    badgeColor: {
      description:
        "Changes the color of the badge it can be a Reactsax color or any HEX/RGB Value",
      table: {
        defaultValue: { summary: "Primary" },
      },
      control: "color",
    },
    badgePosition: {
      description:
        "Changes the position of the badge by default the badge is located at bottom-right",
    },
    writing: {
      description:
        "Adds a animated wirting badge, the badge property has to be enabled first",
      table: {
        defaultValue: { summary: false },
      },
    },
    text: {
      description:
        "If the Avatar will only contain text it's preferred to use the text property, The maximum length of characters is 5. When that limit is exceeded, changes are made in the text",
    },
    circle: {
      description: "Change the border-radius of the entire component to 50%",
      table: {
        defaultValue: false,
      },
    },
    square: {
      description: "Change the border-radius of the entire component to 0%",
      table: {
        defaultValue: false,
      },
    },
    history: {
      description:
        "It generates a border around the avatar, this is usually used to represent that the user is doing an action or in many cases has a History",
      table: {
        defaultValue: { summary: false },
      },
    },
    historyGradient: {
      description: "If you want the history border to have a gradient colors",
      table: {
        defaultValue: { summary: false },
      },
    },
    loading: {
      description: "Add a loading animation to the component",
      table: {
        defaultValue: { summary: false },
      },
    },
    pointer: {
      description: "If you want the avatar to have a pointer cursor",
      table: {
        defaultValue: { summary: false },
      },
    },

    // COMING SOON
    icon: {
      description: "Add a space next to the avatar for icons",
      table: {
        disable: true,
        defaultValue: { summary: false },
      },
    },
    icons: {
      description:
        "It the icons that goes into the icon space next to the avatar",
      control: { disable: true },
      table: {
        disable: true,
        defaultValue: { summary: false },
      },
    },
    Group: {
      description:
        "You can group Avatars by putting them inside of RsAvatarGroup component. you must provide max property for the maximum number of Group to be shown. Also RsAvatarGroup accepts a float property causes the avatar components to be placed on each other and the grouping of one on top of the other is eliminated (Check example Below)",
      control: { disable: true },
    },
  },
} as ComponentMeta<typeof RsAvatar>;

const Template: ComponentStory<typeof RsAvatar> = (args) => (
  <div className="center">
    <RsAvatar {...args} />
  </div>
);

const GroupTemplate: ComponentStory<typeof RsAvatarGroup> = (args) => (
  <React.Fragment>
    <div className="center">
      <RsAvatarGroup {...args}>
        <RsAvatar>
          <img src={Avatar} alt="avatar" />
        </RsAvatar>
        <RsAvatar>
          <img src={Avatar} alt="avatar" />
        </RsAvatar>
        <RsAvatar>
          <img src={Avatar} alt="avatar" />
        </RsAvatar>
        <RsAvatar>
          <img src={Avatar} alt="avatar" />
        </RsAvatar>
      </RsAvatarGroup>
    </div>
    <div className="center">
      <RsAvatarGroup {...args} float>
        <RsAvatar>
          <img src={Avatar} alt="avatar" />
        </RsAvatar>
        <RsAvatar>
          <img src={Avatar} alt="avatar" />
        </RsAvatar>
        <RsAvatar>
          <img src={Avatar} alt="avatar" />
        </RsAvatar>
        <RsAvatar>
          <img src={Avatar} alt="avatar" />
        </RsAvatar>
      </RsAvatarGroup>
    </div>
  </React.Fragment>
);

export const Default = Template.bind({});
Default.args = {
  text: "Moe",
};

export const Color = Template.bind({});
Color.args = {
  text: "Moe",
  color: "#17d146",
};

export const Size = Template.bind({});
Size.args = {
  // @ts-ignore
  children: <box-icon name="docker" type="logo" color="#272424"></box-icon>,
  size: 80,
};

export const Badge = Template.bind({});
Badge.args = {
  children: <img src={Avatar} alt="avatar" />,
  badge: true,
  badgeColor: "danger",
};

export const Circle = Template.bind({});
Circle.args = {
  children: <img src={Avatar} alt="avatar" />,
  badge: true,
  badgeColor: "#17d146",
  circle: true,
};

export const Square = Template.bind({});
Square.args = {
  children: <img src={Avatar} alt="avatar" />,
  badge: true,
  badgeColor: "#17d146",
  square: true,
};

export const Loading = Template.bind({});
Loading.args = {
  children: <img src={Avatar} alt="avatar" />,
  badge: true,
  badgeColor: "#17d146",
  loading: true,
};

export const Group = GroupTemplate.bind({});
Group.args = {
  max: 3,
};
