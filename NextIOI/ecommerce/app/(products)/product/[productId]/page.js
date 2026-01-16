'use-client'

import Image from "next/image";
import Card2 from '@/components/card2'
import Link from "next/link";
import { notFound } from "next/navigation";
import axios from "axios";

// export async function generateStaticParams() {
//   const res = await axios.get("http://localhost:3000/api/products");
//   const prod = await res.data;
//   const products = prod.products;

//   return products.map((item) => ({
//     productId: item.id.toString()
//   }))
// }

async function getProductdata(id) {
  const res = await axios.get(`http://localhost:3000/api/products/${id}`)
  const prod = await res.data;
  return prod[0];
}

export async function generateMetadata({ params }) {
  const { productId } = await params;
  const prod = await getProductdata(productId);
  return {
    title: `${prod.name}`,
    description: `${prod.description}`,
    openGraph: {
      title: `${prod.name} open graph wala`,
      description: `${prod.description} op in the house`,
      images: [`${prod.image}`]
    },
    twitter: {
      title: `${prod.name}`,
      card: ""
    }
  }
}


async function ProductId({ params }) {
  const { productId } = await params;
  const prod = await getProductdata(productId);
  if (prod.hasOwnProperty('message')) {
    notFound()
  }
  return (
    <>
      <Card2
        imgSrc={prod.image}
        itemName={prod.name}
        desc={prod.description}
      // onClick = {handleOnclick} 
      />

    </>
  )
}

export default ProductId