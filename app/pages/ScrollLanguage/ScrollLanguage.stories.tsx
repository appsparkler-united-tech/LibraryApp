import type { Meta, StoryObj } from "@storybook/react";
import ScrollLanguage from "./ScrollLanguageStorybook";

const meta: Meta<typeof ScrollLanguage> = {
  title: "Pages/ScrollLanguage",
  component: ScrollLanguage,
};

export default meta;

type Story = StoryObj<typeof ScrollLanguage>;

export const Default: Story = {};
