import type { Meta, StoryFn } from "@storybook/react";
import ScrollAreaTitle from "./ScrollAreaTitleStorybook";

export default {
  title: "components/ScrollAreaTitle",
  component: ScrollAreaTitle,
} as Meta<typeof ScrollAreaTitle>;

const Template: StoryFn<typeof ScrollAreaTitle> = (args) => <ScrollAreaTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  books: [
    {
      id: "1",
      title: "Jacob Abott",
      imageSrc: "/books/mockingBird.png", // Replace with actual image URL
    },
    {
      id: "2",
      title: "Sarah Flower Adams",
      imageSrc: "/books/mockingBird.png", // Replace with actual image URL
    },
  ],
};
