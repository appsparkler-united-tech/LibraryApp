import { Meta, StoryObj } from "@storybook/react";
import MessagePage from "./MessagePage";

const meta: Meta<typeof MessagePage> = {
  title: "Pages/MessagePage",
  component: MessagePage,
};

export default meta;

export const Default: StoryObj<typeof MessagePage> = {
  render: () => <MessagePage />,
};
