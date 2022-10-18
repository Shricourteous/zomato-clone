import React from 'react'
import classnames from 'classnames'
import {useParams, Link, useLocation} from 'react-router-dom'

const Tab = () => {
  const {id} = useParams();

  return (
    <Link to={`/restaurant/${id}/{props.route}`}>
      <div className={classnames('text-gray-500 relative font-semibold',
       {
        "text-zomato-400": props.isActive 
       }
       )}>
        <h3 className='text-lg md:text-xl'>{props.title}</h3>
        </div> 


    </Link>
  )
}

const Tabs = ()=>{
  const location = useLocation();
  const currentPath = location.pathname;

  // const Tab //20m

}

export default Tabs