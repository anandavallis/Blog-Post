import { useState } from 'react';
import BlogForm from './components/BlogForm';
import BlogList from './components/BlogList';
import { createPost, updatePost } from './services/blogService';
import './App.css';


function App() {
  const [editingPost, setEditingPost] = useState(null);

  const handleSave = async (data) => {
    if (editingPost) {
      await updatePost(editingPost.id, data);
      setEditingPost(null);
    } else {
      await createPost(data);
    }
  };

  return (
    <div>
      <h1>Blog Post Editor</h1>
      <BlogForm onSave={handleSave} editPost={editingPost} />
      <BlogList onEdit={setEditingPost} />
    </div>
  );
}

export default App;
