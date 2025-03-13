import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ScrollAreaStorybook from './ScrollAreaBooksStorybook';

const meta: Meta<typeof ScrollAreaStorybook> = {
  title: 'components/ScrollAreaBooks',
  component: ScrollAreaStorybook,
  tags: ['autodocs'],
  args: {
    books: [
      {
          title: 'Book 1', description: 'A great book', imageSrc: '/books/mockingBird.png', buttonText: 'Read More',
          id: ''
      },
      {
          title: 'Book 2', description: 'Another amazing book', imageSrc: '/books/ringOfFire.png', buttonText: 'Read More',
          id: ''
      },
      {
          title: 'Book 3', description: 'A must-read', imageSrc: '/books/mockingBird.png', buttonText: 'Read More',
          id: ''
      },
      {
          title: 'Book 4', description: 'An exciting tale', imageSrc: '/books/mockingBird.png', buttonText: 'Read More',
          id: ''
      },
      {
          title: 'Book 5', description: 'A thrilling adventure', imageSrc: '/books/mockingBird.png', buttonText: 'Read More',
          id: ''
      },
      {
          title: 'Book 6', description: 'A fantastic read', imageSrc: '/books/mockingBird.png', buttonText: 'Read More',
          id: ''
      },
      {
          title: 'Book 7', description: 'A page-turner', imageSrc: '/books/mockingBird.png', buttonText: 'Read More',
          id: ''
      },
      {
          title: 'Book 8', description: 'An unforgettable story', imageSrc: '/books/mockingBird.png', buttonText: 'Read More',
          id: ''
      }
    ],
  },
};

export default meta;

type Story = StoryObj<typeof ScrollAreaStorybook>;

export const Default: Story = {};
