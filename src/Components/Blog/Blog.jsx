import React from "react";
import "./Blog.css";
import BlogArticles from "./BlogArticles";
import blog1 from "../../images/blog1.jpg";

const Blog = () => {

  return (
    <div className="about-me about-blog">
      <div className="blog">
        <div className="blog-head">
          <b>Blog</b>
          <h2>Latest tips, tricks and updates</h2>
        </div>
        <div className="blog-page">
          <BlogArticles bold="Inclusive Marketing" heading="Inclusive marketing is an approach that aims to create..." image={blog1}/>
          <BlogArticles bold="Google ads optimization" heading="Optimizing your Google Ads campaigns is crucial for maximizing..." image={blog1}/>
          <BlogArticles bold="Facebook ads" heading="When running Facebook ads at the awareness stage..." image={blog1}/>
        </div>
      </div>
    </div>
  );
};

export default Blog;
