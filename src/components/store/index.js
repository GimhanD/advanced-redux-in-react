import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cart-slice";
import { uiReducer } from "./ui-slice";



const store = configureStore({
    reducer: {uiSlice:  uiReducer, cartSlice: cartReducer  }
});

export default store;