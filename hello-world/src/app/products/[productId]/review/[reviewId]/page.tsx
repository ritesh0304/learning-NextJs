"use client"

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
  function getRandomInt(count:number){
    return Math.floor(Math.random()*count)
  }
  const num:number=getRandomInt(2);
  if(num ===1 ){
    throw new Error("Error loading review")
  }
  if(parseInt(params.reviewId)>1000){
    notFound();
  }
  return (
    <div> product {params.productId}, review number {params.reviewId}</div>
  )
}
