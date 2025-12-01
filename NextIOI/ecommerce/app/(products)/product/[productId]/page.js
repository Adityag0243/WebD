import Image from "next/image";
import Card2 from '@/components/card'
async function ProductId({params}) {

    const {productId} = await params;
    console.log(productId);
    
    const res  = await fetch(`https://dummyjson.com/products/${productId}`)
    const prod = await res.json();
    // console.log("prod:  ",prod);

    const handleOnclick = ()=>{

    }
    
  return (
    <>
      <Card2
        imgSrc = {prod.images[0]}
        itemName = {prod.title}
        desc = {prod.description}
        onclick = {handleOnclick}
      />
    
    </>
  )
}

export default ProductId