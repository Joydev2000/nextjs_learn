import Link from "next/link";
import blogs from "../data/Blogs";

export default function page() {
  const data = blogs;
  return (
    <div className="  w-full mt-20 p-4 min-h-screen flex justify-center items-center">
      <div>
      <h2 className="text-8xl font-bold text-center "> Our Recent BLogs </h2>
        <div className="container mx-auto grid mt-4 mb-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
         
          {data.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow p-6">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover mb-4" />
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-4">{blog.description}</p>
              <Link href={`/Blog_details/${blog.id}`} className="text-blue-500 hover:underline">
                Read More
              </Link>
            </div>
          ))}
        </div>
      
      </div>
     
    </div>
  )
}

