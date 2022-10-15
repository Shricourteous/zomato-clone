import React from 'react'
import Navbar from '../components/Navbar'
// import FootTab from '../components/FootTab';
import HomeLayout from '../layouts/Home.layout'
import { useParams } from 'react-router-dom'

// Import table
import Dining from '../components/Dining'
import NightLife from '../components/NightLife'
import Nutrition from '../components/Nutrition'
import Delivery from '../components/Delivery'

const Home = () => {
  const {type} = useParams();

  return (
    <>
      <div className='my-5'>
        {type === 'delivery' && <Delivery/>}
        {type === 'dining' && <Dining/>}
        {type === 'nutri' && <Nutrition/>}
        {type === 'night' && <NightLife/>}
      </div>

    </>
  )
}

export default HomeLayout(Home);