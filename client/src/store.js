import {
  getAllProductsReducer,
  getProductByIdReducer,
  deleteProductReducer,
  addProductReducer,
  updateProductReducer
} from "./reducers/productReducer";
import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { cartReducer } from "../src/reducers/cartReducer";
import {
  registerNewUserReducer,
  loginReducer,
  updateReducer,
  getAllUsersReducer,deleteUserReducer
} from "../src/reducers/userReducer";
import {
  getOrdersByUserIdReducer,
  placeOrderReducer,
  getOrderByIdReducer,
  getAllOrdersReducer
} from "../src/reducers/orderReducer";
import { addProductReviewReducer } from "./reducers/productReducer";

const finalReducer = combineReducers({
  getAllProductsReducer: getAllProductsReducer,
  getProductByIdReducer: getProductByIdReducer,
  cartReducer: cartReducer,
  registerNewUserReducer: registerNewUserReducer,
  loginReducer: loginReducer,
  placeOrderReducer: placeOrderReducer,
  getOrdersByUserIdReducer: getOrdersByUserIdReducer,
  getOrderByIdReducer: getOrderByIdReducer,
  addProductReviewReducer: addProductReviewReducer,
  updateReducer:updateReducer,
  getAllUsersReducer :   getAllUsersReducer,
  deleteUserReducer:deleteUserReducer,
  deleteProductReducer:deleteProductReducer,
  addProductReducer : addProductReducer,
  getAllOrdersReducer:getAllOrdersReducer,
  updateProductReducer:updateProductReducer,
  


});
const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;
const initialState = {
  cartReducer: { cartItems: cartItems },
  loginReducer: { currentUser: currentUser },
};
const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});
const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);

export default store;
