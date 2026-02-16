'use-client'

import Image from "next/image";
import Card2 from '@/components/card2'
import Link from "next/link";
import { notFound } from "next/navigation";
import axios from "axios";
import Card from "@/components/card";

// export async function generateStaticParams() {
//   const res = await axios.get("http://localhost:3000/api/products");
//   const prod = await res.data;
//   const products = prod.products;

//   return products.map((item) => ({
//     productId: item.id.toString()
//   }))
// }

async function getProductdata(id) {
  const res = await axios.get(`http://localhost:3000/api/products/${id}`);
  return res.data; // single product object
}

// export async function generateMetadata({ params }) {
//   const { productId } = await params;
//   const prod = await getProductdata(productId);
//   return {
//     title: `${prod.name}`,
//     description: `${prod.description}`,
//     openGraph: {
//       title: `${prod.name} open graph wala`,
//       description: `${prod.description} op in the house`,
//       images: [`${prod.image}`]
//     },
//     twitter: {
//       title: `${prod.name}`,
//       card: ""
//     }
//   }
// }

// Fetch recommended products
async function getRecommendedProducts() {
  const res = await axios.get("http://localhost:3000/api/products/recommend");
  return res.data.products; // array of prod
}




async function ProductId( { params } ) {

  const { productId } = await params;
  const prod = await getProductdata(productId);
  const recommended = await getRecommendedProducts();
  // console.log("prods,,, ", prod);
  // console.log("rec,,, ", recommended);
  

  
  // if (prod.hasOwnProperty('message')) {
  //   notFound()
  // }
  return (
    <>
      {/* <div>Jai ho...</div> */}
      <Card2
        imgSrc={prod.image}
        itemName={prod.name}
        itemPrice = {prod.price}
        desc={prod.description}
      // onClick = {handleOnclick} 
      />

      <section className="mt-12 mx-12">
        <h3 className="text-2xl font-semibold mb-6 ">Recommended Products</h3>
        <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-6">
          {recommended.map((item, idx) => (
            <Card
              key={idx}
              _id={item._id}
              imgSrc={item.image}
              itemName={item.name}
              itemPrice={item.price}
              itemRating={item.rating ?? 4}
              desc={item.description}
            />
          ))}
        </div>
      </section>

    </>
  )
}

export default ProductId