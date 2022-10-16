import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation} from 'swiper'
import "swiper/css";
import "swiper/css/navigation";
import DeliveryCategoryCard from './DeliveryCategoryCard'


const DeliveryCarousel = () => {
  const categories = [
    {
      image: "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
      title : "Biriyani"
    },
    {
      image: "https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
      title : "Paratha"
    },
    {
      image: "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
      title : "Chicken"
    },
    {
      image: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
      title : "Pizza" 
    },
    {
      image: "https://b.zmtcdn.com/data/dish_images/8187d3223ac2cc42cc24f723c92877511634805403.png",
      title : "Shake" 
    }, 
    {
      image: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
      title : "Burger" 
    },{
      image: "https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png",
      title : "FriedRice" 
    },{
      image: "https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png",
      title : "Noodles" 
    },{
      image: "https://b.zmtcdn.com/data/o2_assets/e0e1a5276a11fc69a8884b63d48569821632716606.png",
      title : "Omlette" 
    },{
      image: "https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png",
      title : "Sandwich" 
    },{
      image: "https://b.zmtcdn.com/data/o2_assets/fee832f6c837b40004750fb3185da6791632716576.png",
      title : "Pongal" 
    },
  ]

  const slideConfig = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
    modules: [Navigation],
    className: "mySwiper",
    navigation: true,
  };

  return (
    <>
      <h1 className='text-xl mt-4 mb-5 md:mt-8 md:text-3xl md:font-semibold'>      
        Inspiration for your First Order!!
      </h1>
      <div className='lg:hidden grid gap-3 grid-cols-3 md:grid-cols-4 justify-center'>
        {categories.map((food)=>(
          <DeliveryCategoryCard {...food}/>
        ))}
      </div>
      <div className='hidden lg:block'>
          <Swiper {...slideConfig}>
            {categories.map((food)=>(
              <SwiperSlide>
                <DeliveryCategoryCard {...food}/>
              </SwiperSlide>
            ))}
          </Swiper>
      </div>
    </>
  )
}

export default DeliveryCarousel












