import { GET_USER, AUTH_USER, SELF, CLEAR_USER } from './user.type';

const intialState = {};

const userReducer = (state = intialState, action)=>{
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
      }
    case SELF:
       return {
         ...state,
         ...action.payload
       }
    case CLEAR_USER:
      return {
        
      };
       
    default:
      return {
        ...state
      }
  }
}

export default userReducer;