// A reducer ( function that triggers when an action is dispatched ) takes in two parameters

import { FETCH_PRODUCTS } from "../types";

// an action and a state (uses default parameters)
export const productsReducer = (state={},action) => {
   // Checking which type of  action we're trying to perform and based on it run some code;
   // E.g  switch(action.type) { case "FETCH_PRODUCTS" : console.log('Fetched products' )}
   switch(action.type)
  {

    // if the action is FETCH_PRODUCTS return the content of request response from the server 
   case FETCH_PRODUCTS:
     // whenever an action is dispatched data gets updated in redux store
       return {items:action.payload}
     // otherwise return state (empty object)
       default: 
    return state; 
  // Whenever we get new data this will be updated in the redux store;
    }

}