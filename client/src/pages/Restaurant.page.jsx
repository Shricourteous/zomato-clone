import React from 'react'
import {Outlet} from 'react-router-dom'

const Restaurant = () => {
  return (
    <>
      
      <h2>Restaurant</h2>
      <Outlet/>
    </>
  )
}

export default Restaurant;