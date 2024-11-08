import React from 'react';

const TextInput = ({ placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="input input-bordered w-full md:w-auto"
    />
  );
};

export default TextInput;
