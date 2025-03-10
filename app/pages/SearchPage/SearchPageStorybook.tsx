


import TitleLogoComponent from "../../components/TitleLogoComponent"
import BottomNavigationStorybook from "../HomePage/components/BottomNavigationComponent/BottomNavigationStorybook";

const SearchPage = () => {
  return (
    <div className="container mx-auto p-4 bg-base-100 min-h-screen flex flex-col items-center">
      {/* Back Button */}
      <button className="btn btn-link btn-secondary self-start text-pretty font-light text-sm">Back</button>

      {/* Title Logo Component */}
                        {/* Reused TitleLogoComponent */}
                        <TitleLogoComponent
        logoSrc="/homePageLibrary.png"
        title="The Library App"
      />

      {/* Search Form */}
      <fieldset className="fieldset w-full max-w-xs bg-base-200 border border-base-300 p-4 rounded-box mt-6">
        <legend className="fieldset-legend">Book Details</legend>

        <label className="fieldset-label">Title</label>
        <input type="text" className="input input-bordered w-full" placeholder="Title" />

        <label className="fieldset-label">Author</label>
        <input type="text" className="input input-bordered w-full" placeholder="Author" />

        <label className="fieldset-label">Keywords</label>
        <input type="text" className="input input-bordered w-full" placeholder="Keywords" />

        <label className="fieldset-label">Genre</label>
        <input type="text" className="input input-bordered w-full" placeholder="Genre" />

        <label className="fieldset-label">Language</label>
        <input type="text" className="input input-bordered w-full" placeholder="Language" />
      </fieldset>

      {/* Search Button */}
      <button className="btn btn-primary mt-4">Search Book</button>

            {/* Bottom Navigation */}
            <div className="fixed bottom-0 left-0 w-full shadow-md z-10">
        <BottomNavigationStorybook />
      </div>

    </div>
  );
};

export default SearchPage;
