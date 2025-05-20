import Link from "next/link";
import blogs from "../data/Blogs";


export default async function Page() {
  const data = await blogs();
  console.log(data);
  
  return (
    <div className="w-full mt-20 p-4 min-h-screen flex justify-center items-center">
      <div>
        <h2 className="text-6xl font-bold text-center py-9">Our Recent Blogs</h2>
        <div className="container mx-auto grid mt-4 mb-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data && data.length > 0 ? (
            data.map((blog) => (
              <div key={blog.id} className="bg-white rounded-lg shadow p-6">
                <img 
                  src={
                    blog.img?.url
                      ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${blog.img.url}`
                      : "/placeholder.jpg"
                  }
                  alt={blog.img?.hash || blog.title || "Blog image"} 
                  className="w-full h-48 object-contain mb-4" 
                />
                <h2 className="text-xl text-gray-700 font-semibold mb-2">{blog.title}</h2>
                <div 
                  className="text-gray-600 mb-4 prose prose-sm max-w-none line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: blog.html}}
                />
                <Link href={`/Blog_details/${blog.slug}`} className="text-blue-500 hover:underline">
                  Read More
                </Link>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 text-xl py-10">
              No blogs found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

