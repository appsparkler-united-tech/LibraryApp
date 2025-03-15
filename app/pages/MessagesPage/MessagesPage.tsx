import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import TitleLogoComponent from "../../components/TitleLogoComponent";
import BottomNavigationStorybook from "../HomePage/components/BottomNavigationComponent/BottomNavigationStorybook";

const messages = [
  {
    id: "1",
    avatar: "https://img.daisyui.com/images/profile/demo/2@94.webp",
    name: "Hart Hagerty",
    book: "The Great Gatsby",
    lastMessage: "Hey, is this book still available?",
    date: "Mar 12",
    unreadCount: 2,
  },
  {
    id: "2",
    avatar: "https://img.daisyui.com/images/profile/demo/3@94.webp",
    name: "Brice Swyre",
    book: "1984",
    lastMessage: "Thanks for the book recommendation!",
    date: "Mar 11",
    unreadCount: 0,
  },
  {
    id: "3",
    avatar: "https://img.daisyui.com/images/profile/demo/4@94.webp",
    name: "Marjy Ferencz",
    book: "To Kill a Mockingbird",
    lastMessage: "Let's meet up to exchange books.",
    date: "Mar 10",
    unreadCount: 1,
  },
];

const MessagesPage = () => {
  return (
    <div className="flex flex-col h-screen bg-base-100">
      {/* Top Bar */}
      <div className="flex items-center justify-between bg-base-200">
      <button className="btn btn-link btn-sm text-secondary-content font-light">Back</button>
        <h1 className="text-lg font-light">Messages</h1>
        <button className="btn btn-link btn-sm text-secondary-content font-light">Select</button>
      </div>
      <div className="divider"></div>

                        {/* Reused TitleLogoComponent */}
                        <div className="flex justify-center">
                        <TitleLogoComponent
        logoSrc="/homePageLibrary.png"
        title="The Library App"
      />
                        </div>


      {/* Chat Table */}
      <div className="overflow-x-auto p-4">
        <table className="table w-full">
          <tbody>
            {messages.map((msg) => (
              <tr key={msg.id}>
                {/* Avatar */}
                <td className="p-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={msg.avatar} alt={msg.name} />
                    </div>
                  </div>
                </td>

                {/* User Info */}
                <td className="p-3">
                  <div className="font-bold">{msg.name}</div>
                  <div className="text-sm text-gray-500">{msg.book}</div>
                  <div className="text-sm text-gray-400">{msg.lastMessage}</div>
                </td>

                {/* Date & Unread Messages */}
                <td className="p-3 text-right">
                  <div className="text-sm text-gray-500">{msg.date}</div>
                  {msg.unreadCount > 0 && (
                    <div className="badge badge-primary badge-sm">
                      {msg.unreadCount}
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="divider"></div>
      </div>

      <div className="fixed bottom-0 left-0 w-full shadow-md z-50">
        <BottomNavigationStorybook />
      </div>
    </div>
  );
};

export default MessagesPage;
