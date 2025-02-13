import React from "react";

interface LenderProps {
  name: string;
  avatar: string;
  activeSince: string;
  booksCount: number;
}

const Lender: React.FC<LenderProps> = ({ name, avatar, activeSince, booksCount }) => {
  return (
    <div>
      {/* Divider */}
      <div className="divider text-sm text-secondary-content">Lender</div>

      {/* Lender Info */}
      <div className="flex justify-between items-center">
        {/* Left Side: Avatar + Info */}
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="w-8 rounded">
              <img src={avatar} alt={`${name}'s avatar`} />
            </div>
          </div>
          {/* Info Column */}
          <div className="flex flex-col">
            <span className="text-sm font-light">{name}</span>
            <span className="text-xs text-secondary-content">Active since {activeSince}</span>
            <button className="btn btn-xs btn-primary mt-1">Follow</button>
          </div>
        </div>

        {/* Right Side: Books Count */}
        <div className="flex flex-col items-center">
          <button className="btn btn-circle btn-xs btn-success text-primary-content text-sm">
            {booksCount}
          </button>
          <span className="text-xs text-secondary-content mt-1">Books</span>
        </div>
      </div>
    </div>
  );
};

export default Lender;
