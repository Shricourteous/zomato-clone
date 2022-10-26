import React,{useState} from 'react'
// import CheckoutLayout from '../layouts/Checkout.layout'
import {BsShieldLockFill} from "react-icons/bs"



// Components
import CheckoutLayout from '../layouts/Checkout.layout';
import FoodItem from '../components/Cart/FoodItem'
import AddressList from '../components/Checkout/AddressList'


const Checkout = () => {

  const [cart, setcart] = useState([
    
    {
      image:
        'https://b.zmtcdn.com/data/dish_photos/af1/fd1b012ebfbe82f2e5212b702ce19af1.jpg',
      name: 'Butter Pancakes with Bacon',
      rating: 4.5,
      price: 100,
      quantity : 2,
      totalPrice: 200,
      description: 'Rashers and bourbon caramel sauce.',
    },
    {
      image:
        'https://b.zmtcdn.com/data/dish_photos/077/28e7baadea310b7b337fd2fb3f653077.jpg',
      name: 'Amritsari Fish Tikka',
      rating: 5,
      price: 200,
      quantity : 3,
      totalPrice: 600,
      description:
        'Fish marinated in flavourful lemon-chilli masala roasted in the tandoor with care. Serves 2-3 people.',
    }
  ])


  const address = [{
    name : "Home",
    address : "Cherry Street, 789 Mountain dev"
  },
  {
    name : "Work",
    address : "Noob Street, 567 Sprite,IT"
  },
]
  
  const payNow = () => {
    let options = {
      key : "rzp_test_ayzVW3X3dkdKAw",
      amount : cart.reduce((total,current)=> total + current.totalPrice, 0 ) *100,
      currency : "INR",
      name: "Zomato Master",
      description: "Fast Delivery Service",
      handler : (data)=>{
        alert("Payment Successful");
        console.log(data)
      },
      prefill: {
        name: "Shri",
        email : "sandwich@tech.com"
      },
      theme : {
        color : "#e23744",
      },
  };

  let  razorpay = new window.Razorpay(options);
  razorpay.open()
  };
  return (
    <div className='my-3 gap-3 flex flex-col items-center'>
      <h1 className='text-xl items-center font-semibold md:text-xl'>Checkout</h1>
      <div className='w-full md:w-3/5 rounded-lg drop-shadow-lg flex flex-col border-white p-4 items-center py-3'>
        <h3 className='font-semibold text-lg '>Summary</h3>
        <div className='flex w-full flex-col gap-2 items-center'>
          <h5 className='text-base tracking-wider'>ORDER FROM</h5>
          <div className='flex-col flex w-full items-center text-gray-400  '>
            <h4>Domino's Pizza</h4>
            <small>CBE Brookefields Mall,BrookROad</small>
          </div>
          <div className='my-4 overflow-y-scroll h-32 px-4 flex flex-col gap-2 w-full md:w-3/4'>
            {cart.map((item, index)=> (<FoodItem key={index} {...item} />))}
          </div>
          <div className='flex flex-col md:w-3/5 w-full gap-3 items-center'>
            <h4 className='text-xl font-semibold'>
              Choose Address
            </h4>
            <AddressList address={address} />
          </div>
        </div>
        <button onClick={payNow} className="flex justify-between items-center gap-2 md:my-8 my-4 w-full px-4 py-4 md:4/5 h-4 text-white font-medium text-lg bg-zomato-400 rounded-lg">Pay securely <BsShieldLockFill/> </button>
      </div>
    </div>
  )
  
}  


export default CheckoutLayout(Checkout)   