// src/stories/Card.stories.tsx

// src/stories/Card.stories.tsx
import type { Meta, StoryFn } from '@storybook/react';
import Card, { type CardProps } from './Card';

export default {
  title: 'Pages/HomePage/Card',
  component: Card,
} as Meta;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Ring of Fire!',
  description: 'One does not simply walk into Modor!',
  imageSrc: '/books/ringOfFire.png',
  buttonText: 'Buy Now',
};
