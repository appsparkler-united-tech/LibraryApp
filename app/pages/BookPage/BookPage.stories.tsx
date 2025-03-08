import type { Meta, StoryObj } from "@storybook/react";
import BookPageStorybook from "./BookPageStorybook";

const meta: Meta<typeof BookPageStorybook> = {
  title: "Pages/BookPage",
  component: BookPageStorybook,
};

export default meta;

export const Default: StoryObj<typeof BookPageStorybook> = {
  render: () => <BookPageStorybook />,
};
