import {
  GET_CART,
  UPDATE_CART,
  ADD_TO_CART,
  DELETE_FROM_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
} from "./cart.type";


const InitialState = {
  cart : []
}

const CartReducer = (state=InitialState, action)=> {
  switch (action.type) {
    case GET_CART: 
      return {
        ...state,
        cart : action.payload
      }
    case UPDATE_CART: 
      return {
        ...state,
        cart : action.payload
      }
    case ADD_TO_CART: 
      return {
        ...state,
        cart : action.payload
      }
    case DELETE_FROM_CART: 
      return {
        ...state,
        cart : action.payload
      }
    case INCREMENT_QUANTITY: 
      return {
        ...state,
        cart : action.payload
      }
    case DECREMENT_QUANTITY: 
      return {
        ...state,
        cart : action.payload
      }
      
  
    default:
      return {
        ...state
      }
  }
}


export default CartReducer;