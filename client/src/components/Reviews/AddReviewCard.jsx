import React,{useState} from 'react'


// Components
import ReviewModel from "./ReviewModel"


const AddReviewCard = () => {
  const [isOpen, setisOpen] = useState(false);

  const [type, settype] = useState("");
  const getReviewType = (type)=>{
    settype(type);
  }

  const openModel =()=>{
  //  if(!localStorage.zomatoUser){
  //   alert("Sign In to post a review");
  //  }
   setisOpen(true) 
  }

  return (
    <>
        <ReviewModel setisOpen={setisOpen} type={type} isOpen={isOpen} />
        <h3 className='text-xl font-medium'>Rate your experience for</h3>
        <div className='flex gap-3 items-left'>
            <div className='flex gap-3'>
                <input type= {"radio"} name="review" id='dining' onChange={(each)=> getReviewType(each.target.id)} />
                <label htmlFor='dining'>Dining</label>
            </div>
            <div className='flex gap-3'>
                <input type= {"radio"} name="review" id='delivery' onChange={(each)=> getReviewType(each.target.id)} />
                <label htmlFor='delivery'>Delivery</label>
            </div>
        </div>
        <button onClick={openModel} className='text-zomato-400 text-left'>Write a Review</button>
    </>
  )
}

export default AddReviewCard