import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],           // product list 
    selectedProduct: null,  // product details
    filters: {
        rating: 0,
    },
    search : "",
    loading: false,
    error: null,
};


const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
    setProducts(state, action) {
        state.products = action.payload;
    },

    setSelectedProduct(state, action) {
        state.selectedProduct = action.payload;
    },

    setRating(state, action) {
        state.filters.rating = action.payload;
    },

    setSearch(state, action){
        state.search = action.payload;
    },

    setLoading(state, action) {
        state.loading = action.payload;
    },

    setError(state, action) {
        state.error = action.payload;
    },

    resetFilters(state) {
        state.filters = initialState.filters;
        state.search = initialState.search;
    },
    },
});

export const {
    setProducts,
    setSelectedProduct,
    setRating,
    setLoading,
    setError,
    resetFilters,
} = productSlice.actions;

export default productSlice.reducer;
