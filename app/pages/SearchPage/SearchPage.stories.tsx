import { Meta, StoryObj } from "@storybook/react";
import SearchPage from "./SearchPage";

const meta: Meta<typeof SearchPage> = {
  title: "Pages/SearchPage",
  component: SearchPage,
};

export default meta;

export const Default: StoryObj<typeof SearchPage> = {
  render: () => <SearchPage />,
};
