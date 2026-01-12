import Products from "./products_";
import Select from "./select";
import axios from "axios";


export function generateMetadata() {
  return {
    title: "Product Page",
    description: "This is the product page"
  }
}

async function DataLoader({ searchParams }) {
  const resolvedSearchParams = await searchParams;

  const rating = Number(resolvedSearchParams?.rating ?? 0);
  const search = resolvedSearchParams?.search ?? "";
  const category = resolvedSearchParams?.category ?? "";


  const res = await axios.get(`http://localhost:3000/api/products?search=${search}&rating=${rating}&category=${category}`);
  let data = await res.data;



  return (
    <>
      <div
        className=
        'text-3xl text-white text-center m-2 bg-blue-950 p-1 rounded-xl sticky top-14 z-20'>All Products</div>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2" >
        <Select rating={rating} val={search} category={category} />
      </div>
      <Products
        prod={data}
      />
    </>
  );
}

export default DataLoader;


