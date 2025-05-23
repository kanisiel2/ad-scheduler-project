// frontend/src/pages/AdminPage.jsx
import React from 'react';
import AdForm from '../components/AdForm';

const AdminPage = () => {
  const handleAdSubmit = (formData) => {
    // TODO: implement submit logic
    console.log(formData);
  };

  return <AdForm onSubmit={handleAdSubmit} />;
};

export default AdminPage;