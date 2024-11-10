import React from 'react';
import { IoMdPin, IoIosNotifications } from 'react-icons/io';
import TextInput from '../TextInputComponent/TextInput';

const Header: React.FC = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <div className="form-control">
          <TextInput placeholder="Search your Read" />
        </div>
      </div>
      <div className="flex-none gap-4">
        <button className="btn btn-ghost btn-circle text-teal-600">
          <IoMdPin size={24} />
        </button>
        <button className="btn btn-ghost btn-circle text-teal-600">
          <IoIosNotifications size={24} />
        </button>
      </div>
    </div>
  );
};

export default Header;
