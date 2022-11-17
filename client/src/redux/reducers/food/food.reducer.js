import { GET_FOOD_LIST } from "./food.type";

const initalState = {
  foodList : [],
};


const foodReducer = (state=initalState, action)=>{
  switch (action.type) {
    case GET_FOOD_LIST:
      return{
        ...state,
        foodList : action.payload
      }
  
    default:
      return {
        ...state
      }
  }
}

export default foodReducer;