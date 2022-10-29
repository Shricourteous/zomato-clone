import { combineReducers } from "redux";

import auth from "./auth/auth.reducer"
import user from './User/user.reducer'

// reducer / store unit
const rootReducer = combineReducers({
  auth,
  user
})

export default rootReducer