import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";

const MobNavbar = ({ user, isDropDownOpen, setIsDropDownOpen }) => {
  return (
    <div className="w-full flex items-center justify-between container m-auto lg:hidden py-2">
      <div className="w-28">
        <img
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt="Logo"
        />
      </div>
      <div className="flex items-center gap-3 relative">
        <button className="bg-zomato-400 text-white px-3 py-2 rounded-full">
          Use App
        </button>
        {user?.fullName ? (
          <>
            <div
              onClick={() => setIsDropDownOpen((prev) => !prev)}
              className="border border-gray-300 text-zomato-400 h-9 w-9 rounded-full"
            >
              <img
                src="https://banner2.cleanpng.com/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg"
                alt="avatar"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            {isDropDownOpen && (
              <div className="absolute shadow-lg py-3 -bottom-14 -right-0 w-36 z-20 bg-white flex flex-col gap-2 border border-gray-200">
                <button className="">Sign Out</button>
              </div>
            )}
          </>
        ) : (
          <>
            <span
              onClick={() => setIsDropDownOpen((prev) => !prev)}
              className="border p-2 border-gray-400 rounded-full"
            >
              <FaUserAlt className="w-full h-full" />
            </span>
            {isDropDownOpen && (
              <div className="absolute shadow-lg py-3 -bottom-24 -right-0 w-36 z-20 bg-white flex flex-col gap-2 border border-gray-200">
                <button className="">Sign Out</button>
                <button className="">Sign Up</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const LargeNav = ({ user, isDropDownOpen, setIsDropDownOpen }) => {
  return (
    <div className="w-full items-center justify-between m-auto px-20 lg:flex hidden container mx-auto ">
      <div className="gap-4 justify-around w-full items-center flex">
        <div className="w-20">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="Logo"
          />
        </div>
        <div className="w-3/4 bg-white shadow-md p-3 flex items-center gap-3 border border-gray-200 rounded">
          <div className="flex pr-2 items-center border-r-2 gap-2 border-gray-200">
          <span className="text-zomato-400 ">
            <HiLocationMarker />
          </span>
          <input
            type="text"
            placeholder="TamilNadu CBE"
            className="w-full focus:outline-none"
          />
          <IoMdArrowDropdown />
          </div>
          <div className="flex w-full items-center gap-2">
            <RiSearch2Line />
            <input
              type="search"
              placeholder="Search for restaurant, cuisine or a dish"
              className="w-full focus:outline-none"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 relative">
        {/* <button className=" bg-black text-black px-3 py-2 rounded-full">
          Use App
        </button> */}
        {user?.fullName ? (
          <>
            <div
              onClick={() => setIsDropDownOpen((prev) => !prev)}
              className="border border-gray-300 text-zomato-400 h-9 w-9 rounded-full"
            >
              <img
                src="https://banner2.cleanpng.com/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg"
                alt="avatar"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            {isDropDownOpen && (
              <div className="absolute shadow-lg py-3 -bottom-14 -right-0 w-36 z-20 bg-white flex flex-col gap-2 border border-gray-200">
                <button className="">Sign Out</button>
              </div>
            )}
          </>
        ) : (
          <>
            <span
              onClick={() => setIsDropDownOpen((prev) => !prev)}
              className="border p-2 border-gray-400 rounded-full"
            >
              <FaUserAlt className="w-full h-full" />
            </span>
            {isDropDownOpen && (
              <div className="absolute shadow-lg py-3 -bottom-24 -right-0 w-36 z-20 bg-white flex flex-col gap-2 border border-gray-200">
                <button className="">Sign Out</button>
                <button className="">Sign Up</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const Navbar = () => {
  const user = {
    fullName: "Shri",
  };
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  return (
    <>
      <nav className="p-4 lg:py-2 flex bg-white shadow-md lg:shadow-none lg:border-b-2 border-gray-100 w-full items-center">
        <MobNavbar
          user={user}
          isDropDownOpen={isDropDownOpen}
          setIsDropDownOpen={setIsDropDownOpen}
        />
        <LargeNav
          user={user}
          isDropDownOpen={isDropDownOpen}
          setIsDropDownOpen={setIsDropDownOpen}
        />
      </nav>
    </>
  );
};

export default Navbar;
