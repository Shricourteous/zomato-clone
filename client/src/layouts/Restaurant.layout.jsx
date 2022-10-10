import React from 'react'
// import {TiStarOutline } from 'react-icons/ti'
// import {RiDirectionLine, RiShareForwardLine} from 'react-icons/ri'
// import {BiBookmarkPlus} from 'react-icons/bi'


// Compinents
// import Navbar from '../components/Navbar';
// import ImageGrid from '../components/ImageGrid';
// import InfoButton from '../components/Restaurant/InfoButton';
// import RestaurantInfo from '../components/Restaurant/RestaurantInfo';
// import Tabs from '../components/Restaurant/Tabs';
// import CartContainer from '../components/Restaurant/CartContainer';



const RestaurantLayout = (Components)=> ({...props}) => {
  return (
    <>
      <Components {...props}/>
      {/* <Navbar/> */}
      {/* <div className='container mx-auto px-4 mt-8 lg:px-20 pb-20'> */}
        {/* <ImageGrid image={ } /> */}
        {/* <RestaurantInfo name='' restaurantRating='' deliveryRating='' cuisine='' address='' />
        <div className='my-4 flex flex-wrap gap-3 mx-auto'>
          <InfoButton isActive='true' >
            Add Review
          </InfoButton>
          <RiDirectionLine>
            Direction
          </RiDirectionLine>
          <BiBookmarkPlus>
            Bookmark
          </BiBookmarkPlus>
          <RiShareForwardLine>
            Share
          </RiShareForwardLine>
        </div>
        <div className='my-10'>
          <Tabs/>
        </div>
        <Components {...props}/>
      </div>
      <CartContainer/> */}
    </>
  )
}

export default RestaurantLayout;