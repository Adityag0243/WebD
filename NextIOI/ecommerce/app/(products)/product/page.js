import Card from "@/components/card";
async function Products() {
    const res  = await fetch('https://dummyjson.com/products')
    const prod = await res.json();
    console.log("prod:  ",prod);
    
  return (
    <>
      <div className = 'text-3xl text-black text-center m-2 bg-gray-100 p-2 rounded-xl '>All Products</div>
      <div className = 'grid grid-cols-3 sm:grid-cols-1 md:grid-cols-3 m-6 p-2 gap-6'>
        {
          prod.products.map( (item, idx)=>{
            return(
              <Card 
                key={idx}
                imgSrc = {item.images[0]}
                itemName = {item.title}
                itemPrice={item.price}
                desc = {item.description}
              />
            )
          })
        }
      </div>
    </>
  )
}

export default Products