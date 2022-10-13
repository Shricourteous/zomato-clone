import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { RiShoppingBag3Line } from "react-icons/ri";
import { IoFastFoodOutline, IoNutritionOutline } from "react-icons/io5";
import { BiDrink } from "react-icons/bi";
import classnames from "classnames";

const MobileTab = () => {
  const [allTypes] = useState([
    {
      id: "delivery",
      icon: <RiShoppingBag3Line />,
      name: "Delivery",
    },
    {
      id: "dining",
      icon: <IoFastFoodOutline />,
      name: "Dining",
    },
    {
      id: "night",
      icon: <BiDrink />,
      name: "Nightlife",
    },
    {
      id: "nutri",
      icon: <IoNutritionOutline />,
      name: "Nutrition",
    },
  ]);

  const { type } = useParams();

  return (
    <>
      <div className= "lg:hidden flex shadow-lg fixed bottom-0 z-10 w-full items-center justify-between md:justify-evenly text-gray-500 border">
        {allTypes.map((eachItem) => (
          <Link key={eachItem.id} to={`/${eachItem.id}`} className="w-1/4">
            <div
              className={
                type === eachItem.id
                  ? "flex items-center text-center relative flex-col text-xl text-zomato-400"
                  : "flex text-center flex-col items-center p-3 text-xl"
              }
            >
                <div className= {type === eachItem.id 
                ? "w-full h-full border-t-2 border-zomato-400 pt-3 flex flex-col items-center"
                : "flex flex-col items-center pt-3"}>
                    {eachItem.icon}
                </div>
                <h5 className="text-sm pb-3">{eachItem.name}</h5>
             </div>
          </Link>
        ))}
      </div>
    </>
  );
};

const FoodTab = () => {
  return <div>
    <MobileTab/>
  </div>;
};

export default FoodTab;
