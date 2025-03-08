import type { Meta, StoryObj } from "@storybook/react";
import BottomNavigation from "./BottomNavigationStorybook";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof BottomNavigation> = {
  title: "Components/BottomNavigation",
  component: BottomNavigation,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof BottomNavigation>;

export const Default: Story = {
  args: {
    onClick: action("button-click"),
  },
};
