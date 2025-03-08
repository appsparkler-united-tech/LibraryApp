import React from "react";

interface Book {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  buttonText: string;
}

interface ScrollAreaProps {
  books: Book[];
}

const ScrollAreaStorybook: React.FC<ScrollAreaProps> = ({ books }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Book</th>
            <th>Title</th>
            <th>Details</th>
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
                <button className="btn btn-primary btn-xs">Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScrollAreaStorybook;
