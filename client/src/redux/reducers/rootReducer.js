import { combineReducers } from "redux";

// reducers
import auth from "./auth/auth.reducer"
import user from './User/user.reducer'
import restaurant from './restaurant/restaurant.reducer'
import image  from './image/image.reducer'
import review from "./review/review.reducer";
import food from "./food/food.reducer";
import cart from './cart/cart.reducer'


// reducer / store unit
const rootReducer = combineReducers({
  auth,
  user,
  restaurant, 
  image,
  review,
  food,
  cart
})

export default rootReducer;