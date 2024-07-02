import React from 'react';
import PostList from '../PostList/PostList';
import { posts } from '../../data/Posts';
import './Feed.css'; 

const Feed = () => {
  return (
    <div className="feed">
      {posts.map(post => (
        <PostList key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Feed;