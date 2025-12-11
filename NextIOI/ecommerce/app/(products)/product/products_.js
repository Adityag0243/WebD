

// "use client";


import Card from "@/components/card";
// import SearchBar from "./search";

function Products({ prod }) {
  return (
    <>
      
      <div className = 'grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 m-4 gap-6'>
        {prod.map((item, idx) => (
          <Card 
            key={idx}
            id_ = {item.id}
            imgSrc = {item.images[0]}
            itemName = {item.title}
            itemPrice={item.price}
            itemRating={item.rating}
            desc = {item.description}
        />
        ))}
      </div>
    </>
  );
}

export default Products;
