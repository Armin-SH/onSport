import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ShopReducer from "./app/Store/reducer/Shop";
import AppNavigator from "./app/Navigator/AppNavigator"
import ReduxThunk from "redux-thunk";
import authReducer from "./app/Store/reducer/auth"
import cartreducer from "./app/Store/reducer/cart";
const RootReducer = combineReducers({
  Shop: ShopReducer,
  auth: authReducer,
  cart: cartreducer,
});
const Reducer = createStore(RootReducer, applyMiddleware(ReduxThunk));


export default function App() {

  return (
      <Provider store={Reducer}>
        <AppNavigator />
      </Provider>
  );
}
