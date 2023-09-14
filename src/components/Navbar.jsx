import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed w-[97vw] right-0 left-0 mx-auto z-10">
      <div
        className="flex justify-between items-center border-b border-[#989898] mx-10 py-6"
      >
        <Link to="/" className="text-3xl">
          ODIN ✦
        </Link>
        <ul className="flex items-center gap-10">
          <li>
            <Link to="#" className="text-[#989898] text-sm">Product</Link>
          </li>
          <li>
            <Link to="#" className="text-[#989898] text-sm">Chart</Link>
          </li>
          <li>
            <Link to="#" className="text-[#989898] text-sm">Telegram</Link>
          </li>
          <li>
            <Link to="#" className="text-[#989898] text-sm">Docs</Link>
          </li>
        </ul>
        <button className="px-8 bg-[#B7E5FF] text-black text-sm font-medium py-2 rounded-3xl font">
          <Link to="#">Buy $ODIN</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
