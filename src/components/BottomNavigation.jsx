import React from 'react';
import Button from './Button';
import { GrFavorite, GrAddCircle, GrChat, GrUser } from 'react-icons/gr';
import { IoIosSearch } from 'react-icons/io';

const BottomNavigation = ({ handleClick }) => (
  <div className="btm-nav bg-teal-500">
    <Button icon={IoIosSearch} label="Search" isActive="true" onClick={handleClick} />
    <Button icon={GrFavorite} label="Favourite" isActive="true" onClick={handleClick} />
    <Button icon={GrAddCircle} label="Offer" isActive="true" />
    <Button icon={GrChat} label="Message" isActive="true" onClick={handleClick} />
    <Button icon={GrUser} label="Me" isActive="true" onClick={handleClick} />
  </div>
);

export default BottomNavigation;
