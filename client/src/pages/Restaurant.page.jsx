import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Restaurant = () => {
  const {id} = useParams();
  const {pathname} = useLocation();

  if( `/restaurant/${id}` === pathname){
    return <Navigate to={`/restaurant/${id}/overview`}/>
  }
  
  return (
    <>
      <Outlet/>
    </>
  )
}

export default Restaurant;