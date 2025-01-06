import { Meta, StoryFn } from "@storybook/react";
import TitleLogoComponent from "./TitleLogoComponent";

export default {
  title: "Components/TitleLogoComponent",
  component: TitleLogoComponent,
  argTypes: {
    logoSrc: {
      control: "text",
      description: "Source URL for the logo image",
    },
    title: {
      control: "text",
      description: "Title text to display next to the logo",
    },
    altText: {
      control: "text",
      description: "Alt text for the logo image",
    },
  },
} as Meta;


const Template: StoryFn<typeof TitleLogoComponent> = (args) => <TitleLogoComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  logoSrc: "/homePageLibrary.png",
  title: "The Library App"
};

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  logoSrc: "/homePageLibrary.png",
  title: "Custom Library Title"
};

export const WithoutTitle = Template.bind({});
WithoutTitle.args = {
  logoSrc: "/homePageLibrary.png",
  title: ""
};
