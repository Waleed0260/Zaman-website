import React from "react";
import "./Blog.css";
import BlogArticles from "./BlogArticles";
import blog1 from "../../images/blog1.jpg";

const Blog = () => {

  return (
    <div className="about-me">
      <div className="blog">
        <div className="blog-head">
          <b>Blog</b>
          <h2>Latest tips, tricks and updates</h2>
        </div>
        <div className="blog-page">
          <BlogArticles bold="Lorem Ipsum" heading="Lorem ipsum dolor sit amet consectetur adipisicing elit." image={blog1}/>
          <BlogArticles bold="Lorem Ipsum" heading="Lorem ipsum dolor sit amet consectetur adipisicing elit." image={blog1}/>
          <BlogArticles bold="Lorem Ipsum" heading="Lorem ipsum dolor sit amet consectetur adipisicing elit." image={blog1}/>
        </div>
      </div>
    </div>
  );
};

export default Blog;
