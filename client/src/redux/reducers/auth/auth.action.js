import axios from 'axios'

// Redux Types
import { SIGN_IN, SIGN_UP, SIGN_OUT, GOOGLE_AUTH } from './auth.type';

export const sigIn = (userData) => async(dispatch) => {
  try {
    const User = await axios({
      url:"http://localhost:4000/auth/signin",
      method: "POST",
      data : {credentails : userData}
    })
    
    localStorage.setItem(
      "Zomato App", JSON.stringify({tokens : User.data.tokens})
    )
    
    window.location.reload()
    
    return dispatch({type : SIGN_IN, payload : User.data})
  } catch (error) {
    return dispatch({type : "Error--> Auth Dispatch action", payload: error})
  }
}