import React from "react";
import BottomNavigationStorybook from "../../pages/HomePage/components/BottomNavigationComponent/BottomNavigationStorybook";

interface Book {
  id: string;
  title: string;
  imageSrc: string;
}

interface ScrollAreaTitleProps {
  books: Book[];
}

const ScrollAreaTitle: React.FC<ScrollAreaTitleProps> = ({ books }) => {
  return (
    <div>
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* Table Head */}
          <thead>
            <tr>
              <th>Book</th>
              <th>Title</th>
              <th>Open</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>
                  <img
                    src={book.imageSrc}
                    alt={book.title}
                    className="mask mask-squircle h-12 w-12"
                  />
                </td>
                <td>{book.title}</td>
                <td>
                  <button className="btn btn-ghost btn-xs">Open</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full shadow-md z-50">
        <BottomNavigationStorybook />
      </div>
    </div>
  );
};

export default ScrollAreaTitle;
