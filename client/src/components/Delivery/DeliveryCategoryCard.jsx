import React from 'react';


const DeliveryLgcards = ({ title, image }) => {
  return (
    <>
      <div className='lg:block hidden rounded-md w-full'>
        <div className='w-full h-26'>
          <img
            className='w-full h-full object-cover object-center rounded-full'
            src={image}
            alt={title}
          />
        </div>
        <div>
          <h3 className='text-sm my-1 text-center font-light'>{title}</h3>
        </div>
      </div>
    </>
  );
};
const DeliverySmcards = ({ title, image }) => {
  return (
    <>
      <div className='lg:hidden rounded-md w-full'>
        <div className='w-full h-26'>
          <img
            className='w-full h-full object-cover object-center rounded-full'
            src={image}
            alt={title}
          />
        </div>
        <div>
          <h3 className='text-sm my-1 text-center font-light'>{title}</h3>
        </div>
      </div>
    </>
  );
};

const DeliveryCategoryCard = (props) => {
  return (
    <>
      <DeliverySmcards {...props}/>
      <DeliveryLgcards {...props} />
    
    </>
  );
};

export default DeliveryCategoryCard;
