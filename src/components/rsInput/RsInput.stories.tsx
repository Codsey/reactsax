import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RsInput from "./Base/RsInput";

import "../../styles/reactsax.scss";
import "../../App.css";

import "boxicons";

export default {
  title: "Components/Input",
  component: RsInput,
  argTypes: {
    placeholder: {
      description: "It's the placeholder of the input",
    },
    label: {
      description: "Adds a label to the input",
    },
    labelPlaceholder: {
      description:
        "You can have a placeholder with a great animation when being or in focus or with a value becoming a label above the input",
    },
    color: {
      description:
        "Change the color of the component and add a border below with the color property, the allowed values ​​are the main colors of reactsax and the colors (RGB y HEX)",
      control: { type: "color" },
      table: {
        defaultValue: { summary: "primary" },
      },
    },
    icon: {
      description: "Add icon to the input using the icon property",
      control: { disable: true },
    },
    iconAfter: {
      description:
        "You can position the icon after the input using this property",
      table: {
        defaultValue: { summary: false },
      },
    },
    message: {
      description:
        "You can add a message below the input to report that a field is missing or the value is wrong",
    },
    messageType: {
      description: "To control the message color it accepts reactsax colors",
      defaultValue: "primary",
      table: {
        defaultValue: { summary: "primary" },
      },
    },
    state: {
      description: "Change the color of the input for some state",
    },
    progress: {
      description:
        "Add a validation progress bar, the most common is its use to validate passwords and correct data within the input, its value is (0 - 100).",
    },
    loading: {
      description: "Add a loading animation to the input",
      table: {
        defaultValue: { summary: false },
      },
    },
    type: {
      description: "Change the type of input",
      control: { disable: true },
    },
    border: {
      description: "Changes the styles of the input to bordered input",
      table: {
        defaultValue: { summary: false },
      },
    },
    shadow: {
      description: "Adds shadow to the input",
      table: {
        defaultValue: { summary: false },
      },
    },
    // DISABLED PROP
    onChange: {
      table: { disable: true },
    },
    // WILL BE ADDED LATER
    iconClick: {
      table: { disable: true },
    },
  },
} as ComponentMeta<typeof RsInput>;

const Template: ComponentStory<typeof RsInput> = (args) => (
  <div className="center">
    <RsInput {...args} />
  </div>
);

const InputTypesTemplate: ComponentStory<typeof RsInput> = (args) => (
  <div className="center">
    <div className="input-example">
      <RsInput type="text" label="Text" {...args} />
    </div>
    <div className="input-example">
      <RsInput type="password" label="Password" {...args} />
    </div>
    <div className="input-example">
      <RsInput type="search" label="Search" {...args} />
    </div>
    <div className="input-example">
      <RsInput type="number" label="Number" {...args} />
    </div>
    <div className="input-example">
      <RsInput type="time" label="Time" {...args} />
    </div>
    <div className="input-example">
      <RsInput type="date" label="Date" {...args} />
    </div>
  </div>
);

const ProgressInputTemplate: ComponentStory<typeof RsInput> = (args) => {
  // const [progressPoints, setProgressPoints] = useState(0);
  const [value, setValue] = useState("");

  const handleChange = (e: any) => {
    const { value } = e.target;

    setValue(value);
  };

  const getProgress = () => {
    let progress = 0;
    // at least one number
    if (/\d/.test(value)) {
      progress += 20;
    }
    // at least one capital letter
    if (/(.*[A-Z].*)/.test(value)) {
      progress += 20;
    }
    // at menons a lowercase
    if (/(.*[a-z].*)/.test(value)) {
      progress += 20;
    }
    // more than 5 digits
    if (value.length >= 6) {
      progress += 20;
    }
    // at least one special character
    if (/[^A-Za-z0-9]/.test(value)) {
      progress += 20;
    }
    return progress;
  };

  return (
    <div className="center">
      <div className="input-example">
        <RsInput
          {...args}
          value={value}
          onChange={handleChange}
          progress={getProgress()}
        />
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: "Name",
  onChange: () => {},
};

export const Label = Template.bind({});
Label.args = {
  label: "Name",
  placeholder: "Name",
};

export const LabelPlaceholder = Template.bind({});
LabelPlaceholder.args = {
  labelPlaceholder: "Name",
};

export const Color = Template.bind({});
Color.args = {
  labelPlaceholder: "Name",
  color: "primary",
};

export const Icon = Template.bind({});
Icon.args = {
  // @ts-ignore
  icon: <box-icon name="user" type="solid" color="#eae9e9"></box-icon>,
  labelPlaceholder: "User",
};

export const IconAfter = Template.bind({});
IconAfter.args = {
  labelPlaceholder: "Password",
  // @ts-ignore
  icon: <box-icon name="lock-alt" type="solid" color="#eae9e9"></box-icon>,
  iconAfter: true,
  type: "password",
};

export const Message = Template.bind({});
Message.args = {
  labelPlaceholder: "Password",
  type: "password",
  message: "Success",
  messageType: "success",
};

export const State = Template.bind({});
State.args = {
  labelPlaceholder: "Password",
  type: "password",
  state: "primary",
};

export const Loading = Template.bind({});
Loading.args = {
  labelPlaceholder: "Name",
  loading: true,
};

export const Border = Template.bind({});
Border.args = {
  labelPlaceholder: "Name",
  border: true,
  color: "warn",
};

export const Shadow = Template.bind({});
Shadow.args = {
  labelPlaceholder: "Name",
  shadow: true,
};

export const InputTypes = InputTypesTemplate.bind({});
InputTypes.args = {
  onChange: () => {},
};

export const Progress = ProgressInputTemplate.bind({});
Progress.args = {
  labelPlaceholder: "Password",
  type: "password",
};
