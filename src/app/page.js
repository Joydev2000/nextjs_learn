import Link from "next/link";
import About from "./About/page";
import New_products from "./New_products/page";
import Products from "./Products/page";

export default function page() {
  return (
    <div>
      
      <Link href="/">Home</Link>

      <Link href="/About">About</Link>

      <Link href="/Blogs">Blogs</Link>

      <Link href="/Products">products</Link>

      {/* <About />
      <Products />
      <New_products /> */}
      </div>
  )
}

