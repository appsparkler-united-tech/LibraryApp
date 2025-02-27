import type { Meta, StoryObj } from "@storybook/react";
import BottomNavigation from "./BottomNavigation";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof BottomNavigation> = {
  title: "Components/BottomNavigation",
  component: BottomNavigation,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof BottomNavigation>;

export const Default: Story = {
  args: {
    onClick: action("button-click"),
  },
};
