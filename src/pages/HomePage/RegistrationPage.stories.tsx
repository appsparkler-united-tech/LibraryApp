import { StoryFn, Meta } from "@storybook/react";
import RegistrationPage from "./RegistrationPage";

export default {
  title: "Pages/RegistrationPage",
  component: RegistrationPage,
} as Meta;

const Template: StoryFn = (args) => <RegistrationPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
