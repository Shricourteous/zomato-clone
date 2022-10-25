import React from 'react';
import classnames from 'classnames';
import {Link, useParams} from 'react-router-dom'


const MenuCategory = (props) => {
  
  const {id} = useParams();
  console.log("props:  \n", props)
  return (
    <>
      <a
        className={classnames('px-2 py-1', {
          'text-zomato-400 bg-zomato-50 border-r-4 border-zomato-400':
            props.isActive,
            
          })}
          onClick={props.onClickHandler}
          href= {`/restaurant/${id}/order-online/#${props.target}`}
          id={props.name}           
          >
        <button>
          {props.name}({props.items.length})
        </button>
      </a>
    </>
  );
};

export default MenuCategory;
