import React from 'react';
import Button from '../ButtonComponent/Button'; // Adjust path based on your folder structure

const CategoryBar: React.FC = () => {
  const categories = ['Author', 'Title', 'Genre', 'Language'];

  return (
    <div className="flex justify-around w-full mt-4">
      {categories.map((category) => (
        <Button
          key={category}
          label={category} // or an appropriate default icon if needed
          isActive={true}
          onClick={() => {}} // Empty function as a default
        />
      ))}
    </div>
  );
};

export default CategoryBar;
