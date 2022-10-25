import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import ReactStars from 'react-rating-stars-component';

const FoodItem = (props) => {
  const [foodItem, setfoodItem] = useState();
  return (
    <>
      <div className='flex item-start gap-2'>
        {props?.name && (
          <div className='flex w-full items-start gap-4 p-1 '>
            {props?.image && (
              <div className='w-1/3 h-24 md:h-28 md:w-28 lg:h-36 lg:w-36 rounded-md overflow-hidden'>
                <img
                  src={props?.image}
                  alt='Food ITems'
                  className='w-full h-full object-cover object-center'
                />
              </div>
            )}

            <div className='w-3/4 md:w-7/12 flex flex-col gap-1'>
              <div className='flex items-start justify-between'>
                <h3 className='text-xl font-semibold'>{props?.name}</h3>
              </div>
              <ReactStars
                count={5}
                classNames={'block md:hidden'}
                value={props?.rating}
                edit={false}
              />
              <h5>₹ {props?.price}</h5>
              <p>{props?.description}</p>
              <button className='md:hidden justify-between flex items-center text-zomato-400 gap-2 bg-zomato-50 border border-zomato-400 px-2 py-1  rounded-lg'>
                <AiOutlinePlus /> Add
              </button>
            </div>
            <div className='hidden md:block w-2/12'>
              <button className='flex items-center text-zomato-400 gap-2 bg-zomato-50 border border-zomato-400 px-2 py-1  rounded-lg'>
                <AiOutlinePlus /> Add
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FoodItem;
