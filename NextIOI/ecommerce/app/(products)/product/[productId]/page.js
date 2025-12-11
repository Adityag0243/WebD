import Image from "next/image";
import Card2 from '@/components/card2'
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams(){
  const res = await fetch("https://dummyjson.com/products");
  const prod = await res.json();
  const products = prod.products;

  return products.map((item)=>({
    productId : item.id.toString()
  }))
}


async function ProductId({params}) {

    const {productId} = await params;
    console.log(productId);
    
    const res  = await fetch(`https://dummyjson.com/products/${productId}`)
    const prod = await res.json();
    if(prod.hasOwnProperty('message')){
      notFound()
    }
  return (
    <>
      <Card2
        imgSrc = {prod.images[0]}
        itemName = {prod.title}
        desc = {prod.description}
        // onclick = {handleOnclick} 
      />
    
    </>
  )
}

export default ProductId