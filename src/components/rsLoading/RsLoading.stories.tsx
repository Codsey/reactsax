import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RsLoading from "./Base/RsLoading";
import RsButton from "../rsButton/Base/RsButton";

import { SketchPicker } from "react-color";

import "../../App.css";

export default {
  title: "Components/Loading",
  component: RsLoading,
  argTypes: {
    isVisible: {
      description: "It's how you control the loading component",
      table: {
        defaultValue: { summary: false },
      },
      control: {
        disable: true,
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
    background: {
      description: "Changes the background color of the loading component",
      table: {
        defaultValue: { summary: "Primary" },
        control: "color",
      },
    },
    type: {
      description: "Change the type of loading",
      table: {
        defaultValue: { summary: "default" },
      },
      defaultValue: "default",
    },
    text: {
      description:
        "Add a descriptive text of the loading or informing the user that it is loading",
      table: {
        defaultValue: "",
      },
    },
    percent: {
      description:
        "Adds percentage to the loading but it has to be controlled with a function (Check example below)",
      control: { disable: true },
    },
    progress: {
      description:
        "Adds progress bar on the top to the loading but it has to be controlled with a function (Check example below)",
      control: { disable: true },
    },
    opacity: {
      description:
        "You can change the opacity of the background by using this property",
      table: {
        defaultValue: { summary: "0.6" },
      },
    },
    scale: {
      description:
        "You can change the scale of the loading by using this property (It's useful if you're using it within a target)",
      table: {
        defaultValue: { summary: "1" },
      },
    },
    target: {
      description:
        "You can have the loading component on a specific dom by adding the loading component as a child to this speicifc dom and enabling this property (Check example below)",
      table: {
        defaultValue: { summary: false },
      },
    },
  },
} as ComponentMeta<typeof RsLoading>;

const Template: ComponentStory<typeof RsLoading> = (args) => {
  const [isVisible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(true);

    setTimeout(() => {
      setVisible(false);
    }, 2000);
  };
  return (
    <div className="center">
      <RsButton onClick={handleClick}>Start Loading</RsButton>
      <RsLoading {...args} isVisible={isVisible} />
    </div>
  );
};

const LoadingTypeTemplate: ComponentStory<typeof RsLoading> = () => {
  return (
    <div className="center">
      <div className="loading-box">
        <RsLoading text={"default"} isVisible target />
      </div>
      <div className="loading-box">
        <RsLoading text={"waves"} type={"waves"} isVisible target />
      </div>
      <div className="loading-box">
        <RsLoading text={"corners"} type={"corners"} isVisible target />
      </div>
      <div className="loading-box">
        <RsLoading text={"border"} type={"border"} isVisible target />
      </div>
      <div className="loading-box">
        <RsLoading text={"points"} type={"points"} isVisible target />
      </div>
      <div className="loading-box">
        <RsLoading text={"square"} type={"square"} isVisible target />
      </div>
      <div className="loading-box">
        <RsLoading text={"gradient"} type={"gradient"} isVisible target />
      </div>
      <div className="loading-box">
        <RsLoading text={"rectangle"} type={"rectangle"} isVisible target />
      </div>
      <div className="loading-box">
        <RsLoading text={"circles"} type={"circles"} isVisible target />
      </div>
      <div className="loading-box">
        <RsLoading
          text={"square-rotate"}
          type={"square-rotate"}
          isVisible
          target
        />
      </div>
      <div className="loading-box">
        <RsLoading text={"scale"} type={"scale"} isVisible target />
      </div>
    </div>
  );
};

const ColorLoadingTemplate: ComponentStory<typeof RsLoading> = () => {
  const [color, setColor] = useState("#195bff");

  const handleChangeComplete = (color: any) => {
    setColor(color.hex);
  };

  return (
    <div className="center">
      <SketchPicker color={color} onChangeComplete={handleChangeComplete} />
      <div className="loading-box">
        <RsLoading text={"default"} isVisible target color={color} />
      </div>
    </div>
  );
};
// RESET
const BackgroundLoadingTemplate: ComponentStory<typeof RsLoading> = () => {
  const [color, setColor] = useState("#195bff");

  const handleChangeComplete = (color: any) => {
    setColor(color.hex);
  };

  return (
    <div className="center">
      <SketchPicker color={color} onChangeComplete={handleChangeComplete} />
      <div className="loading-box">
        <RsLoading text={"default"} isVisible target background={color} />
      </div>
    </div>
  );
};

const PercentLoadingTemplate: ComponentStory<typeof RsLoading> = (args) => {
  const [isVisible, setVisible] = useState(false);
  const [percent, setPercent] = useState(0);

  const handleClick = () => {
    setVisible(true);

    const timer = setInterval(() => {
      if (percent <= 100) {
        setPercent((prevState) => prevState + 1);
      }
    }, 48);

    setTimeout(() => {
      setVisible(false);
      clearInterval(timer);
      setPercent(0);
    }, 4800);
  };

  return (
    <div className="center">
      <RsButton onClick={handleClick}>Start Loading</RsButton>
      <RsLoading {...args} isVisible={isVisible} percent={percent} />
    </div>
  );
};

const ProgressLoadingTemplate: ComponentStory<typeof RsLoading> = (args) => {
  const [isVisible, setVisible] = useState(false);
  const [percent, setPercent] = useState(0);

  const handleClick = () => {
    setVisible(true);

    const timer = setInterval(() => {
      if (percent <= 100) {
        setPercent((prevState) => prevState + 1);
      }
    }, 48);

    setTimeout(() => {
      setVisible(false);
      clearInterval(timer);
      setPercent(0);
    }, 4800);
  };

  return (
    <div className="center">
      <RsButton onClick={handleClick}>Start Loading</RsButton>
      <RsLoading {...args} isVisible={isVisible} progress={percent} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const Types = LoadingTypeTemplate.bind({});

export const Color = ColorLoadingTemplate.bind({});
export const Background = BackgroundLoadingTemplate.bind({});

export const Text = Template.bind({});
Text.args = {
  text: "Loading",
};

export const Percentage = PercentLoadingTemplate.bind({});
export const Progress = ProgressLoadingTemplate.bind({});
