// src/stories/Card.stories.tsx

import { Meta, StoryFn } from '@storybook/react';
import Card, { CardProps } from './Card';

export default {
  title: 'Components/Card',
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
