import React from 'react';
import Post from "../Post/Post";

const BlogContent:React.FC = () => {
  return (
    <>
      <h1 className='blog-Title'>
        Blog for classmates
      </h1>
      <div className='main container list-group-item-danger' onClick='main-block'>
        <Post/>
      </div>
    </>
  );
};

export default BlogContent;