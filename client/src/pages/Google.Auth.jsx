import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


import {useDispatch } from 'react-redux'
import { googleAuth } from '../redux/reducers/auth/auth.action'

const Google = () => {
  const {token} = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
    if(token) { 
      dispatch(googleAuth(token)).then(()=> navigate('/delivery'))
    }    
  }, [token])

  return (


    <div>Loading.. Please wait </div>
  )
}

export default Google;