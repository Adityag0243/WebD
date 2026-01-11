import React from 'react'

function Cart({currentImg, brand, name, color = 'red', price = 100}) {
  return (
    <div 
            className="overflow-hidden shadow-md hover:shadow-lg transition border border-slate-200 cursor-pointer"
        >
            <img 
                src={ (currentImg)} 
                alt={`${brand} shoe`} 
                className="aspect-square w-full object-cover bg-gray-100" 
            />
            
            <div className="p-2 pb-0">
                <div className="flex justify-between items-center text-gray-600">
                    <span className="font-semibold">{brand}</span>
                    {/* 4. The button now uses the new handler */}
                    <button aria-label="Add to cart"
                    >
                        <BsPlusSquareFill size={20}/>
                    </button>
                </div>

                <h4 className=" text-black text-left overflow-hidden h-7">{name}</h4>
                <p className="text-slate-500 text-sm text-left mt-1 mb-1 h-5 overflow-hidden">{color}</p>
                
                <p className="mt-1 mb-2 text-black text-left font-medium">{price}/-</p>
            </div>
        </div>
  )
}

export default Cart