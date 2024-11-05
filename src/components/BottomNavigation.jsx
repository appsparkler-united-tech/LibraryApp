// BottomNavigation.jsx
import React from 'react';
import Button from './Button';
import { GrFavorite, GrAddCircle, GrChat, GrUser } from 'react-icons/gr';
import { IoIosSearch } from "react-icons/io";

const BottomNavigation = () => (
  <div className="btm-nav bg-primary text-white p-4"> {/* Ensure bg-primary is teal */}
    <Button icon={<IoIosSearch />} label="Search" isActive={false} />
    <Button icon={<GrFavorite />} label="Favourite" isActive={false} />
    <Button icon={<GrAddCircle />} label="Offer" isActive={false} />
    <Button icon={<GrChat />} label="Message" isActive={false} />
    <Button icon={<GrUser />} label="Me" isActive={false} />
  </div>
);

export default BottomNavigation;
