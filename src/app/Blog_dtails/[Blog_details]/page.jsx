import blogs from "@/app/data/Blogs";
import React from "react";

export default function page({ params }) {
  const blog = blogs;
 
  const blogId = blog.find((blog) => blog.id === parseInt(params.Blog_details));

  return (
    <div className="container mx-auto p-4 mt-20">
      {blogId.map((blog) => (
        <div key={blog.id}>
          <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-96 object-cover"
            />
            <div className="p-6">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                {blog.category}
              </span>
              <div className="mt-4">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {blog.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
      ;
    </div>
  );
}
