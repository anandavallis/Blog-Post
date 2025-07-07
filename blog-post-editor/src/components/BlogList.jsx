import { useEffect, useState } from 'react';
import { getPosts, deletePost } from '../services/blogService';

const BlogList = ({ onEdit }) => {
  const [posts, setPosts] = useState([]);

  const loadPosts = async () => {
    const res = await getPosts();
    setPosts(res.data);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const handleDelete = async (id) => {
    await deletePost(id);
    loadPosts();
  };

  return (
    <div>
      <h2>All Blog Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content.slice(0, 100)}...</p>
          <p><i>by {post.author} on {post.date}</i></p>
          <button onClick={() => onEdit(post)}>Edit</button>
          <button onClick={() => handleDelete(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
