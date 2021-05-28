import { FETCH_PRODUCTS } from "../types"

// BY RUNNING THIS ACTION OUR STATE CHANGES TO A LIST OF PRODUCTS
// THAT WE GET FROM /API/PRODUCTS
export const fetchProducts = () => async(dispatch) => {
   // getting products from server
    const res = await fetch("/api/products")
    // Converting data that comes from /api/products to JSON
    const data = await res.json(); 
    console.log(data);
    // getting res.data and dispatching 
    // it as an action (which will trigger the reducer)
    
    // Dispatching action 
    // which has a type and other fields
    dispatch({
        type:FETCH_PRODUCTS,
        payload:data
    })
}