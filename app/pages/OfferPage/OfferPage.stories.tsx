import type { StoryFn, Meta } from "@storybook/react";
import OfferPageStorybook from "./OfferPageStorybook"; // Adjust the import path based on your project structure

export default {
  title: "Pages/OfferPage",
  component: OfferPageStorybook,
} as Meta;

const Template: StoryFn = (args) => <OfferPageStorybook {...args} />;

export const Default = Template.bind({});
Default.args = {
  // You can add props here if OfferPage takes any
};
