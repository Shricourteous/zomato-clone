import React,{useState} from 'react'
import {AiOutlineCompass} from 'react-icons/ai'
import {BiTimeFive} from 'react-icons/bi'


// Comopnets
import FloatMenuBtn from "../OrderOnline/FloatMenuBtn";
import FoodList from "../OrderOnline/FoodList"
import MenuListContainer from "../OrderOnline/MenuListContainer"


const OrderOnline = () => {
  const [menu, setmenu] = useState([])
  const [selected, setselected] = useState("")
  
  const clickHandler = (e) => {
    if(e.target.id){
      setselected(e.target.id);
    }
    return;
  }

  return (
    <>
      <div className='w-full h-screen flex'>
        <aside className='hidden md:flex flex-col gap-1 border-r overflow-y-scroll border border-gray-200 h-screen w-1/4'>
          {menu.map((item, index)=>{
            <MenuListContainer {...item} key={index} onClickHandler={clickHandler} selected={selected} />
          })}
        </aside>
        <div className='w-full px-3 md:w-3/4 '>
          <div className='pl-3 mb-4'>
            <h2 className='font-semibold text-xl'>Order Online</h2>
            <h4 className='flex items-center font-light text-gray-500'>
              <AiOutlineCompass/> Live Track Your Oder | <BiTimeFive/> 45 mins
            </h4>
          </div>
          <section className='flex h-screen overflow-y-screen flex-col gap-3 md:gap-5'>
            {menu.map((item, index)=>{
              <FoodList key={index} {...item}/>
            })}
          </section>
        </div>
      </div>
      <FloatMenuBtn menu={menu} onClickHandler={clickHandler} selected={selected}/>
    </>
  )
}

export default OrderOnline