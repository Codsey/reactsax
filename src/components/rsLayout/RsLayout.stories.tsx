import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RsRow from "./rsGrid/RsRow";
import RsCol from "./rsGrid/RsCol";

export default {
  title: "Layout/Grid",
  component: RsRow,
  subcomponents: { RsCol },
  argTypes: {},
} as ComponentMeta<typeof RsRow>;

const Template: ComponentStory<typeof RsRow> = (args) => {
  return (
    <div className="example">
      <div className="center grid">
        <RsRow>
          <RsCol lg={12}>100%</RsCol>
        </RsRow>
        <RsRow>
          <RsCol lg={6}>50%</RsCol>
          <RsCol lg={6}>50%</RsCol>
        </RsRow>
        <RsRow>
          <RsCol lg={3}>25%</RsCol>
          <RsCol lg={3}>25%</RsCol>
          <RsCol lg={3}>25%</RsCol>
          <RsCol lg={3}>25%</RsCol>
        </RsRow>
        <RsRow>
          <RsCol lg={2}>16.6%</RsCol>
          <RsCol lg={2}>16.6%</RsCol>
          <RsCol lg={2}>16.6%</RsCol>
          <RsCol lg={2}>16.6%</RsCol>
          <RsCol lg={2}>16.6%</RsCol>
          <RsCol lg={2}>16.6%</RsCol>
        </RsRow>
        <RsRow>
          <RsCol lg={1}>8.3%</RsCol>
          <RsCol lg={1}>8.3%</RsCol>
          <RsCol lg={1}>8.3%</RsCol>
          <RsCol lg={1}>8.3%</RsCol>
          <RsCol lg={1}>8.3%</RsCol>
          <RsCol lg={1}>8.3%</RsCol>
          <RsCol lg={1}>8.3%</RsCol>
          <RsCol lg={1}>8.3%</RsCol>
          <RsCol lg={1}>8.3%</RsCol>
          <RsCol lg={1}>8.3%</RsCol>
          <RsCol lg={1}>8.3%</RsCol>
          <RsCol lg={1}>8.3%</RsCol>
        </RsRow>
      </div>
    </div>
  );
};

const OffsetTemplate: ComponentStory<typeof RsRow> = (args) => {
  return (
    <div className="example">
      <div className="center grid">
        <RsRow>
          <RsCol lg={6} offset={6}>
            offset-6
          </RsCol>
        </RsRow>
        <RsRow>
          <RsCol lg={1} offset={2}>
            offset-2
          </RsCol>
        </RsRow>
        <RsRow>
          <RsCol lg={4} offset={4}>
            offset-4
          </RsCol>
        </RsRow>
        <RsRow>
          <RsCol lg={2} offset={10}>
            offset-10
          </RsCol>
        </RsRow>
      </div>
    </div>
  );
};

const FlexJustifyTemplate: ComponentStory<typeof RsRow> = (args) => {
  return (
    <div className="example">
      <div className="center grid">
        <RsRow>
          <RsCol lg={2}>Default 1</RsCol>
          <RsCol lg={2}>Default 2</RsCol>
          <RsCol lg={2}>Default 3</RsCol>
        </RsRow>
        <RsRow justifyContent={"center"}>
          <RsCol lg={2}>Center 1</RsCol>
          <RsCol lg={2}>Center 2</RsCol>
          <RsCol lg={2}>Center 3</RsCol>
        </RsRow>
        <RsRow justifyContent={"flex-end"}>
          <RsCol lg={2}>Flex-end 1</RsCol>
          <RsCol lg={2}>Flex-end 2</RsCol>
          <RsCol lg={2}>Flex-end 3</RsCol>
        </RsRow>
        <RsRow justifyContent={"space-around"}>
          <RsCol lg={2}>Space-around 1</RsCol>
          <RsCol lg={2}>Space-around 2</RsCol>
          <RsCol lg={2}>Space-around 3</RsCol>
        </RsRow>
        <RsRow justifyContent={"space-between"}>
          <RsCol lg={2}>Space-between 1</RsCol>
          <RsCol lg={2}>Space-between 2</RsCol>
          <RsCol lg={2}>Space-between 3</RsCol>
        </RsRow>
      </div>
    </div>
  );
};

const FlexAlignTemplate: ComponentStory<typeof RsRow> = (args) => {
  return (
    <div className="example">
      <div className="center grid flexAlignExample">
        <RsRow justifyContent="center">
          <RsCol lg={2}>Default 1</RsCol>
          <RsCol lg={2}>Default 2</RsCol>
          <RsCol lg={2}>Default 3</RsCol>
        </RsRow>
        <RsRow justifyContent="center" alignItems={"center"}>
          <RsCol lg={2}>Center 1</RsCol>
          <RsCol lg={2}>Center 2</RsCol>
          <RsCol lg={2}>Center 3</RsCol>
        </RsRow>
        <RsRow justifyContent="center" alignItems={"flex-end"}>
          <RsCol lg={2}>Flex-end 1</RsCol>
          <RsCol lg={2}>Flex-end 2</RsCol>
          <RsCol lg={2}>Flex-end 3</RsCol>
        </RsRow>
        <RsRow
          justifyContent="space-around"
          alignItems={"center"}
          flexDirection="column"
        >
          <RsCol lg={2}>Space-around 1</RsCol>
          <RsCol lg={2}>Space-around 2</RsCol>
          <RsCol lg={2}>Space-around 3</RsCol>
        </RsRow>
        <RsRow
          justifyContent="space-between"
          alignItems={"center"}
          flexDirection="column"
        >
          <RsCol lg={2}>Space-between 1</RsCol>
          <RsCol lg={2}>Space-between 2</RsCol>
          <RsCol lg={2}>Space-between 3</RsCol>
        </RsRow>
      </div>
    </div>
  );
};

export const Default = Template.bind({});
export const Offset = OffsetTemplate.bind({});
export const FlexJustify = FlexJustifyTemplate.bind({});
export const FlexAlignAndFlexDirection = FlexAlignTemplate.bind({});
