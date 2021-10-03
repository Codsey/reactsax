import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RsCard from "./Base/RsCard";
import RsButton from "../rsButton/Base/RsButton";

import Photo from "../../assets/images/photo-1.png";

import "boxicons";

export default {
  title: "Components/Card",
  component: RsCard,
  argTypes: {
    type: {
      description:
        "Change the style of the letter and the position of the internals.",
      table: {
        defautlValue: { summary: 1 },
      },
    },
    image: {
      description:
        "Add the image or video to the card in the section determined by the type of card.",
      control: { disable: true },
    },
    text: {
      description:
        "Add text to the card in the section determined by the card type.",
      control: { disable: true },
    },
    title: {
      description:
        "Add the title to the card in the section determined by the type of card.",
      control: { disable: true },
    },
    interactions: {
      description:
        "Add the interactions to the card in the section determined by the card type.",
      control: { disable: true },
    },
    buttons: {
      description:
        "Add the buttons to the card in the section determined by the type of card.",
      control: { disable: true },
    },
  },
} as ComponentMeta<typeof RsCard>;

const Template: ComponentStory<typeof RsCard> = (args) => (
  <div className="center">
    <RsCard {...args} />
  </div>
);

const InteractionsComponent = () => {
  return (
    <React.Fragment>
      <RsButton icon color="danger">
        {
          // @ts-ignore
          <box-icon name="heart" type="solid" color="#f3eeee"></box-icon>
        }
      </RsButton>
      <RsButton color="dark">
        {
          // @ts-ignore

          <box-icon name="chat" type="solid" color="#f3eeee"></box-icon>
        }
        23
      </RsButton>
    </React.Fragment>
  );
};
export const Default = Template.bind({});
Default.args = {
  image: <img src={Photo} alt="person" />,
  text:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, totam. Assumenda fuga incidunt at aliquam, molestiae quisquam culpa! Voluptatum, aut magnam et quo excepturi tempore distinctio praesentium cum magni quasi.",
  title: <h2>Title</h2>,
  interactions: <InteractionsComponent />,
};
