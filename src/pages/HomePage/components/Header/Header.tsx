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

        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            <svg
              width="12px"
              height="12px"
              className="inline-block h-2 w-2 fill-current opacity-60"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2048 2048">
              <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
            </svg>
          </div>
          <ul tabIndex={0} className="dropdown-content bg-base-300 rounded-box z-10 w-52 p-2 shadow-2xl">
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                aria-label="light"
                value="light" />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                aria-label="dark"
                value="dark" />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                aria-label="emerald"
                value="emerald" />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                aria-label="garden"
                value="garden" />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                aria-label="aqua"
                value="aqua" />
            </li>
          </ul>
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
