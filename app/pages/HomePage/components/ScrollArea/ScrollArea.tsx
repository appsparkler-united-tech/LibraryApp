import React from 'react';
import Card, { type CardProps } from '../CardComponent/Card';

interface ScrollAreaProps {
  books: CardProps[];
}

const ScrollArea: React.FC<ScrollAreaProps> = ({ books }) => {
  return (
    <div className="flex-1 h-96 w-full overflow-y-auto px-4">
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {books.map((book, index) => (
          <Card key={index} {...book} />
        ))}
      </div>
    </div>
  );
};

export default ScrollArea;
