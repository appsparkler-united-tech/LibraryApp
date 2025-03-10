import { useState } from "react";
import BottomNavigation from "../HomePage/components/BottomNavigationComponent/BottomNavigation";
import { CiLocationOff } from "react-icons/ci";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router";

const OfferPage = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const imageUrl = URL.createObjectURL(event.target.files[0]);
      setImage(imageUrl);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-base-100">
      {/* Header */}
      <div className="relative flex justify-center items-center">
  <h1 className="font-pretty text-secondary-content">
    Offer Books
  </h1>
  <Link to="/" className="btn btn-link btn-secondary absolute left-0 text-pretty font-light text-sm">
    Back
  </Link>
</div>

      {/* Photo Upload Section - Full Width */}
      <label htmlFor="file-input" className="relative w-full mt-2">
        <div className="w-full h-40 bg-gray-500 flex flex-col justify-center items-center cursor-pointer rounded-lg">
          {image ? (
            <img
              src={image}
              alt="Uploaded Preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <>
              <span className="text-white text-lg">📷</span>
              <p className="text-white">Take pictures of the book</p>
            </>
          )}
        </div>
      </label>
      <input
        id="file-input"
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={handleImageUpload}
      />

      {/* File Input & Photo Tip Button - Side by Side */}
      <div className="flex justify-between items-center px-4 mt-2">
        {/* File Input Section */}
        <input type="file" className="file-input file-input-primary" />

        {/* Photo Tip Button */}
        <button className="btn btn-link ml-2">Photo Tip</button>
      </div>

      <fieldset className="fieldset flex justify-between items-center px-4 mt-2">
  <legend className="fieldset-legend">I Offer</legend>
  <input type="text" className="input input-primary" placeholder="Book Name" />
</fieldset>

<fieldset className="fieldset flex justify-between items-center px-4 mt-2">
  <legend className="fieldset-legend">Book Category</legend>
  <select defaultValue="Pick a browser" className="select select-primary">
    <option disabled={true}>Pick a category</option>
    <option>Thriller</option>
    <option>Fiction</option>
    <option>Children</option>
  </select>
</fieldset>

<fieldset className="fieldset flex justify-between items-center px-4 mt-2">
  <legend className="fieldset-legend">Description</legend>
  <textarea className="textarea textarea-primary h-24" placeholder="Few words about the book"></textarea>
</fieldset>

<div className="flex items-center justify-between p-4 bg-base-100">
      {/* Avatar + Name */}
      <div className="flex items-center gap-2">
        <div className="avatar">
          <div className="w-8 rounded-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              alt="Profile"
            />
          </div>
        </div>
        <span className="text-secondary-content font-light">Rhea</span>
      </div>

      {/* Icons on the Right */}
      <div className="flex items-center gap-2">
        <CiLocationOff className="text-xl text-primary" />
        <FiArrowRight className="text-xl text-secondary-content" />
      </div>
    </div>

<div className="flex flex-col items-center mt-10 justify-center text-center px-4">
  <Link to="/book" className="btn btn-primary mt-6">Submit Book</Link>
  </div>
    

      {/* Push Footer to Bottom */}
      <div className="flex-grow"></div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full shadow-md z-10">
        <BottomNavigation />
      </div>
    </div>
  );
};

export default OfferPage;
