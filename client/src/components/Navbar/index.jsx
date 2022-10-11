import React, {useState} from 'react'
import {FaUserAlt} from 'react-icons/fa'
import {HiLocationMarker} from 'react-icons/hi'
import {IoMdArrowDropdown, IoMdArrowDropup} from 'react-icons/io'
import { RiSearch2Line} from 'react-icons/ri'

const MobNavbar = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  return (
    <>

      <div className='w-full flex items-center justify-between container m-auto lg:hidden'>
        <div className='w-28'>
          <img src="" alt="Logo" />
        </div>
        <div className='flex items-center gap-3 relative'>
          <button className='bg-zomato-400 text-white px-3 py-2 rounded-full'>
            Use App
          </button>
          <div onClick={()=> setIsDropDownOpen((prev)=>!prev)} className='border border-gray-300 text-zomato-400 h-20 w-20 rounded-full'>
            <img src="" alt="avatar" className='w-full h-full object-cover rounded-full' />
          </div>
          {
            isDropDownOpen && 
            <div className='absolute shadow-lg py-3 -bottom-20 -right-4 w-full z-20 flex flex-col gap-2'>
              <button className=''>Sign Out</button>
            </div>
          }
        </div>
      </div>

    </>
  )
}


const Navbar = () => {
  return (
    <MobNavbar/>
  );
}

export default Navbar