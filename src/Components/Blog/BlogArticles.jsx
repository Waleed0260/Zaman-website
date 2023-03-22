import React, {useState} from "react";
import BlogPage from "./BlogPage";

const BlogArticles = ({bold, heading, image}) => {
    const [blogPage, setBlogPage] = useState(false);


  return (
    <>
      <div className="blog-sec" onClick={() => setBlogPage(true)}>
        <img src={image} alt="" />
        <b>{bold}</b>
        <h3>{heading}</h3>
      </div>
      <BlogPage open={blogPage} name={bold} title={heading} img={image} onClose={()=> setBlogPage(false)}/>
    </>
  );
};

export default BlogArticles;
