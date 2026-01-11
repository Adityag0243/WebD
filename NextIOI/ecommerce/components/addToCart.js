"use client";

import { useDispatch } from "react-redux";
import { addInCart } from "@/store/slices/cartSlice";
// import styles from '../app/(products)/button.module.css'


export default function AddToCartButton() {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addInCart());
    };

    return (
        <button 
            onClick={handleAddToCart}
            className = 'bg-blue-600 text-white text-lg p-2 rounded-xl'>
        Add to Cart
        </button>
    );
}
