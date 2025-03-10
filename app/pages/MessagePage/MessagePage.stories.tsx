import type { Meta, StoryObj } from "@storybook/react";
import MessagePageStorybook from "./MessagePageStorybook";

const meta: Meta<typeof MessagePageStorybook> = {
  title: "Pages/MessagePage",
  component: MessagePageStorybook,
};

export default meta;

export const Default: StoryObj<typeof MessagePageStorybook> = {
  render: () => <MessagePageStorybook />,
};
