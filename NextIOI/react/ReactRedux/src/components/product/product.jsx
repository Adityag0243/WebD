import React from 'react'
import { useState } from 'react'
import Cart from '../cart'

function Product({product}) {
return (
<>
    <div>
        {
            product.map((item, idx)=>{
                <Cart
                    key = {idx}
                    
                />

            })
        }
    </div>
</>
)
}

export default Product