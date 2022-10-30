import React, {useEffect} from 'react'
import HomeLayout from '../layouts/Home.layout'
import { useParams } from 'react-router-dom'

// Import componenets
import Dining from '../components/Dining'
import NightLife from '../components/NightLife'
import Nutrition from '../components/Nutrition'
import Delivery from '../components/Delivery'


// Redux
import { useDispatch } from 'react-redux'
import {getRestaurant} from "../redux/reducers/restaurant/restaurant.action"


const Home = () => {
  const {type} = useParams();

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getRestaurant())
  }, [])

  return (
    <>
      <div className='my-5 mb-20 lg:mb-0 md:mb-10'>
        {type === 'delivery' && <Delivery/>}
        {type === 'dining' && <Dining/>}
        {type === 'nutri' && <Nutrition/>}
        {type === 'night' && <NightLife/>}
      </div>

    </>
  )
}

export default HomeLayout(Home);