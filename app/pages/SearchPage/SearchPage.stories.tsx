import type { Meta, StoryObj } from "@storybook/react";
import SearchPageStorybook from "./SearchPageStorybook";

const meta: Meta<typeof SearchPageStorybook> = {
  title: "Pages/SearchPage",
  component: SearchPageStorybook,
};

export default meta;

export const Default: StoryObj<typeof SearchPageStorybook> = {
  render: () => <SearchPageStorybook />,
};
