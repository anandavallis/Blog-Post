import { useState, useEffect } from 'react';

const BlogForm = ({ onSave, editPost }) => {
  const [form, setForm] = useState({ title: '', content: '', author: '' });

  useEffect(() => {
    if (editPost) setForm(editPost);
  }, [editPost]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { ...form, date: new Date().toISOString().split('T')[0] };
    onSave(data);
    setForm({ title: '', content: '', author: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={form.title} onChange={handleChange} placeholder="Title" required />
      <textarea name="content" value={form.content} onChange={handleChange} placeholder="Content" required />
      <input name="author" value={form.author} onChange={handleChange} placeholder="Author" required />
      <button type="submit">{editPost ? 'Update' : 'Add'} Post</button>
    </form>
  );
};

export default BlogForm;
