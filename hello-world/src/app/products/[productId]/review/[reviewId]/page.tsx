import { notFound } from "next/navigation"
export default function Review(
    {
        params,
    }:{
        params:{
            productId:string,
            reviewId:string
        }
    }
) {
  if(parseInt(params.reviewId)>1000){
    notFound();
  }
  return (
    <div> product {params.productId}, review number {params.reviewId}</div>
  )
}
