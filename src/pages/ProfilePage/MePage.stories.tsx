import { Meta, StoryFn } from "@storybook/react";
import MePage from "./MePage";

export default {
  title: "Pages/MePage",
  component: MePage,
} as Meta<typeof MePage>;

const Template: StoryFn<typeof MePage> = (args) => <MePage {...args} />;

export const Default = Template.bind({});
Default.args = {};
