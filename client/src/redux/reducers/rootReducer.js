import { combineReducers } from "redux";

// reducers
import auth from "./auth/auth.reducer"
import user from './User/user.reducer'
import restaurant from './restaurant/restaurant.reducer'
import image  from './image/image.reducer'


// reducer / store unit
const rootReducer = combineReducers({
  auth,
  user,
  restaurant,
  image
})

export default rootReducer