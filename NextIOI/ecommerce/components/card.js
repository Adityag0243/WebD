'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

function Card({id_, imgSrc, itemName, itemPrice  = 30, desc, itemRating}) {
  const router = useRouter();
  return (
    <div 
      className="rounded-xl overflow-hidden shadow-xl hover:scale-102 transition-transform duration-400"
      onClick = {()=>{router.push(`/product/${id_}`)}}
      >
        <div
          className='flex items-center justify-center '
        >
          <Image
            src = {imgSrc}
            width = {260}
            height = {260}
            alt = {"test"}
            // className=''
          />
        </div>
        <div className="px-4 py-4">
          <div className="font-bold text-xl mb-1">{itemName}</div>
          <div className = 'flex justify-between  bg-gray-100 rounded-lg'>
            <p className = 'text-xl font-bold text-gray-700 p-2' >₹ {itemPrice} </p>
            <p className = 'text-md text-amber-600 bg-amber-200 p-2 m-1 rounded-xl font-bold' >{itemRating} ⭐</p>
          </div>
          <p className="text-gray-700 text-base">
            {desc}
          </p>
        </div>
    </div>
  )
}

export default Card