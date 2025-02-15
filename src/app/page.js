import Link from "next/link";
import About from "./About/page";


export default function page() {
  return (
    <div>
      
      <Link href="/">Home</Link>

      <Link href="/About">About</Link>

      <Link href="/Blogs">Blogs</Link>

      <Link href="/Products">products</Link>

      <About />
 
      </div>
  )
}

