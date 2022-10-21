import React from 'react'
import {TiStar} from 'react-icons/ti'


const MenuSimilarRestaurantCard = (props) => {
  return (
    <div className='mx-2 my-2'>
      <div className='bg-white shadow rounded-md'>
        <div className='w-full h-48'>
          <img src={props.image} alt={props.title} className="w-full h-full object-cover rounded-t-md" srcset="" />
        </div>
        <div className='flex flex-col gap-2 p-3'>
          <h3 className='font-semibold text-lg'>
            {props.title}
          </h3>
          <div className='flex items-center gap-2 justify-start text-sm'>
            <span className='flex gap-2 items-center justify-between text-sm'>
              <span className='flex text-sm items-center gap-1 text-white px-2 py-1 rounded bg-green-700'>
                4.0 <TiStar/>
              </span>
              Dining
            </span>
            <span className='flex gap-2 items-center justify-between text-sm'>
              <span className='flex text-sm items-center gap-1 text-white px-2 py-1 rounded bg-green-700'>
                3.9 <TiStar/>
              </span>
              Delivery
             </span>
            
          </div>
          <h4> Street Food, Beverages, Tea</h4>
        </div>
      </div>

    </div>
  )
}

export default MenuSimilarRestaurantCard