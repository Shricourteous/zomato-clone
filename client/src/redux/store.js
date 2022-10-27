import { applyMiddleware, createStore  } from "redux"; 
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'


//redux  middlewares
const middlewares = [thunk];
if(process.env.NODE_ENV === 'development'){
  const {logger} = require('redux-logger')
  middlewares.push(logger);

}

// createStore(reducer, {preload}, {middlewares})
// reducer combines chunks altogether
const store = createStore(rootReducer, {}, applyMiddleware(...middlewares))

export default store;