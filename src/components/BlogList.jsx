import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import blogsData from "../data/blogs.json";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(blogsData);
  }, []);

  return (
    <section className="py-12 md:py-36 font-barlow">
      <div className="max-w-screen-xl p-5 mx-auto dark:text-gray-800">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-2">
          Our latest Blog
        </h2>
        <p className="text-xl text-gray-500 text-center mb-16">
          We&apos;re constantly trying to express ourselves and actualize our
          dreams. If you have the opportunity to play this game of life you need
          to appreciate every moment.
        </p>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 transition-all duration-500 ease-in-out hover:scale-105"
              style={{
                backgroundImage: `url(${blog.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                <span className="px-3 py-2 text-xs font-semibold tracking-wider uppercase text-white bg-red-400">
                  Blog
                </span>
                <div className="flex flex-col justify-start text-center text-gray-50">
                  <span className="text-3xl font-semibold leading-none tracking-wide">
                    {new Date(blog.date).getDate()}
                  </span>
                  <span className="leading-none uppercase">
                    {new Date(blog.date).toLocaleString("default", {
                      month: "short",
                    })}
                  </span>
                </div>
              </div>
              <h2 className="z-10 p-5">
                <Link
                  to={`/blog/${blog.id}`}
                  className="font-medium text-md hover:underline text-white"
                >
                  {blog.title}
                </Link>
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
