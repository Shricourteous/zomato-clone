import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";

// Components
import SignIn from '../Auth/SignIn'
import SignUp from "../Auth/SignUp";
import { Link, useNavigate } from "react-router-dom";

// redux
import { useSelector, useDispatch } from "react-redux";
import {clearUser} from '../../redux/reducers/User/user.action'
import {signOut} from  '../../redux/reducers/auth/auth.action'

const MobNavbar = ({ user, isDropDownOpen, setIsDropDownOpen, signIn, signUp }) => {
  
  // console.log("user : ", user)

  const SignIn =()=>{
    signIn()
    setIsDropDownOpen(false)
  }
  const SignUp =()=>{
    signUp()
    setIsDropDownOpen(false)
  }

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const SignOut = () => {
    dispatch(signOut())
    dispatch(clearUser())
    navigate('/delivery');
    setIsDropDownOpen(false)
    
  }
    
  return (
    <div className="w-full flex items-center justify-between lg:hidden">
      <div className="w-28">
        <Link to="/">
        <img
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt="Logo"
          className="w-full h-full"
          />
        </Link>
      </div>
      <div className="flex items-center gap-3 relative">
        <button className="bg-zomato-400 text-white px-3 py-2 rounded-full">
          Use App
        </button>
        {user?.email ? (
          <>
            <div
              onClick={() => setIsDropDownOpen((prev) => !prev)}
              className="border border-gray-300 text-zomato-400 h-9 w-9 rounded-full"
            >
              <img
                src="/images/avatar.jpg"
                alt="avatar"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            {isDropDownOpen && (
              <div className="absolute shadow-lg py-3 -bottom-14 -right-0 w-36 z-20 bg-white flex flex-col gap-2 border border-gray-200">
                <button onClick={SignOut}>Sign Out</button>
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
                <button onClick={SignIn}>Sign In</button>
                <button onClick={SignUp}>Sign Up</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const LargeNav = ({ user, isDropDownOpen, setIsDropDownOpen, signIn,signUp }) => {
  
  const SignIn =()=>{
    signIn()
    setIsDropDownOpen(false)
  }
  const SignUp =()=>{
    signUp()
    setIsDropDownOpen(false)
  }


  // REDUX
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const SignOut = () => {
    dispatch(signOut())
    dispatch(clearUser())
    navigate('/delivery');
    setIsDropDownOpen(false)
  }
  
  return (
    <div className="w-full items-center justify-between m-auto px-20 lg:flex hidden container mx-auto ">
      <div className="gap-4 justify-around w-full items-center flex">
        <div className="w-20">
          <Link to= "/">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="Logo"
          />
          </Link>
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
        {user?.email ? (
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
                <button onClick={SignOut}>Sign Out</button>
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
                <button onClick={SignIn}>Sign In</button>
                <button onClick={SignUp}>Sign Up</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const Navbar = () => {
  
  const [openSignin, setopenSignin] = useState(false)
  const [openSignup, setopenSignup] = useState(false)
  
  const openSigninModal = () => setopenSignin(true)
  const openSignupModal = () => setopenSignup(true)


  // const user = {
  //   fullname: "Shri",
  // };

  // redux
  const user =  useSelector((globalState) => globalState.user)


  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  return (
    <>

  <SignIn isOpen={openSignin} setisOpen={setopenSignin}/> 
  <SignUp isOpen={openSignup} setisOpen={setopenSignup}/> 

      <nav className="p-4 lg:py-2 flex bg-white shadow-md lg:shadow-none lg:border-b-2 border-gray-100 w-full items-center">
        <MobNavbar
          user={user}
          isDropDownOpen={isDropDownOpen}
          setIsDropDownOpen={setIsDropDownOpen}
          signIn={openSigninModal}
          signUp={openSignupModal}

        />
        <LargeNav
          user={user}
          isDropDownOpen={isDropDownOpen}
          setIsDropDownOpen={setIsDropDownOpen}
          signIn={openSigninModal}
          signUp={openSignupModal}
        />
      </nav>
    </>
  );
};

export default Navbar;
