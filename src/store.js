import {createStore,applyMiddleware,compose,combineReducers} from 'redux';
// Redux-thunk handles actions like getting data from an API
import thunk from 'redux-thunk';
import {productsReducer} from './reducers/productReducers'
// setting state by default to an empty object
const initialState = {};
// With composeEnhancer we can send the info that we have in our store
// to Chrome and monitor changes
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// creating the store 
const store = createStore(
combineReducers({
    // combineReducers take in all the reducers we have
    products:productsReducer
}),
initialState,
composeEnhancer(applyMiddleware(thunk))

)

export default store;