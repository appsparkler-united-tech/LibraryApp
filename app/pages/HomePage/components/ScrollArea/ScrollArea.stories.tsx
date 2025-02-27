import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ScrollArea from './scrollArea';
import { type CardProps } from '../CardComponent/Card';

const meta: Meta<typeof ScrollArea> = {
  title: 'Pages/HomePage/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
  args: {
    books: [
      { title: 'Book 1', description: 'A great book', imageSrc: '/books/mockingBird.png', buttonText: 'Read More' },
      { title: 'Book 2', description: 'Another amazing book', imageSrc: '/books/ringOfFire.png', buttonText: 'Read More' },
      { title: 'Book 3', description: 'A must-read', imageSrc: '/books/mockingBird.png', buttonText: 'Read More' },
      { title: 'Book 4', description: 'An exciting tale', imageSrc: '/books/mockingBird.png', buttonText: 'Read More' },
      { title: 'Book 5', description: 'A thrilling adventure', imageSrc: '/books/mockingBird.png', buttonText: 'Read More' },
      { title: 'Book 6', description: 'A fantastic read', imageSrc: '/books/mockingBird.png', buttonText: 'Read More' },
      { title: 'Book 7', description: 'A page-turner', imageSrc: '/books/mockingBird.png', buttonText: 'Read More' },
      { title: 'Book 8', description: 'An unforgettable story', imageSrc: '/books/mockingBird.png', buttonText: 'Read More' }
    ] as CardProps[],
  },
};

export default meta;

type Story = StoryObj<typeof ScrollArea>;

export const Default: Story = {};
