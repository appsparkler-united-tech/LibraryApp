import React from 'react';
import Button from './Button';
import { GrFavorite, GrAddCircle, GrChat, GrUser } from 'react-icons/gr';
import { IoIosSearch } from 'react-icons/io';

const BottomNavigation = () => {
  const handleClick = (action) => {
    console.log(action);
  };

  return (
    <div className="btm-nav">
      <Button icon={IoIosSearch} label="Search" isActive={true} onClick={() => handleClick("search your next read")} />
      <Button icon={GrFavorite} label="Favourite" isActive={true} onClick={() => handleClick("mark your favourite")} />
      <Button icon={GrAddCircle} label="Offer" isActive={true} onClick={() => handleClick("offer books")} />
      <Button icon={GrChat} label="Message" isActive={true} onClick={() => handleClick("lets chat")} />
      <Button icon={GrUser} label="Me" isActive={true} onClick={() => handleClick("my profile")} />
    </div>
  );
};

export default BottomNavigation;

