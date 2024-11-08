import React from 'react';
import { IoMdPin } from 'react-icons/io';
import { IoIosNotifications } from 'react-icons/io';

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search your Read"
            className="input input-bordered w-full md:w-auto"
          />
        </div>
      </div>
      <div className="flex-none gap-4">
        <button className="btn btn-ghost btn-circle text-teal-500">
          <IoMdPin size={24} />
        </button>
        <button className="btn btn-ghost btn-circle text-teal-500">
          <IoIosNotifications size={24} />
        </button>
      </div>
    </div>
  );
};

export default Header;
