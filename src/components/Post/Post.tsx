import React from 'react';

const Post:React.FC = () => {

  const url = 'http://146.185.154.90:8000/messages';




  return (
    <>
      <div className="post">
        <h4 className="post-title">Evgeniya Maksimova написал(а):</h4>
        <p className="post-text">Всем привет</p>
      </div>
    </>
  );
};

export default Post;