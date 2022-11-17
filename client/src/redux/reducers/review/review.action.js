import axios from 'axios'
import { GET_REVIEW, POST_REVIEW } from "./review.type"


export const getReview = (resId) => async (dispatch) =>{
  try {
    const reviewlist = await axios({
      method: "GET",
      url : `${process.env.REACT_APP_CLIENT_URL}review/${resId}`
    })
    // console.log(`Review list --==========> ${reviewlist}`, reviewlist.data.reviews)
    //returning the data to caller as payload data
    return dispatch({type : GET_REVIEW, payload: reviewlist.data})


  } catch (error) {
    return dispatch({type : "Error GetReview Reducer", payload : error})
  }
}

export const postReview = (reviewData) => async(dispatch) =>{
  try {
    await axios({
      method: "POST",
      url : `${process.env.REACT_APP_CLIENT_URL}review/new`,
      data : {reviewData : {...reviewData}}
      
    })
    dispatch({type : POST_REVIEW, payload: reviewData})

  } catch (error) {
    dispatch({type : "Error POST Review Reducer", payload : error})
  }
}
