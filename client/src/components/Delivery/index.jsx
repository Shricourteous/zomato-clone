import React,{useState} from 'react';
//components
import DeliveryCrousel from './DeliveryCarousel';
import RestaurantCards from '../RestaurantCard';

const Delivery = () => {
  const [restaurantList, setRestaurantList] = useState([
    {
      _id: "wjn4239jdk9",
      isPro: true,
      isOff: true,
      name : "Cheeze Toma Pizza",
      restaurantReviewValue : "4.0",
      cuisine : [
        "Mittai",
        "SOuth Indian",
        "Chinese",
        "Japanese",
        "NorthIndian",
        "ChoFoods"
      ],
      averageCost: 459
    },
    {
      _id: "wjn423f9jdk9",
      isPro: true,
      isOff: true,
      name : "Toma Cheeze Pizza",
      restaurantReviewValue : "4.2",
      cuisine : [
        "Mittai",
        "South Indian",
        "Chinese",
        "Japanese",
        "NorthIndian",
        "ChoFoods"
      ],
      averageCost: 459
    },
    {
      _id: "wjn423fe9jdk9",
      isPro: true,
      isOff: true,
      name : "Toma Cheeze Pizza",
      restaurantReviewValue : "4.4",
      cuisine : [
        "Mittai",
        "South Indian",
        "Chinese",
        "Japanese",
        "NorthIndian",
        "ChoFoods"
      ],
      averageCost: 449
    },
  ]);
  return (
    <>
      <DeliveryCrousel />
      <h1 className='text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold'>
        Delivery Restaiurant in TamilNadu CBE
      </h1>
      <div className=' grid grid-cols-1 gap-1 md:gap-2 lg:grid-cols-3 md:grid-cols-2'>
        {restaurantList.map((restaurant) => (
        <RestaurantCards {...restaurant} key={restaurant._id} />
      ))}
      </div>
    </>
  );
};

export default Delivery;
