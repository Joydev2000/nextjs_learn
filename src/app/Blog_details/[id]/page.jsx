import blogs from "@/app/data/Blogs";
import React from "react";
import Link from "next/link";

export default function BlogDetailPage({ params }) {
  // Find the blog with the matching ID
  const blog = blogs.find((blog) => blog.id === parseInt(params.id));

  // Handle case where blog is not found
  if (!blog) {
    return (
      <div className="container mx-auto p-4 mt-20">
        <h1 className="text-2xl font-bold mb-4">Blog not found</h1>
        <Link href="/Blogs" className="text-blue-500 hover:underline">
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 mt-20">
      <div>
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
            <div className="mt-6">
              <Link href="/Blogs" className="text-blue-500 hover:underline">
                Back to Blogs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
