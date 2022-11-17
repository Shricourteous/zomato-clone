import axios from 'axios'

// Redux Types
import { SIGN_IN, SIGN_UP, SIGN_OUT, GOOGLE_AUTH } from './auth.type';

export const signIn = (userData) => async(dispatch) => {
  try {
    const User = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_CLIENT_URL}auth/signin`,
      data : {credentials : userData}
    })
    
    localStorage.setItem(
      "zomatoUser", JSON.stringify({token : User.data.token })
    )
    axios.defaults.headers.common['Authorization'] = `Bearer ${User.data.token}`;

    // window.location.reload()
    
    return dispatch({ type : SIGN_IN , payload : User.data })
  } catch (error) {
    return dispatch({type : "Error SIGNIN", payload: error})
  }
}

export const signUp = (userData) => async(dispatch) => {
  try {
    const User = await axios({
      method: "POST",
      url:`${process.env.REACT_APP_CLIENT_URL}auth/signup`,
      data : {credentials : userData}
    })
    
    localStorage.setItem(
      "zomatoUser", JSON.stringify({token : User.data.token })
    )
    axios.defaults.headers.common['Authorization'] = `Bearer ${User.data.token}`;
    
    // window.location.reload()
    
    return dispatch({ type : SIGN_UP , payload : User.data })
  } catch (error) {
    return dispatch({type : "Error SIGNUP", payload: error})
  }
}

// delete the store and redirect to main page
export const signOut = () => async (dispatch) =>{
  try {
    localStorage.removeItem('zomatoUser')
    return dispatch({type : SIGN_OUT , payload : {}})

  } catch (error) {
    return dispatch({type : "Error SIGNOUT", payload: error})
  }
}

// save the user DAta from google AUth
export const googleAuth = (token) => async(dispatch) => {
  try {
    localStorage.setItem("zomatoUser", JSON.stringify({ token }));
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;    
 
    return dispatch({type: GOOGLE_AUTH, payload : { token }})
 
  } catch (error) {
    return dispatch({type : "Error" , payload : error})
  }
}