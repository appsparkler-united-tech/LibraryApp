import type { Meta, StoryObj } from "@storybook/react";
import ScrollGenre from "./ScrollGenreStorybook";

const meta: Meta<typeof ScrollGenre> = {
  title: "Pages/ScrollGenre",
  component: ScrollGenre,
};

export default meta;

type Story = StoryObj<typeof ScrollGenre>;

export const Default: Story = {};
