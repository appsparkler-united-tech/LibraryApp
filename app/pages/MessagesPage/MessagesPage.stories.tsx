import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import MessagesPage from "./MessagesPage";

export default {
  title: "Pages/MessagesPage",
  component: MessagesPage,
} as Meta<typeof MessagesPage>;

const Template: StoryFn<typeof MessagesPage> = () => <MessagesPage />;

export const Default = Template.bind({});
