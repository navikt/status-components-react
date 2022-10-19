import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Navigation } from "./Navigation";

export default {
  title: "Navigation",
  component: Navigation,
} as ComponentMeta<typeof Navigation>;

export const Primary: ComponentStory<typeof Navigation> = () => <Navigation />;
