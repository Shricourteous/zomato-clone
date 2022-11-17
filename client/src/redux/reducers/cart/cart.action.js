import {
  GET_CART,
  ADD_TO_CART,
  DELETE_FROM_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
} from "./cart.type";

// NO NEED OF AXIOS since we dont fetch or store it to the DB

export const getCart = ()=> async(dispatch)=>{
  try {
    let cartData  = {
      cart : []
    } 
    if (localStorage.zomatoCart){
      // localstorage Store the data as string format...
      // when we get back to code we need it as JSON format (JSON.parse)
      const {cart} = JSON.parse(localStorage.getItem("zomatoCart"))
      cartData.cart = cart
    }
    return dispatch({type : GET_CART, payload: cartData.cart})

  } catch (error) {
    dispatch({type :"ERROR @ CART" , payload : error})
  }
}

export const addToCart = (newFood)=> async(dispatch)=>{
  try {
    let cartData  = {
      cart : []
    } 
    if (localStorage.zomatoCart){
      // localstorage Store the data as string format...
      // when we get back to code we need it as JSON format (JSON.parse)
      const {cart} = JSON.parse(localStorage.getItem("zomatoCart"))
      cartData.cart = cart
    }
    // add new food to cart & Update it in localstorage
    cartData.cart.push(newFood);

    localStorage.setItem("zomatoCart", JSON.stringify({ cart : cartData.cart }))

    return dispatch({type : ADD_TO_CART, payload: cartData.cart})

  } catch (error) {
    dispatch({type :"ERROR @ CART" , payload : error})
  }
}


export const deleteCart = (foodId)=> async(dispatch)=>{
  try {
    let cartData  = {
      cart : []
    } 
    if (localStorage.zomatoCart){
      // localstorage Store the data as string format...
      // when we get back to code we need it as JSON format (JSON.parse)
      const {cart} = JSON.parse(localStorage.getItem("zomatoCart"))
      cartData.cart = cart
    }

    if (!cartData.cart.length){
      alert("cart is empty");
      return dispatch({type : "Error (empty)", payload: "cart is empty"})
    }
    
    cartData.cart = cartData.cart.filter(({_id})=> _id!== foodId)

    localStorage.setItem("zomatoCart", JSON.stringify({ cart : cartData.cart }))

    return dispatch({type : DELETE_FROM_CART, payload: cartData.cart})

  } catch (error) {
    dispatch({type :"ERROR @ CART" , payload : error})
  }
}


export const increamentQuantity = (foodId)=> async(dispatch)=>{
  try {
    let cartData  = {
      cart : []
    } 
    if (localStorage.zomatoCart){
      // localstorage Store the data as string format...
      // when we get back to code we need it as JSON format (JSON.parse)
      const {cart} = JSON.parse(localStorage.getItem("zomatoCart"))
      cartData.cart = cart
    }  
    cartData.cart = cartData.cart.map((food)=> 
      food._id === foodId ? {
        ...food,
        totalPrice : food.price * (food.quantity + 1),
        quantity : food.quantity +1,
      } : food
    )

    localStorage.setItem("zomatoCart", JSON.stringify({ cart : cartData.cart }))

    return dispatch({type : INCREMENT_QUANTITY, payload: cartData.cart})

  } catch (error) {
    dispatch({type :"ERROR @ CART" , payload : error})
  }
}

export const decrementQuantity = (foodId)=> async(dispatch)=>{
  try {
    let cartData  = {
      cart : []
    } 
    if (localStorage.zomatoCart){
      // localstorage Store the data as string format...
      // when we get back to code we need it as JSON format (JSON.parse)
      const {cart} = JSON.parse(localStorage.getItem("zomatoCart"))
      cartData.cart = cart
    }  
    cartData.cart = cartData.cart.map((food)=> 
      food._id === foodId ? {
        ...food,
        totalPrice : food.price * (food.quantity - 1),
        quantity : food.quantity -1,
      } : food
    )

    localStorage.setItem("zomatoCart", JSON.stringify({ cart : cartData.cart }))

    return dispatch({type : DECREMENT_QUANTITY, payload: cartData.cart})

  } catch (error) {
    dispatch({type :"ERROR @ CART" , payload : error})
  }
}


// export const getCart = ()=> async(dispatch)=>{
//   try {
    
//   } catch (error) {
//     dispatch({type :"ERROR @ CART" , payload : error})
//   }
// }