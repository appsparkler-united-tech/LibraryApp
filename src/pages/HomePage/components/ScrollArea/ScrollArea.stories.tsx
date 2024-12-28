import { Meta, StoryFn } from '@storybook/react';
import Card from '../CardComponent/Card'; // Ensure this path points to your Card component
import { ScrollArea } from '@storybook/components';

export default {
  title: 'Components/ScrollArea',
  component: ScrollArea,
} as Meta;

// Responsive Grid with ScrollArea
export const ResponsiveGridWithSpacing: StoryFn = () => (
  <ScrollArea className="h-[400px] p-4 border border-gray-300">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
      {Array.from({ length: 10 }, (_, i) => (
        <Card
          key={i}
          title={`Book Title ${i + 1}`}
          description="Description of the book goes here."
          imageSrc="/books/ringOfFire.png" // Ensure this image exists in public/books
          buttonText="Learn More"
        />
      ))}
    </div>
  </ScrollArea>
);

// Vertical Scrollable Area with Cards
export const VerticalScrollArea: StoryFn = () => (
  <ScrollArea className="h-[500px] p-4 border border-gray-300">
    <div className="space-y-4">
      {Array.from({ length: 10 }, (_, i) => (
        <Card
          key={i}
          title={`Book Title ${i + 1}`}
          description="Description of the book goes here."
          imageSrc="/books/ringOfFire.png" // Ensure this image exists in public/books
          buttonText="Learn More"
        />
      ))}
    </div>
  </ScrollArea>
);
