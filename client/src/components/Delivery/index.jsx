import React,{useState} from 'react';
//components
import DeliveryCrousel from './DeliveryCarousel';
// import RestaurantCards from './RestaurantCards';

const Delivery = () => {
//   const [restaurantList, setRestaurantList] = useState([]);
  return (
    <>
      <DeliveryCrousel />
      <h1 className='text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold'>
        Delivery Restaiurant in TamilNadu CBE
      </h1>
      <div className='flex justify-between flex-wrap mt-5'>
        {/* {restaurantList.map((restaurant) => (
        <RestaurantCards {...restaurant} key={restaurant._id} />
      ))} */}
      </div>
    </>
  );
};

export default Delivery;
