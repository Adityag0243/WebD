
async function ProductId({params}) {
    const value = await params
    const {productId} = value;
    console.log(productId);
    
  return (
    <div>page</div>
  )
}

export default ProductId;