// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import productSilce from './slices/productSlice'
import cartSlice from './slices/cartSlice'
import searchSlice from './slices/searchSlice'

export const store = configureStore({
    reducer: {
        products : productSilce,
        cart : cartSlice,
        search : searchSlice,
    },
});
