import Image from 'next/image'
// import styles from '../app/(products)/button.module.css'
import cardstyles from './card.module.css'

import AddToCartButton from './addToCart';

function Card2({ imgSrc, itemName, itemPrice = 30, desc }) {
  return (
    <div className="grid grid-cols-2 rounded-xl overflow-hidden shadow-lg m-5">

      <Image
        src={imgSrc}
        width={700}
        height={700}
        alt={"test"}
        className={`{ ${cardstyles.card} ${cardstyles.card__img} }`}
      />
      <div className="px-4 py-4 m-3">
        <div className={`${cardstyles.card__title}`}>{itemName}</div>
        <p className='text-4xl font-bold text-gray-600 mb-2' >₹ {itemPrice} </p>
        <p className="text-gray-700 text-2xl mb-2">
          {desc}
        </p>
        <AddToCartButton />
        <button
          className='bg-green-600 text-white text-lg p-2 ml-2 rounded-xl'
        >Add to Wishlist</button>
      </div>
    </div>
  )
}

export default Card2