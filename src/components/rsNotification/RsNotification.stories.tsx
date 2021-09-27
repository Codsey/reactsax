import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Notification from "./Base/RsNotificationFunction";
import RsNotification from "./Base/RsNotification";
import RsButton from "../rsButton/Base/RsButton";

import "boxicons";

export default {
  title: "Components/Notification",
  component: RsNotification,
  argTypes: {
    title: {
      description: "It's the notification Title",
    },
    text: {
      description: "It's the text that goes into the notification body",
    },
    notificationPosition: {
      description: "Changes the position of the notification",
      table: {
        defaultValue: {
          summary: "bottom-right",
        },
      },
    },
    color: {
      description:
        "Changes the color of the component it can be a Reactsax color or any HEX/RGB Value",
      table: {
        defaultValue: { summary: "Primary" },
      },
      control: "color",
    },
    icon: {
      description:
        "If you want to add icon to the notification component use this property",
      control: { disable: true },
    },
    duration: {
      description:
        "Change the duration of the notification with the duration property, the value is numerical and determine the seconds before the bone component is hidden",
      table: { defaultValue: { summary: 4 } },
    },
    square: {
      description:
        "Change the style of the notification with the square property so as not to have border-radius making it a rectangle",
      table: {
        defaultValue: { summary: false },
      },
    },
    border: {
      description:
        "Change the notification style with the border property by adding a border of the color provided as the value",
      table: {
        defaultValue: { summary: "primary" },
      },
    },
  },
} as ComponentMeta<typeof RsNotification>;

const Template: ComponentStory<typeof RsNotification> = (args) => {
  const handleClick = () => {
    Notification(args);
  };

  return (
    <div className="center">
      <RsButton onClick={handleClick}>Show Notification</RsButton>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: "Title",
  text:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi assumenda earum quibusdam quod et facilis molestiae consectetur fugit. Itaque nulla aspernatur voluptate suscipit sequi dolore. Ratione animi voluptatem fugiat eius.",
  // @ts-ignore
  icon: <box-icon type="logo" name="docker"></box-icon>,
  border: "danger",
//   pointer: true,
};
