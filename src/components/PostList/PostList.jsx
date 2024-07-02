import React from 'react';
import './PostList.css';

const PostList = ({ post }) => {
  return (
    <div key={post.id} className="post">
      <h2>{post.username}</h2>
      <p>{post.caption}</p>
      {post.urls?.length > 0 && (
        <div className="urls">
          {post.urls.map((url, index) => (
            <a key={index} href={url.link} target="_blank" rel="noopener noreferrer">
              <p>{url.site}</p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostList;