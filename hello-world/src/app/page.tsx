import Link from "next/link"
import styles from './global.module.css'
function Home() {
  return (    
    <>
      <div className={styles.Home}>
      <div className="">Home</div>
    <Link className="" href="/blog">Go to Blog Page</Link>
    <Link className="" href="/products" >Products</Link>
      </div>
    </>
  )
}

export default Home