import React from "react";

interface TitleLogoComponentProps {
  logoSrc: string;
  title: string;
}

const TitleLogoComponent: React.FC<TitleLogoComponentProps> = ({ logoSrc, title }) => {
  return (
    <div className="flex items-center space-x-4 mb-6">
      <img src={logoSrc} alt="Library App Logo" className="h-16" />
      <h1 className="text-lg font-normal text-secondary-content">{title}</h1>
    </div>
  );
};

export default TitleLogoComponent;
