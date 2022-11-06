import React,{useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


// Components
import MenuCollection from './MenuCollection'
import { getImage } from '../../redux/reducers/image/image.action';

const Menu = () => {

  const [menu, setMenu] = useState([

/****************************STATIC CODE************ */
    // 'https://b.zmtcdn.com/data/menus/931/931/d40e86a957d1ed6e6fabe5a67a161904.jpg',
    // 'https://b.zmtcdn.com/data/menus/931/931/36f8a3b9e5dbf6435f903c9a8745bcc8.jpg',
    // 'https://b.zmtcdn.com/data/menus/931/931/8d6623791860b054953b6c2c14d61bcb.jpg',
    // 'https://b.zmtcdn.com/data/menus/931/931/6d462a04051c0eabb0067149aa84cc64.jpg',

  
  ]);

  const dispatch = useDispatch();
  const  reduxState = useSelector((globalState)=> globalState.restaurant.selectedRestaurant.restaurant)


  useEffect(()=>{

    console.log("====================USEEEFFECT=================")
    if(reduxState){
      dispatch(getImage(reduxState[0]?.menuImages)).then((data)=>{
        const images = []
        data.payload.images.map(({location}) => images.push(location))
        console.log("Images: ", images)
        setMenu(images);
      })
    }
  },[reduxState])


  return (
    <div className='flex flex-wrap gap-3'>
      <MenuCollection 
        menuTitle='Menu'
        page={menu.length}
        image={menu}
      />
    </div>
  )
}

export default Menu