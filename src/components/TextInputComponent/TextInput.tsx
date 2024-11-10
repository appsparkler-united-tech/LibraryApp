import React from 'react';

interface TextInputProps {
  placeholder?: string;
}

const TextInput: React.FC<TextInputProps> = ({ placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="input input-bordered w-full md:w-auto"
    />
  );
};

export default TextInput;
