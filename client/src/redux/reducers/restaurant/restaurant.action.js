import axios from "axios";

// redux types
import {GET_RESTAURANT, GET_SPECIFIC_RESTAURANT} from './restaurant.type'


export const getRestaurant = () => async (dispatch) => {
  try {
    const restaurant_list = await axios({
      method : "GET",
      url : `${process.env.REACT_APP_CLIENT_URL}restaurant?city=NCR`
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
      url : `${process.env.REACT_APP_CLIENT_URL}restaurant/${_id}`
    });
    const restaurant = { restaurant : restaurant_list.data.restaurant[0] }

    console.log("get Spec res :: ======> ", restaurant,)
    return dispatch({type: GET_SPECIFIC_RESTAURANT, payload : restaurant})
    // return dispatch({type: "Error reducer get spc res", payload : "Nothing"})
    
  } catch (error) {
    return dispatch({type: "Error reducer get spc res", payload : error})
  }
}