import React from 'react';

const CategoryBar: React.FC = () => {
  const categories = ['Author', 'Title', 'Genre', 'Language'];

  return (
    <div className="flex justify-around w-full mt-4">
      {categories.map((category) => (
        <button
          key={category}
          className="btn btn-primary"  // Using DaisyUI's btn-secondary class
          onClick={() => {}}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryBar;