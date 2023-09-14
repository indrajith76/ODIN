import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="fixed w-[97vw] right-0 left-0 mx-auto z-10">
      <div className="flex justify-between items-center lg:border-b lg:border-[#989898] mx-5 lg:mx-10 py-6">
        <Link to="/" className="text-3xl">
          ODIN ✦
        </Link>
        <ul className="hidden lg:flex items-center gap-10">
          <li>
            <Link to="#" className="text-[#989898] text-sm">
              Product
            </Link>
          </li>
          <li>
            <Link to="#" className="text-[#989898] text-sm">
              Chart
            </Link>
          </li>
          <li>
            <Link to="#" className="text-[#989898] text-sm">
              Telegram
            </Link>
          </li>
          <li>
            <Link to="#" className="text-[#989898] text-sm">
              Docs
            </Link>
          </li>
        </ul>
        {menu && (
          <ul className="bg-[#0e0d0dcb] absolute right-10 top-14 p-4 rounded-md shadow-lg block lg:hidden">
            <li>
              <Link to="#" className="text-[#989898] text-sm">
                Product
              </Link>
            </li>
            <li>
              <Link to="#" className="text-[#989898] text-sm">
                Chart
              </Link>
            </li>
            <li>
              <Link to="#" className="text-[#989898] text-sm">
                Telegram
              </Link>
            </li>
            <li>
              <Link to="#" className="text-[#989898] text-sm">
                Docs
              </Link>
            </li>
          </ul>
        )}
        <button className="hidden lg:block px-8 bg-[#B7E5FF] text-black text-sm font-medium py-2 rounded-3xl font">
          <Link to="#">Buy $ODIN</Link>
        </button>
        <button
          onClick={menu ? () => setMenu(false) : () => setMenu(true)}
          className="bg-white text-black p-1 rounded-md"
        >
          <HiMenu />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
