import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Footer } from "./Footer";

export default {
  title: "Example/Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "Jane Doe",
};

export const Secondary = () => <Footer name="Ola nordmann" />;
