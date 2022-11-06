import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header } from "./Header";

export default {
  title: "Header",
  component: Header,
} as ComponentMeta<typeof Header>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  imageURL: "src/assets/navblack.png",
  userID: "",
  userName:""
};
