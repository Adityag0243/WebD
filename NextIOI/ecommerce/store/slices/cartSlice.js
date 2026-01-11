import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartCount : 0
};


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addInCart(state) {
            state.cartCount += 1;
        },
        removeInCart(state) {
            if (state.cartCount > 0) {
                state.cartCount -= 1;
            }
        },
    },
});

export const {
    addInCart,
    removeInCart
} = cartSlice.actions;

export default cartSlice.reducer;
