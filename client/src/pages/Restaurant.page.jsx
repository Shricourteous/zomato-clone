import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'
import RestaurantLayout from '../layouts/Restaurant.layout'

const Restaurant = () => {
  return (
    <>
      <Navbar/> 
      <h2>Restaurant</h2>
      <Outlet/>
    </>
  )
}

export default RestaurantLayout(Restaurant);