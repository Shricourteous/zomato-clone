import axios from 'axios';
// redux types
import { GET_USER, AUTH_USER, SELF, CLEAR_USER } from './user.type';

export const getUser = (_id) => async (dispatch) => {
  try {
    const User = await axios({
      method: "GET",
      url : `http://localhost:4000/user/${_id}`    
    })
    return dispatch({type : GET_USER, payload: User.data})
    
  } catch (error) {
    return dispatch({type : "ERROR GET USER", payload: error})
  }
}

export const mySelf = (_id) => async (dispatch) => {
  try {
    const User = await axios({
      method: "GET",
      url: 'http://localhost:4000/user/'
    })
    return dispatch({type : SELF, payload: User.data.user})

  } catch (error) {
    return dispatch({type : "ERROR GET USER", payload: error})
  }
}

export const clearUser = () => async (dispatch) => {
    try {
      
      return dispatch({type : GET_USER, payload: {}  })
  
    } catch (error) {
      return dispatch({type : "ERROR CLEAR USER", payload: error})
    }
}
