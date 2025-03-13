import BottomNavigationStorybook from "../../pages/HomePage/components/BottomNavigationComponent/BottomNavigationStorybook";

const ScrollAreaGenre: React.FC = () => {
  return (
    <div>
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* Table Head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>No. of Books</th>
              <th>Open</th>
            </tr>
          </thead>
          <tbody>
            {/* Example Rows */}
            <tr>
              <td>
                <div>Science Fiction</div>
              </td>
              <td>120</td>
              <th>
                <button className="btn btn-ghost btn-xs">Open</button>
              </th>
            </tr>
            <tr>
              <td>
                <div>Mystery</div>
              </td>
              <td>80</td>
              <th>
                <button className="btn btn-ghost btn-xs">Open</button>
              </th>
            </tr>
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

export default ScrollAreaGenre;
