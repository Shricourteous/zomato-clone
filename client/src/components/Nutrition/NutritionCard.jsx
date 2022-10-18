import React, { useState } from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import ReactStars from 'react-rating-stars-component';
import ReactStart from 'react-rating-stars-component';

const NutritionCard = (props) => {
  return (
    <>
      <div className='w-full p-4 md:w-1/2 lg:w-1/3'>
        <div className='w-full h-full rounded-2xl drop-shadow-md'>
          {/* Dynamic className is written in templates */}
          <div
            className={`w-full p-4 h-72 md:h-56 lg:h-48 rounded-t-2xl bg-${props.bg}-100`}>
            <img
              src={props.image}
              alt='Supplements'
              className='w-full h-full object-cover rounded-2xl'
            />
          </div>
          <div className='p-3 flex flex-col gap-2'>
            <div className='flex mt-2 items-center gap-3'>
              <div className='w-4 h-4'>
                <img
                  src='https://i.pinimg.com/736x/e4/1f/f3/e41ff3b10a26b097602560180fb91a62.jpg'
                  alt='VegSymbl'
                  className='w-full h-full'
                />
              </div>
              <ReactStars
                count={3}
                size={16}
                isHalf={true}
                value={3}
                emptyIcon={<BsStar />}
                halfIcon={<BsStarHalf />}
                fullIcon={<BsStarFill/>}
                edit={false}
              />
              <span className='text-gray-400'>15</span>
            </div>
            <h3 className='text-xl font-bold text-gray-600'>Burn - Weight Balance</h3>
            <p className='text-sm font-light text-gray-400' > Decription of product - Yor can do wharever you want</p>
            <div className='mt-4'>
              <hr />
            </div>
            <div>
              <span className='flex items-center gap-2'>
              <s className='text-gray-300 font-light'>₹600</s>
              <strong>₹320</strong>
              <p className='text-gray-400'>Month Pack - 30 capsules</p>
              </span>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NutritionCard;
