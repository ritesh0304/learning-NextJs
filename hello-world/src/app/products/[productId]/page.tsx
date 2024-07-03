import { Metadata } from "next"

type Props ={
  params:{
    productId:string
  }
}

export const generateMetadata=({params}:Props):Metadata =>{
  return {
    title:`Product ${params.productId}`
  }
}
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
