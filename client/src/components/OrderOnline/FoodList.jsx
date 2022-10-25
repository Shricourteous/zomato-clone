import React from 'react'
import FoodItem from './FoodItem'


const FoodList = (props) => {
  return (
    <>
      <div className='flex flex-col gap-3'>
         <h2 id={props.target} className='w-full bg-white top-0  px-2 py-1 z-9 sticky text-xl font-semibold text-gray-800'>
          {props.name}
        </h2>
        <div className='flex flex-col gap-3'>
          {props.items.map((each, index)=>(
            <FoodItem key={index} _id={each} {...each} />
          ))}
        </div>
      </div>
    </>
  )
}

export default FoodList