
export default function ProductDetail(
    {
        params
    }:{
    params:{productId:string}
}) {
  return (
    <div> Details About Product {params.productId}</div>
  )
}
