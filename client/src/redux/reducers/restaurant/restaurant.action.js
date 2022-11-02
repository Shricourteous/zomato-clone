import axios from "axios";

// redux types
import {GET_RESTAURANT, GET_SPECIFIC_RESTAURANT} from './restaurant.type'


export const getRestaurant = () => async (dispatch) => {
  try {
    const restaurant_list = await axios({
      method : "GET",
      url : "http://localhost:4000/restaurant?city=NCR"
    });
    return dispatch({type: GET_RESTAURANT, payload : restaurant_list.data.restaurants})

  } catch (error) {
    return dispatch({type: "Error reducer get res", payload : error})
  }
}


export const getSpecificRestaurant = (_id) => async (dispatch) => {
  try {
    const restaurant_list = await axios({
      method : "GET",
      url : `http://localhost:4000/restaurant/${_id}`
    });
    return dispatch({type: GET_SPECIFIC_RESTAURANT, payload : restaurant_list.data})
    // console.log(restaurant_list.data)
    // return dispatch({type: "Error reducer get spc res", payload : "Nothing"})
    
  } catch (error) {
    return dispatch({type: "Error reducer get spc res", payload : error})
  }
}