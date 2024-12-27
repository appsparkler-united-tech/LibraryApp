// src/components/Homepage.tsx
import React from 'react';
import { ScrollArea } from '@storybook/components'; // Import the ScrollArea from Storybook
import Card from '../CardComponent/Card'; // Your Card component

const Homepage: React.FC = () => {
  return (
    <div className="homepage-container">
      {/* ScrollArea with Cards */}
      <ScrollArea className="h-[500px] p-4">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: 10 }, (_, i) => (
            <Card
              key={i}
              title={`Book ${i + 1}`}
              description="Description of the book goes here."
              imageSrc="/books/mockingBird.png" // Image should be inside the public/books folder
              buttonText="Learn More"
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Homepage;
