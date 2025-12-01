import Image from 'next/image'

function Card({imgSrc, itemName, itemPrice  = 30, desc}) {
  return (
    <div class="max-w-sm rounded-xl overflow-hidden shadow-lg">

        <Image
          src = {imgSrc}
          width = {280}
          height = {200}
          alt = {"test"}
        />

        <div class="px-4 py-4">
          <div class="font-bold text-xl mb-1">{itemName}</div>
          <p class = 'text-2xl font-bold text-gray-600' >₹ {itemPrice} </p>
          <p class="text-gray-700 text-base">
            {desc}
          </p>
        </div>
    </div>
  )
}

export default Card