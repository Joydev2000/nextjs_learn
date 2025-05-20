// app/Blogs/[id]/page.js

import blogs from "../../data/Blogs"; // adjust the path if needed
import Link from "next/link";
import React from "react";

export default async function BlogDetailPage({ params }) {
  const data = await blogs();
const blog = data.find((b) => b.slug === params.slug);


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
            src={`http://127.0.0.1:1337${blog.img.url}`}
            alt={blog.title}
            className="w-full h-96 object-contain"
          />
          <div className="p-6">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              {blog.category}
            </span>
            <div
              className="mt-4 text-gray-700 text-lg leading-relaxed prose max-w-none [&_img]:w-full [&_img]:h-auto"
              dangerouslySetInnerHTML={{ __html: blog.html }}
            />

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
