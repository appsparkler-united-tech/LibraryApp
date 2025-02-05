import React from 'react';
import { IoMdPin, IoIosNotifications } from 'react-icons/io';
import TextInput from '../TextInputComponent/TextInput';

const Header: React.FC = () => {
  return (
    <div className="navbar bg-base-100 flex flex-col">
      {/* First row: Search Bar and Buttons */}
      <div className="flex items-center justify-between w-full">
        <div className="form-control w-full">
          <TextInput placeholder="Search your Read" />
        </div>
        
        {/* Buttons */}
        <div className="flex gap-4">
          <button className="btn btn-ghost btn-circle text-secondary-content">
            <IoMdPin size={24} />
          </button>
          <button className="btn btn-ghost btn-circle text-secondary-content">
            <IoIosNotifications size={24} />
          </button>
        </div>
      </div>

      {/* Second row: Link under the search bar */}
      <div className="mt-2">
      <a href="#" className="link text-secondary-content text-xs font-thin ml-1">
          Advanced Search
        </a>
      </div>
    </div>
  );
};

export default Header;
