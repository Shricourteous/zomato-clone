import React,{useState} from 'react'


//components

import ReviewCard from '../Reviews/ReviewCard'; 
import AddReviewCard  from '../Reviews/AddReviewCard'

const Review = () => {
  const [reviews, setReviews] = useState([
    {
      rating: 3.0,
      isRestaurantReview: false,
      createdAt: 'Fri Oct 14 2022 20:20:34 GMT+0530 (India Standard Time)',
      reviewText: 'Very bad experience.',
    },
    {
      rating: 4.5,
      isRestaurantReview: false,
      createdAt: 'Fri Oct 16 2022 20:20:34 GMT+0530 (India Standard Time)',
      reviewText: 'Very good experience.',
    }
  ]);



  return (
    <div className='flex flex-col gap-5 md:flex md:flex-row relative w-full h-full'>
      <div className='w-full flex flex-col md:w-8/12 gap-3'>
        <div className='md:hidden mb-4 flex flex-col gap-1'>
          <AddReviewCard/>
        </div>
          {
            reviews.map((review , index)=>(
              <ReviewCard {...review} key={index}/>
            ))
          }
      </div>
        <aside
        style={{ height: "fit-content" }}
        className="hidden md:flex md:w-4/12 sticky rounded-xl top-20 bg-white py-4 px-4 shadow-md flex-col gap-4 z-10"
        >
          <AddReviewCard/>
        </aside>
    </div>
  )
}

export default Review