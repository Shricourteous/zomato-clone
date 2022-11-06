import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import Rating from 'react-rating-stars-component'

// Redux
import { postReview } from '../../redux/reducers/review/review.action';
import { useDispatch } from 'react-redux';


const ReviewModel = ({ isOpen, setisOpen, type }) => {
  const [reviewData, setReviewData] = useState({
    subject: '',
    reviewText: '',
    isRestaurantReview: false,
    isFoodReview: false,
    rating: 0,
  });


  const dispatch = useDispatch();

  useEffect(() => {
    if (type === "delivery")
      setReviewData((prev) => ({
        ...prev,
        isFoodReview: true,
        isRestaurantReview: false,
      }));
    else if (type === "dining")
      setReviewData((prev) => ({
        ...prev,
        isRestaurantReview: true,
        isFoodReview: false,
      }));
  }, [type]);

  const closeModal = () => {
    setisOpen(false);
  };

  // console.log(type, reviewData.isRestaurantReview, reviewData.isFoodReview);

  const { id } = useParams();

  const handleChange = (event) => {
    setReviewData((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  const handleRating = (rating) => {
    setReviewData((prev) => ({
      ...prev,
      rating,
    }));
  };

  const toggleDining = () => {
    setReviewData((prev) => ({
      ...prev,
      isRestaurantReview: !prev.isRestaurantReview,
      isFoodReview: false,
    }));
  };

  const toggleDelivery = () => {
    setReviewData((prev) => ({
      ...prev,
      isRestaurantReview: false,
      isFoodReview: !prev.isFoodReview,
    }));
  };

  const submit = () => {

    //Redux
    console.log("Review Data +++++++++++++++++",reviewData)
    dispatch(postReview({...reviewData, restaurant : id }))
    closeModal();
    setReviewData({
      subject: '',
      reviewText: '',
      isRestaurantReview: false,
      isFoodReview: false,
      rating: 0,
    });
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'>
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 text-gray-900'>
                    Add Review
                  </Dialog.Title>
                  <div className='flex flex-col mt-2 gap-4'>
                    <div className='flex items-center gap-3'>
                      <div className='flex items-center gap-2'>
                        <input
                          type='radio'
                          name='review'
                          id='dining'
                          checked={reviewData.isRestaurantReview}
                          onChange={toggleDining}
                        />
                        <label htmlFor='dining'>Dining</label>
                      </div>
                      <div className='flex items-center gap-2'>
                        <input
                          type='radio'
                          name='review'
                          id='delivery'
                          checked={reviewData.isFoodReview}
                          onChange={toggleDelivery}
                        />
                        <label htmlFor='delivery'>Delivery</label>
                      </div>
                    </div>
                    <Rating count={5} size={24} value={reviewData.rating} onChange={handleRating} />
                    <form action="" className='flex flex-col gap-4'>
                      <div className='flex flex-col gap-2 w-full'>
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" value={reviewData.subject} onChange={handleChange} className='w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline focus:border-zomato-400' placeholder='Add context...' />
                      </div>
                      <div className='flex flex-col gap-2 w-full'>
                        <label htmlFor="subject">Comment</label>
                        <textarea type="text" id="reviewText" value={reviewData.reviewText} rows={5} onChange={handleChange} className='w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline focus:border-zomato-400' placeholder='Add context...' />
                      </div>
                    </form>
                  </div>

                  <div className='mt-4'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-zomato-500 px-4 py-2 text-sm font-medium text-white hover:bg-zomato-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-zomato-500 focus-visible:ring-offset-2'
                      onClick={submit}>
                      Add
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ReviewModel;
