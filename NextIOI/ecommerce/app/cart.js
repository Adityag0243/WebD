'use client'
import {useSelector} from 'react-redux'

function Cart() {
    const CartCount = useSelector((state) => state.cart.cartCount)
    return (
        <>{`Carts ${CartCount}`}</>
    )
}

export default Cart