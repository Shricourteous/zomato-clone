import { useState } from 'react';
import { TiStarFullOutline } from 'react-icons/ti';
import  dayjs  from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime);

const ReviewCard = (props) => {
  const [user, setuser] = useState("Shri");

  return ( 
  
    <div className='my-3 flex pb-2 border-b border-gray-400 flex-col gap-3'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <div className='w-10 h-10 rounded-full'>
            <img
              src='https://banner2.cleanpng.com/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg'
              alt='Avater'
              className='w-full h-full rounded object-cover'
            />
          </div>
          <div className='flex flex-col '>
            <h3 className='text-lg font-semibold'>{user}</h3>
            <small className='text-gray-500'>
              5 Reviews &#8226; 3 Follower
            </small>
          </div>
        </div>
        <button className='py-2 px-4 text-zomato-400 border border-zomato-400 rounded-lg'>
          Follow
        </button>
      </div>
      <div className='flex flex-col gap-3'>
        <div className='flex items-center gap-3'>
          <span className='text-white text-xs py-1 px-2 bg-green-700 gap-2 flex items-center rounded-lg'>
            {props.rating} <TiStarFullOutline/>
          </span>
          <h5 className='font-regular uppercase'>
            {props.isRestaurantReview ? "Dining": "Delivery"}
          </h5>
          <small className='text-gray-500'>{dayjs(props.createdAt).fromNow()}</small>
        </div>
        <div className='w-full'>
          <p className='text-gray-500 font-light text-base w-full'>
            {props.reviewText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;