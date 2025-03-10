import type { Meta, StoryFn } from "@storybook/react";
import MePageStorybook from "./MePageStorybook";

export default {
  title: "Pages/MePage",
  component: MePageStorybook,
} as Meta<typeof MePageStorybook>;

const Template: StoryFn<typeof MePageStorybook> = (args) => <MePageStorybook {...args} />;

export const Default = Template.bind({});
Default.args = {};
