import Image from "next/image";
import Card from '@/components/card'
async function ProductDetails({prdId, prdName, prdPrice, prdDesc}) {

    // const {productId} = await params;
    // console.log(productId);

    // const res  = await fetch(`https://dummyjson.com/products/${productId}`)
    // const prod = await res.json();
    // // console.log("prod:  ",prod);
    // const handleOnclick = ()=>{
    // }
    
  return (
    <>
      <div class="max-w-sm rounded-xl overflow-hidden shadow-lg">
      
              <Image
                src = {imgSrc}
                width = {400}
                height = {400}
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
    
    </>
  )
}

export default ProductDetails