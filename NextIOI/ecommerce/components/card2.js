import Image from "next/image";
import AddToCartButton from "./addToCart";

function Card2({ imgSrc, itemName, itemPrice = 30, desc }) {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden my-6 mx-10">
      {/* Product Image */}
      <div className="md:w-1/2 bg-gray-50 flex items-center justify-center">
        <Image
          src={imgSrc}
          width={700}
          height={700}
          alt={itemName}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Product Details */}
      <div className="md:w-1/2 p-8 flex flex-col justify-between">
        {/* Title & Price */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{itemName}</h2>
          <p className="text-4xl font-extrabold text-green-600 mb-6">
            ₹ {itemPrice}
          </p>

          {/* Description */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-gray-800">Description</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              {desc}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 mt-8">
          <AddToCartButton />
          <button className="bg-green-600 hover:bg-green-700 transition-colors text-white text-lg px-5 py-2 rounded-lg">
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card2;