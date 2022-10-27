import axios from 'axios'

// Redux Types
import { SIGN_IN, SIGN_UP, SIGN_OUT, GOOGLE_AUTH } from './auth.type';

export const signIn = (userData) => async(dispatch) => {
  try {
    const User = await axios({
      method: "POST",
      url:"http://localhost:4000/auth/signin",
      data : {credentials : userData}
    })
    
    localStorage.setItem(
      "zomatoUser", JSON.stringify({token : User.data.token })
    )
    
    // window.location.reload()
    
    return dispatch({ type : SIGN_IN , payload : User.data })
  } catch (error) {
    return dispatch({type : "Error", payload: error})
  }
}