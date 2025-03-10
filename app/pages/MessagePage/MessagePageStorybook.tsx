import BottomNavigationStorybook from "../HomePage/components/BottomNavigationComponent/BottomNavigationStorybook";

const MessagePage = () => {
  return (
    <div className="max-w-md mx-auto bg-base-100 shadow-md rounded-lg p-4">
      {/* Header */}
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <span className="text-md font-light text-pretty">The Library App</span>
        </div>
        <div className="flex-none">
          <button className="btn btn-sm btn-ghost btn-primary text-secondary-content text-pretty font-light">Cancel</button>
          <button className="btn btn-sm btn-ghost btn-primary text-secondary-content text-pretty font-light">Send</button>
        </div>
      </div>

      {/* User Info */}
      <div className="flex items-center gap-4 p-4">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              alt="User Avatar"
            />
          </div>
        </div>
        <div>
          <h2 className="text-pretty font-light">Krishna</h2>
          <p className="text-xs text-secondary-content">How to Kill a Mocking Bird</p>
        </div>
      </div>

      {/* Message Input */}
      <textarea
        placeholder="Write a friendly message to Krishna and check if you can collect the book"
        className="textarea textarea-primary w-full h-32"
      ></textarea>

      {/* Profile Info */}
      <fieldset className="fieldset mt-4">
        <legend className="fieldset-legend">Profile Name</legend>
        <input type="text" className="input w-full" placeholder="Anokhi" />
        <p className="text-secondary-content text-sm mt-1">
          Your data will be transmitted to the provider and automatically
          pre-filled for future requests.
        </p>
      </fieldset>

            {/* Bottom Navigation */}
            <div className="fixed bottom-0 left-0 w-full shadow-md z-10">
        <BottomNavigationStorybook />
      </div>

    </div>
  );
};

export default MessagePage;
