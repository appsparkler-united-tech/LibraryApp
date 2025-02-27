// src/components/Card.tsx

import React from 'react';

export interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  buttonText: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageSrc, buttonText }) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl w-full max-w-sm">
      <figure>
        <img src={imageSrc} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
