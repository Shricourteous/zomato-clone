import { combineReducers } from "redux";

import auth from "./auth/auth.reducer"

// reducer / store unit
const rootReducer = combineReducers({
  auth,
})

export default rootReducer