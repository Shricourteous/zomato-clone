import React,{useState} from 'react'
import {HiMenu} from 'react-icons/hi'
import {MdClose} from 'react-icons/md'


//Components
import MenuListContainer from './MenuListContainer'

const FloatMenuBtn = (props) => {
  const [isClicked, setisClicked] = useState(false)
  
  const toggleMenu =()=> setisClicked((prev)=> !prev);

  return (
    <div className='fixed z-30 w-8/12 items-end flex flex-col gap-3 right-2 bottom-2 md:hidden'>
      {isClicked && (
        <div className='p-3 bg-white h-48 overflow-y-scroll rounded-md drop-shadow-md'>
          {props.menu.map((item, index)=>(
            <MenuListContainer key={index} {...item} onClickHandler={props.onClickHandler} selected={props.selected} />
          ))}
        </div>
      )}
      <button className='text-white rounded-md flex items-center gap-2 bg-yellow-900 px-3 py-1' onClick={toggleMenu}>
        {isClicked ? <MdClose/> : <HiMenu/>} Menu
      </button>
    </div>
  )
}

export default FloatMenuBtn