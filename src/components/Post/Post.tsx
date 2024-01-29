import React, { useState, useEffect } from 'react';


const Post: React.FC = () => {

  const url = 'http://146.185.154.90:8000/messages';

  const [posts, setPosts] = useState<PostData[]>([]);



    const fetchPostData = async () => {
      const response = await fetch(url);
      if (response.ok) {
        const postData: PostData[] = await response.json();
        setPosts(postData)
      }
    };

  useEffect(() => {
    void fetchPostData(url);
  }, []);


  const blogPosts = posts.map((post) => {

    const timestamp = post.datetime
    const date = new Date(timestamp);

    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    return (
      <div key={post._id} className="post">
        <h4 className="post-title">{post.author} написал(а):</h4>
        <p className="post-date">Дата: {formattedDate}</p>
        <p className="post-text">{post.message}</p>
      </div>
    );
  });

  return (
    <>
      {blogPosts}
    </>
  );


};

export default Post;