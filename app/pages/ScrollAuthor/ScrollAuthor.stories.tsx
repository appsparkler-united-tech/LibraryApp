import type { Meta, StoryObj } from "@storybook/react";
import ScrollAuthor from "./ScrollAuthor";

const meta: Meta<typeof ScrollAuthor> = {
  title: "Pages/ScrollAuthor",
  component: ScrollAuthor,
};

export default meta;

type Story = StoryObj<typeof ScrollAuthor>;

export const Default: Story = {};
