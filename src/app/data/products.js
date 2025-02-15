import { useEffect } from "react"


const products = async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
  
}
console.log(data)
useEffect(() => {
    products()
}, [])
export default products
