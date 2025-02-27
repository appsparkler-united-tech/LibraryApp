import type { Meta, StoryObj } from "@storybook/react";
import BookPage from "./BookPage";
import React from "react";

const meta: Meta<typeof BookPage> = {
  title: "Pages/BookPage",
  component: BookPage,
};

export default meta;

export const Default: StoryObj<typeof BookPage> = {
  render: () => <BookPage />,
};
