import axios from "axios"
// redux Types
import {GET_IMAGE} from './image.type'

export const getImage = (_id) => async (dispatch) =>{
  try {
    const image = await axios({
      method : 'GET',
      url : `http://localhost:4000/image/${_id}`

    })
    return dispatch({type : GET_IMAGE , payload : image.data.image})
  } catch (error) {
    return dispatch({type : "Error Image Action Reducer", payload : error})
  }
}