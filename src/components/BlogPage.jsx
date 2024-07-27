import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import blogsData from "../data/blogs.json";
import BlogSection from "../components/BlogSection";
import Subscribe from "./Subscribe";
import { FaArrowUp } from 'react-icons/fa';

const BlogPage = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const foundBlog = blogsData.find((blog) => blog.id === id);
    setBlog(foundBlog);
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative py-10 max-w-screen-xl mx-auto p-5 sm:p-10 md:py-32 md:px-6 font-barlow">
      <div
        className="bg-cover bg-center text-center overflow-hidden"
        style={{ minHeight: "500px", backgroundImage: `url(${blog.image})` }}
        title={blog.title}
      ></div>

      <div className="max-w-5xl mx-auto">
        <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10">
            <h1 className="text-gray-900 font-bold text-3xl mb-2">
              {blog.title}
            </h1>
            <p className="text-gray-700 text-xs mt-2">
              Written By:
              <a
                href="#"
                className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                {blog.author}
              </a>{" "}
              In
              <a
                href="#"
                className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                {blog.category}
              </a>
              {blog.tags &&
                blog.tags.length > 0 &&
                blog.tags.map((tag, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                  >
                    #{tag}
                  </a>
                ))}
            </p>
            <p className="text-base leading-8 my-5">{blog.summary}</p>
            <h3 className="text-2xl font-bold my-5">{blog.title}?</h3>
            <p className="text-base leading-8 my-5">{blog.mainContent}</p>
            <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600">
              {blog.quote}
            </blockquote>
            <p className="text-base leading-8 my-5">{blog.additionalContent}</p>
            <div>
              {blog.tags &&
                blog.tags.length > 0 &&
                blog.tags.map((tag, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                  >
                    #{tag}
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Subscribe */}
      <Subscribe />

      {/* Scroll Top Button */}
 <div className="fixed bottom-4 right-4">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="btn-toggle-round scroll-top js-scroll-top p-3 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 focus:outline-none"
          title="Scroll to top"
        >
          <FaArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
      
      <BlogSection />


    </div>
  );
};

export default BlogPage;
