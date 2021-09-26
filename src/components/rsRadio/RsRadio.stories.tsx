import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RsRadio from "./Base/RsRadio";

import "boxicons";

export default {
  title: "Components/Radio",
  component: RsRadio,
  argTypes: {
    value: {
      description:
        "It's a unique value for this radio button and it's required.",
    },
    active: {
      description:
        "Active property should get the value of the currently active radio.",
    },
    color: {
      description:
        "Changes the color of the component it can be a Reactsax color or any HEX/RGB Value",
      table: {
        defaultValue: { summary: "Primary" },
      },
      control: "color",
    },
    label: {
      description: "Add a label to the radio",
    },
    labelBefore: {
      description: "Adds a label before the Radio component",
    },
    loading: {
      description: "Add a loading animation to the Radio component",
      table: {
        defaultValue: { summary: false },
      },
    },
    icon: {
      description: "Add an icon inside the radio",
      control: { disable: true },
    },
    name: {
      table: { disable: true },
    },
  },
} as ComponentMeta<typeof RsRadio>;

const Template: ComponentStory<typeof RsRadio> = (args) => {
  const [active, setActive] = useState("");

  const handleChange = (e: any) => {
    const { value } = e.target;

    setActive(value);
  };
  return (
    <React.Fragment>
      <div className="center">
        <RsRadio
          {...args}
          value="radio1"
          label="Option A"
          active={active}
          onChange={(e: any) => handleChange(e)}
        />
      </div>
      <div className="center">
        <RsRadio
          {...args}
          value="radio2"
          label="Option B"
          active={active}
          onChange={(e: any) => handleChange(e)}
        />
      </div>
      <div className="center">
        <RsRadio
          {...args}
          value="radio3"
          label="Option C"
          active={active}
          onChange={(e: any) => handleChange(e)}
        />
      </div>
    </React.Fragment>
  );
};

const LabelTemplate: ComponentStory<typeof RsRadio> = (args) => {
  const [active, setActive] = useState("");

  const handleChange = (e: any) => {
    const { value } = e.target;

    setActive(value);
  };
  return (
    <React.Fragment>
      <div className="center">
        <RsRadio
          {...args}
          value="radio1"
          label="Option A"
          active={active}
          onChange={(e: any) => handleChange(e)}
        />
      </div>
      <div className="center">
        <RsRadio
          {...args}
          value="radio2"
          labelBefore="Option B"
          active={active}
          onChange={(e: any) => handleChange(e)}
        />
      </div>
    </React.Fragment>
  );
};

const IconsTemplate: ComponentStory<typeof RsRadio> = (args) => {
  const [active, setActive] = useState("");

  const handleChange = (e: any) => {
    const { value } = e.target;

    setActive(value);
  };
  return (
    <React.Fragment>
      <div className="center">
        <RsRadio
          {...args}
          value="radio1"
          label="Dollar"
          //@ts-ignore
          icon={<box-icon name="dollar" color="#252323"></box-icon>}
          active={active}
          onChange={(e: any) => handleChange(e)}
        />
      </div>
      <div className="center">
        <RsRadio
          {...args}
          value="radio2"
          label="Euro"
          //@ts-ignore
          icon={<box-icon name="euro" color="#252323"></box-icon>}
          active={active}
          onChange={(e: any) => handleChange(e)}
        />
      </div>
      <div className="center">
        <RsRadio
          {...args}
          value="radio3"
          label="Pound"
          //@ts-ignore
          icon={<box-icon name="pound" color="#252323"></box-icon>}
          active={active}
          onChange={(e: any) => handleChange(e)}
        />
      </div>
    </React.Fragment>
  );
};

export const Default = Template.bind({});

export const Color = Template.bind({});
Color.args = {
  color: "#c93d0e",
};

export const LabelAndLabelBefore = LabelTemplate.bind({});

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const Icon = IconsTemplate.bind({});
