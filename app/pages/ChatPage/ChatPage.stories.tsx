import type { Meta, StoryObj } from "@storybook/react";
import ChatPage from "./ChatPage";

const meta: Meta<typeof ChatPage> = {
  title: "Pages/ChatPage",
  component: ChatPage,
};

export default meta;

type Story = StoryObj<typeof ChatPage>;

export const Default: Story = {
  args: {
    messages: [
      {
        id: 1,
        sender: "Obi-Wan Kenobi",
        avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
        text: "You were the Chosen One!",
        time: "12:45",
        alignment: "start",
        status: "Delivered",
      },
      {
        id: 2,
        sender: "Anakin",
        avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
        text: "I hate you!",
        time: "12:46",
        alignment: "end",
        status: "Seen at 12:46",
      },
    ],
  },
};
