import Link from 'next/link'

export default function Products() {
  return (
    <>
      <Link href="/"> Home </Link>
    <h1>Products page</h1>
      <h2> <Link href='/products/1' >Product 1</Link></h2>
      <h2> <Link href='/products/2/review/1' replace >Product 2</Link></h2>
      <h2>Product 3 </h2>
    </>
  )
}
