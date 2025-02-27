import React from "react";
import { CiCalendar, CiLocationOn, CiRead } from "react-icons/ci";

interface BookDetailsProps {
  title: string;
  rating: number;
  category: string;
  location: string;
  uploadDateTime: string;
  views: number;
}

const BookDetails: React.FC<BookDetailsProps> = ({
  title,
  rating,
  category,
  location,
  uploadDateTime,
  views,
}) => {
  return (
    <div className="p-4">
      {/* Title and Rating in one row */}
      <div className="flex items-center space-x-2">
        <h2 className="text-sm text-pretty font-light">{title}</h2>
        <div className="rating rating-xs flex space-x-1">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={`mask mask-star w-4 h-4 ${
                index < rating ? "bg-primary" : "bg-gray-300"
              }`}
              aria-label={`${index + 1} star`}
              aria-current={index === rating - 1 ? "true" : undefined}
            ></div>
          ))}
        </div>
      </div>

      {/* Category under title */}
      <div className="my-2 text-sm text-secondary-content">{category}</div>

      {/* Location with icon */}
      <div className="my-2 flex items-center space-x-1">
        <CiLocationOn className="text-primary" />
        <span className="text-sm text-secondary-content">{location}</span>
      </div>

      {/* Date, Time, and Views all in one line */}
      <div className="my-2 flex space-x-4">
        <div className="flex items-center space-x-1">
          <CiCalendar className="text-primary" />
          <span className="text-sm text-secondary-content">{uploadDateTime}</span>
        </div>
        <div className="flex items-center space-x-1">
          <CiRead className="text-primary" />
          <span className="text-sm text-secondary-content">{views}</span>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
