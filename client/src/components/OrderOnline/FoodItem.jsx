import React, { useState , useEffect} from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import ReactStars from 'react-rating-stars-component';


// redux
import { useDispatch , useSelector} from 'react-redux';
import { getImage } from '../../redux/reducers/image/image.action';
import { getFood } from '../../redux/reducers/food/food.action';
import { addToCart } from '../../redux/reducers/cart/cart.action';



const FoodItem = (props) => {
  const dispatch = useDispatch();
  const [foodItem, setfoodItem] = useState();
  
  const cart = useSelector((globalState) => globalState.cart.cart)

  useEffect(()=>{
    dispatch(getFood(props._id)).then((data)=>{
      setfoodItem(data.payload.foods);
      // console.log(data.payload)
      dispatch(getImage(data.payload.foods.photos)).then((data)=>{
        const {images} = data.payload;
        // console.log(images[0].location)
        images.length && setfoodItem((prev)=> ({...prev, image: images[0].location}))
      })
      return data.payload.foods
    }).then((data)=>{
      cart.forEach(element => {
        if (element._id===data._id){
          setfoodItem((prev)=>({...prev, isAddedToCart: true}))
        }
      });
    })
  }, [cart])

  const addFoodToCart = ()=> {
    dispatch(addToCart({...foodItem, quantity : 1, totalPrice: foodItem.price}));
    setfoodItem((prev)=>({...prev, isAddedToCart : true}) )
  }

  return (
    <>
      <div className='flex item-start gap-2'>
        {foodItem?.name && (
          <div className='flex w-full items-start gap-4 p-1 '>
            {foodItem?.image && (
              <div className='w-1/3 h-24 md:h-28 md:w-28 lg:h-36 lg:w-36 rounded-md overflow-hidden'>
                <img
                  src={foodItem?.image}
                  alt='Food ITems'
                  className='w-full h-full object-cover object-center'
                />
              </div>
            )}

            <div className='w-3/4 md:w-7/12 flex flex-col gap-1'>
              <div className='flex items-start justify-between'>
                <h3 className='text-xl font-semibold'>{foodItem?.name}</h3>
              </div>
              <ReactStars
                count={5}
                classNames={'block md:hidden'}
                value={foodItem?.rating}
                edit={false}
              />
              <h5>₹ {foodItem?.price}</h5>
              <p>{foodItem?.description}</p>
              <button className='md:hidden justify-between flex items-center text-zomato-400 gap-2 bg-zomato-50 border border-zomato-400 px-2 py-1  rounded-lg'>
                <AiOutlinePlus /> Add
              </button>
            </div>
            <div className='hidden md:block w-2/12'>
              <button onClick={addFoodToCart} className='flex items-center text-zomato-400 gap-2 bg-zomato-50 border border-zomato-400 px-2 py-1  rounded-lg' disabled= {foodItem?.isAddedToCart }>
                {
                  foodItem.isAddedToCart ? ("Added") : (<><AiOutlinePlus /> Add</>) 
                }
                
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FoodItem;
