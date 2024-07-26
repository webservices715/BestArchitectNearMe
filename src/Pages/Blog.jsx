import React, { useEffect } from "react";

import BlogList from '../components/BlogList'

function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <BlogList />
    </div>
  )
}

export default Blog
