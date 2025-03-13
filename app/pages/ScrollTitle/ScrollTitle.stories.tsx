import type { Meta, StoryObj } from "@storybook/react";
import ScrollTitle from "./ScrollTitle";

const meta: Meta<typeof ScrollTitle> = {
  title: "Pages/ScrollTitle",
  component: ScrollTitle,
};

export default meta;

type Story = StoryObj<typeof ScrollTitle>;

export const Default: Story = {};
