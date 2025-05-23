// frontend/src/components/AdForm.jsx
import React, { useState } from 'react';

const AdForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    category: '',
    file: null,
    startTime: '',
    endTime: '',
    position: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="category" placeholder="Category" onChange={handleChange} />
      <input type="file" name="file" onChange={handleChange} />
      <input name="startTime" type="datetime-local" onChange={handleChange} />
      <input name="endTime" type="datetime-local" onChange={handleChange} />
      <input name="position" placeholder="Position" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AdForm;