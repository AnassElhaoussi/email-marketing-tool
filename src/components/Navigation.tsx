import { useState } from "react";
import boost from "../assets/icons8-boost-96.png";
import menuButton from "../assets/icons8-menu-100.png";

const Navigation = () => {
  const [isNavActive, setIsNavActive] = useState(
    window.innerWidth > 1024 ? true : false
  );

  return (
    <nav className="relative flex lg:flex-row flex-col justify-between items-center text-gray-800 px-10 py-5 font-light ">
      <div className="flex justify-between items-center lg:w-fit w-full">
        <span className="flex items-center font-black text-2xl pr-10">
          <img src={boost} alt="" className="w-10" />
          AffiliateBoost
        </span>
        <img
          src={menuButton}
          alt=""
          className="w-8 cursor-pointer lg:hidden"
          onClick={() => {
            setIsNavActive(!isNavActive);
          }}
        />
      </div>
      {isNavActive && (
        <div className="lg:static absolute z-20 top-20 lg:w-auto w-full flex lg:flex-row flex-col lg:gap-32 gap-5 lg:py-0 py-5 items-center lg:bg-transparent bg-gray-300">
          <div className="lg:w-auto w-full flex lg:flex-row lg:text-sm text-xl font-light flex-col lg:gap-x-20 items-center">
            <a
              href=""
              className="py-4 hover:bg-gray-700 hover:text-gray-200 lg:hover:bg-transparent lg:hover:text-purple-600 w-full text-center transition-all"
            >
              Home
            </a>
            <a
              href=""
              className="py-4 hover:bg-gray-700 hover:text-gray-200 lg:hover:bg-transparent lg:hover:text-purple-600 w-full text-center transition-all"
            >
              About
            </a>
            <a
              href=""
              className="py-4 hover:bg-gray-700 hover:text-gray-200 lg:hover:bg-transparent  lg:hover:text-purple-600 w-full text-center transition-all"
            >
              Pricing
            </a>
            <a
              href=""
              className="py-4 hover:bg-gray-700 hover:text-gray-200 lg:hover:bg-transparent lg:hover:text-purple-600 w-full text-center transition-all"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
