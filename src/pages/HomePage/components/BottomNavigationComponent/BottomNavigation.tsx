import React from 'react';
import Button from '../ButtonComponent/Button';
import { GrFavorite, GrAddCircle, GrChat, GrUser } from 'react-icons/gr';
import { IoIosSearch } from 'react-icons/io';

const BottomNavigation: React.FC = () => {
  // Define the type of action as a string for the handleClick function
  const handleClick = (action: string): void => {
    console.log(action);
  };

  return (
    <div className="btm-nav">
      <Button
        icon={IoIosSearch}
        label="Search"
        onClick={() => handleClick("search your next read")}
      />
      <Button
        icon={GrFavorite}
        label="Favourite"
        onClick={() => handleClick("mark your favourite")}
      />
      <Button
        icon={GrAddCircle}
        label="Offer"
        onClick={() => handleClick("offer books")}
      />
      <Button
        icon={GrChat}
        label="Message"
        onClick={() => handleClick("lets chat")}
      />
      <Button
        icon={GrUser}
        label="Me"
        onClick={() => handleClick("my profile")}
      />
    </div>
  );
};

export default BottomNavigation;
