import Card from "@/components/card";

function Products({ prod }) {
  return (
    <>

      <div className='grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 m-4 gap-6'>
        {prod.map((item, idx) => (
          <Card
            key={idx}
            id_={item.id}
            imgSrc={item.image}
            itemName={item.name}
            itemPrice={item.price}
            itemRating={4}
            desc={item.description}
          />
        ))}
      </div>
    </>
  );
}

export default Products;
