import { StoryFn, Meta } from "@storybook/react";
import OfferPage from "./OfferPage"; // Adjust the import path based on your project structure

export default {
  title: "Pages/OfferPage",
  component: OfferPage,
} as Meta;

const Template: StoryFn = (args) => <OfferPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  // You can add props here if OfferPage takes any
};
