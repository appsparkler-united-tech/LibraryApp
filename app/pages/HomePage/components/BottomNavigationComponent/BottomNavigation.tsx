import { CiSearch, CiHeart, CiCirclePlus, CiChat1, CiUser } from "react-icons/ci";
import { Link } from "react-router";

const BottomNavigation = () => {
  return (
    <div className="dock h-[80px] bg-primary text-primary-content flex justify-between items-center px-4" style={{ height: "60px", paddingBottom: "5px", paddingTop: "5px" }}>
      <Link to="/" className="flex flex-col items-center gap-0.5">
        <CiSearch size={24}/>
        <span className="dock-label text-pretty font-light">Search</span>
      </Link>
      
      <button className="flex flex-col items-center gap-0.5">
        <CiHeart size={24}/>
        <span className="dock-label text-pretty font-light">Favourite</span>
      </button>
      
      <Link to="/offer" className="flex flex-col items-center gap-0.5">
        <CiCirclePlus size={24} />
        <span className="dock-label text-pretty font-light">Offer</span>
      </Link>

      <button className="flex flex-col items-center gap-0.5">
        <CiChat1 size={24}/>
        <span className="dock-label text-pretty font-light">Chat</span>
      </button>

      <Link to="/login" className="flex flex-col items-center gap-0.5" onClick={() => {
    console.log("hello there");

  }}>
        <CiUser size={24}/>
        <span className="dock-label text-pretty font-light">Me</span>
      </Link>
    </div>
  );
};

export default BottomNavigation;
