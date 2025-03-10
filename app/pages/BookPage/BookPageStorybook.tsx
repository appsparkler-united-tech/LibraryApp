import React from "react";
import BottomNavigationStorybook from "../HomePage/components/BottomNavigationComponent/BottomNavigationStorybook";
import BookCover from "./BookCover";
import BookDetails from "./BookDetails";

import Lender from "./Lender";

const BookPage: React.FC = () => {
  const bookDetails = {
    title: "To Kill a Mocking Bird",
    rating: 3,
    categories: ["Fiction", "International"],
    location: "Chegur, Telangan",
    uploadDateTime: "2023-10-01 14:30",
    views: 1234,
  };

  return (
    <div className="min-h-screen relative">
      {/* Back button at the very top-left */}
      <div className="p-2">
        <button 
          className="btn btn-link btn-secondary text-pretty font-light text-sm"
        >
          Back
        </button>
      </div>
      {/* Book Cover */}
      <BookCover />

      {/* Book Details */}
      <BookDetails category={"Fiction, Interational"} {...bookDetails} />


      <Lender 
  name="Krishna" 
  avatar="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
  activeSince="17.10.2024" 
  booksCount={25} 
/> 

      {/* Bottom Divider */}
      <div className="divider"></div>
      <div className="flex justify-center">
      <button className="btn btn-xs btn-ghost btn-primary">Report Book</button>
      </div>
      <div className="divider"></div>


      {/* Message Button */}
      <div className="flex justify-center">
      <button className="btn btn-primary">Message</button>
      </div>

            {/* Bottom Navigation */}
            <div className="fixed bottom-0 left-0 w-full shadow-md z-10">
        <BottomNavigationStorybook />
      </div>

    </div>

    
  );
};

export default BookPage;