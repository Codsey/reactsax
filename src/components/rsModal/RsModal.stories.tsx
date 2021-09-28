import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RsModal from "./Base/RsModal";
import RsButton from "../rsButton/Base/RsButton";
import RsInput from "../rsInput/Base/RsInput";
import RsCheckbox from "../rsCheckbox/Base/RsCheckbox";

import "../../App.css";
import "boxicons";

export default {
  title: "Components/Modal",
  component: RsModal,
  argTypes: {
    active: {
      description: "It's how you control the Modal or be shown or not",
      control: { disable: true },
    },
    handleClose: {
      description:
        "It's a function to handle closing the modal. You use that function to set the active state to false",
      control: { disable: true },
    },
    children: {
      description: "It's the main content of the Modal",
      control: { disable: true },
    },
    header: {
      description: "It's the header or the title of the modal",
    },
    footer: {
      description:
        "It's the footer of the modal can be used to add buttons for example",
      control: { disable: true },
    },
    loading: {
      description: "Add a loading animation to the Modal",
      table: {
        defaultValue: { summary: false },
      },
    },
    notClose: {
      description: "It Removes the close button",
      table: { defaultValue: { summary: false } },
    },
    scroll: {
      description:
        "There are cases where you need a scroll because there is a lot of information within the Modal",
      table: { defaultValue: { summary: false } },
    },
    overflowHidden: {
      description:
        "If you need to remove the page scroll when opening the Modal",
      table: {
        defaultValue: { summary: false },
      },
    },
    notPadding: {
      description:
        "If you need to remove the padding from the modal to make a more personalized interface",
      table: {
        defaultValue: { summary: false },
      },
    },
    fullScreen: {
      description: "If you need the modal to be the total window size",
      table: {
        defaultValue: { summary: false },
      },
    },
    blur: {
      description:
        "You can add a blur style to all the elements behind the modal this functionality depends on the css property backdrop-filter",
      table: { defaultValue: { summary: false } },
    },
    square: {
      description:
        "Change the modal style by removing the border radius and making it rectangular",
      table: { defaultValue: { summary: false } },
    },
    preventClose: {
      description:
        "With the preventClose property you do not close the modal by clicking outside or pressing the esc key",
      table: { defaultValue: { summary: false } },
    },
    autoWidth: {
      description:
        "It makes the dialog have an automatic width to its content.",
      table: {
        defaultValue: { summary: false },
      },
    },
    notCenter: {
      description:
        "By default the header centers the elements, with this property the centering is eliminated.",
      table: { defaultValue: { summary: false } },
    },
  },
} as ComponentMeta<typeof RsModal>;

const ModalFooter = () => {
  return (
    <div className="footer-dialog">
      <RsButton>Sign In</RsButton>
      <div className="new">
        New Here? <a href="/">Create New Account</a>
      </div>
    </div>
  );
};

const Template: ComponentStory<typeof RsModal> = (args) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(true);
  };

  const handleClose = () => {
    setActive(false);
  };
  return (
    <div className="center">
      <RsButton onClick={handleClick}>Open Modal</RsButton>
      <RsModal
        {...args}
        active={active}
        header={"Welcome to Reactsax Modal"}
        footer={<ModalFooter />}
        handleClose={handleClose}
      >
        <div className="con-form">
          <RsInput
            type="email"
            labelPlaceholder="Email"
            onChange={() => {}}
            // @ts-ignore
            icon={<box-icon name="user" type="solid"></box-icon>}
          />
          <RsInput
            type="password"
            labelPlaceholder="Password"
            onChange={() => {}}
            // @ts-ignore
            icon={<box-icon name="lock-alt" type="solid"></box-icon>}
          />
          <div className="flex">
            <RsCheckbox> Remember Me</RsCheckbox>
            <a href="/">Forgot Password?</a>
          </div>
        </div>
      </RsModal>
    </div>
  );
};

export const Default = Template.bind({});

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const NotClose = Template.bind({});
NotClose.args = {
  notClose: true,
};

export const Scroll = Template.bind({});
Scroll.args = {
  scroll: true,
};

export const OverFlowHidden = Template.bind({});
OverFlowHidden.args = {
  overflowHidden: true,
};

export const NotPadding = Template.bind({});
NotPadding.args = {
  notPadding: true,
};

export const FullScreen = Template.bind({});
FullScreen.args = {
  fullScreen: true,
};

export const Blur = Template.bind({});
Blur.args = {
  blur: true,
};

export const Square = Template.bind({});
Square.args = {
  square: true,
};

export const PreventClose = Template.bind({});
PreventClose.args = {
  preventClose: true,
};
