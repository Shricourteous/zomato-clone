import React,{useState} from 'react'
import {IoMdArrowDropdown, IoMdArrowDropright, IoMdArrowDropup} from 'react-icons/io'
import {IoCloseSharp} from 'react-icons/io5'
import {useNavigate} from 'react-router-dom'

// import React, { useState } from "react"; {DEVTOW}
// import { IoMdArrowFropdown, IoCloseSharp } from "react-icons/io5";
// import { IoMdArrowDropup, IoMdArrowDropright } from "react-icons/io";
// import { useNavigate } from "react-router-dom";
 
// Components
import FoodItem from './FoodItem'

const CartData =({toggle})=>{
  const [cart, setcart] = useState([
    
    {
      image: 'https://b.zmtcdn.com/data/dish_photos/af1/fd1b012ebfbe82f2e5212b702ce19af1.jpg',
      name: 'Butter Pancakes with Bacon',
      rating: 4.5,
      price: 100,
      quantity : 2,
      totalPrice: 200,
      description: 'Rashers and bourbon caramel sauce.',
    },
    {
      image: 'https://b.zmtcdn.com/data/dish_photos/077/28e7baadea310b7b337fd2fb3f653077.jpg',
      name: 'Amritsari Fish Tikka',
      rating: 5,
      price: 200,
      quantity : 3,
      totalPrice: 600,
      description: 'Fish marinated in flavourful lemon-chilli masala roasted in the tandoor with care. Serves 2-3 people.',
    }
  ])
  const navigate= useNavigate();
  const countinueToCheckout = ()=> navigate("/checkout/orders");
  

  
  return (
    <>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col items-start'>
          <small className='flex gap-1 items-center' onClick={toggle}>
            {cart.length } item <IoMdArrowDropup/>
          </small>
          <h4>
            ₹ {cart.reduce((acc,curr)=> acc + curr.totalPrice,0 )}
          </h4>
          <sub>(plus Tax)</sub>
        </div>
        <button onClick={countinueToCheckout} className='flex items-center gap-1 bg-zomato-400 rounded-lg text-white px-3 py-1'>
          Continue <IoMdArrowDropright/>
        </button>
      </div>
    </>
  )
}

const CartContainer = () => {
  const [isOpen, setisOpen] = useState(true)

  const [cart, setcart] = useState([
    
    {
      image: "https://b.zmtcdn.com/data/dish_photos/af1/fd1b012ebfbe82f2e5212b702ce19af1.jpg",
      name: "Butter Pancakes with Bacon",
      rating: 4.5,
      price: 200,
      description: "Rashers and bourbon caramel sauce.",
      quantity: 3,
      totalPrice: 600,
    },
    {
      image: "https://b.zmtcdn.com/data/dish_photos/077/28e7baadea310b7b337fd2fb3f653077.jpg",
      name: "Amritsari Fish Tikka",
      rating: 5,
      price: 250,
      quantity: 1,
      totalPrice: 250,
      description: "Fish marinated in flavourful lemon-chilli masala roasted in the tandoor with care. Serves 2-3 people.",
    },
  ])
  const toggleCart = ()=> setisOpen((prev)=>!prev)
  const closeCart= ()=> setisOpen(false)
  return(
    <>
      {cart.length && (
        <>
          {isOpen && (
            <div className="w-full overflow-y-scroll h-48 bg-white z-20 p-2 bottom-14 px-3 fixed">
              <div className="flex items-center justify-between md:px-20">
                <h3 className="text-xl font-semibold">Your Orders</h3>
                <IoCloseSharp onClick={closeCart} className="cursor-pointer" />
              </div>

              <hr className="my-2" />

              <div className="flex flex-col gap-2 md:px-20">
                {cart.map((food) => (
                  <FoodItem key={food._id} {...food} />
                ))}
              </div>
            </div>
          )}

          <div className="fixed w-full bg-white z-10 p-2 px-3 bottom-0 mx-auto lg:px-20">
            <CartData toggle={toggleCart} />
          </div>
        </>
      )}
    </>
  )
}

export default CartContainer;