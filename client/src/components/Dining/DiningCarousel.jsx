import React, {useState} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation} from 'swiper'
import "swiper/css";
import "swiper/css/navigation";

// Compnents
import PictureCarouselCard from "../PictureCarouselCard"

const DiningCarousel = () => {

  const [dining] = useState([
    {
      image : "https://b.zmtcdn.com/data/collections/4c8e5746cdee9c932ebc99ae999520cf_1665492991.jpg",
      title : "Romantic Dining",
      places : "8 Places"
    },    {
      image : "	https://b.zmtcdn.com/data/collections/f6d732dc7432ad6e80a309cce6f0745a_1665640262.jpg",
      title : "The Great Buffets",
      places : "7 Places"
    },    {
      image : "	https://b.zmtcdn.com/data/collections/a42c79d7300c0ec4e23e4dedfd5826bf_1665493873.jpg",
      title : "Buzzing NightLife",
      places : "8 Places"
    },      {
      image:
        "https://b.zmtcdn.com/data/collections/51979569f85f4579e15336825f446188_1660738438.jpg",
      title: "Eid-e-Milad Specials",
      places: "9 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/collections/d9eea3ef785def3a1d4e19c89bf19b11_1660816040.jpg",
      title: "Eid-e-Milad Specials",
      places: "9 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/collections/ef4da4077aae068ea1e4410eefb5aec5_1660735784.jpg",
      title: "Eid-e-Milad Specials",
      places: "9 Places",
    },

  ])

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
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
    },
    modules: [Navigation],
    className: "diningSwiper",
    navigation: true,
  };

  return (
    <div className=''>
          <Swiper {...slideConfig}>
            {dining.map((item, index)=>(
              <SwiperSlide key={index}>
                <PictureCarouselCard  {...item}/>
              </SwiperSlide>
            ))}
          </Swiper>
    </div>
  )
}

export default DiningCarousel