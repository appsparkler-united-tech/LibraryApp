import { StoryFn, Meta } from "@storybook/react";
import RegistrationPage from "./LoginPage";
import LoginPage from "./LoginPage";

export default {
  title: "Pages/LoginPage",
  component: RegistrationPage,
} as Meta;

const Template: StoryFn = (args) => <LoginPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
