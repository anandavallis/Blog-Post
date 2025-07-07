import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPost } from '../services/blogService';

const BlogDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPost(id).then(res => setPost(res.data));
  }, [id]);

  return post ? (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p><i>by {post.author} on {post.date}</i></p>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default BlogDetails;
kli9oxa                    
