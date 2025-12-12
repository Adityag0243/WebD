import Products from "./products_";
import Select from "./select";


export function generateMetadata(){
  return {
    title:"Product Page",
    description:"This is the product page"
  }
}

async function DataLoader({ searchParams }) {
  const resolvedSearchParams = await searchParams;

  const rating = Number(resolvedSearchParams?.rating ?? 0);
  const search = resolvedSearchParams?.search ?? "";


  const res = await fetch("https://dummyjson.com/products");
  const prod = await res.json();

  let data = rating ? prod.products.filter((p) => p.rating >= rating) : prod.products;

  if (search) {
    data = data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <>
      <div className = 'text-3xl text-white text-center m-2 bg-blue-950 p-1 rounded-xl '>All Products</div>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 " >
          <Select rating = {rating} val = {search}/>
      </div>
      <Products
        prod={data}
      />
    </>
  );
}

export default DataLoader;


