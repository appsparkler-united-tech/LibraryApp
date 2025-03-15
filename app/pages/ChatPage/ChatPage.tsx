import React from "react";

const ChatPage = () => {
  return (
    <div className="flex flex-col h-screen bg-base-200">
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-sm p-2">
        <button className="btn btn-ghost btn-square">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex-1 flex items-center gap-2">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="avatar" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">How to Kill a Mocking Bird</span>
            <span className="text-sm text-gray-500">Radhika</span>
          </div>
        </div>
        <button className="btn btn-ghost btn-square">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
        </button>
      </div>
      
      {/* Chat Section */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="user" />
            </div>
          </div>
          <div className="chat-bubble chat-bubble-primary text-pretty font-light">Hope you enjoy the book!</div>
          <div className="chat-footer opacity-50">Delivered</div>
        </div>

        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="user" />
            </div>
          </div>
          <div className="chat-bubble chat-bubble-neutral text-pretty font-light">I am sure I will!</div>
          <div className="chat-footer opacity-50">Seen at 12:46</div>
        </div>
      </div>
      
      {/* Chat Input */}
      <div className="p-4 bg-base-100 shadow-sm flex items-center gap-2">
        <input type="text" placeholder="Type a message..." className="input input-bordered flex-1" />
        <button className="btn btn-primary">Send</button>
      </div>
    </div>
  );
};

export default ChatPage;
