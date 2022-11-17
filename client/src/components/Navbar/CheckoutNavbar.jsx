import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"



const CheckoutNavbar = () => {


  const username = useSelector((globalState)=> globalState.user.fullname)
  const user = {
    fullName : username
  };
  const navigate = useNavigate()


  return (
    <nav className="p-4 flex bg-white shadow-md w-full items-center">
      <div className="container px-4 md:px-20 mx-auto">
        <div className="flex justify-between items-center w-full">
          <AiOutlineArrowLeft className="cursor-pointer" onClick={ ()=> navigate(-1)}/>
          <div className="w-28">
            <img
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
              alt="Logo"
              className="w-full h-full"
            />
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="border border-gray-400 w-10 h-10 text-zomato-400 overflow-hidden rounded-full">
              <img src="/images/avatar.jpg" alt="AVATAR" className="w-full h-full rounded-full object-cover" />
            </div>
            {user.fullName}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default CheckoutNavbar;
