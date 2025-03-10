import type { StoryFn, Meta } from "@storybook/react";
import RegistrationPageStorybook from "./RegistrationPageStorybook";

export default {
  title: "Pages/RegistrationPage",
  component: RegistrationPageStorybook,
} as Meta;

const Template: StoryFn = (args) => <RegistrationPageStorybook {...args} />;

export const Default = Template.bind({});
Default.args = {};
