'use-client'

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
async function getProductdata(id){
  const res  = await fetch(`https://dummyjson.com/products/${id}`)
  const prod = await res.json();
  return prod;
}

export async function generateMetadata({params}){
  const {productId} = await params;
  const prod = await getProductdata(productId);
  return {
    title: `${prod.title}`,
    description:`${prod.description}`,
    openGraph:{
      title:`${prod.title} open graph wala`,
      description : `${prod.description} op in the house`,
      images : [`${prod.thumbnail}` || `${prod.images[0]}`]
    },
    twitter:{
      title:`${prod.title}`,
      card:""
    }
  }
}


async function ProductId({params}) {
    const {productId} = await params;
    const prod = await getProductdata(productId);
    if(prod.hasOwnProperty('message')){
      notFound()
    }
  return (
    <>
      <Card2
        imgSrc = {prod.images[0]}
        itemName = {prod.title}
        desc = {prod.description}
        // onClick = {handleOnclick} 
      />
    
    </>
  )
}

export default ProductId