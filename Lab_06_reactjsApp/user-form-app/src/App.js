import React, { useState } from 'react';

function UserForm() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setSubmittedData(formData);
    setFormData({ name: '', email: '' }); 
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>User Form App</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            style={{ margin: '10px', padding: '8px' }}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            style={{ margin: '10px', padding: '8px' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px' }}>Submit</button>
      </form>

      {/* Display entered data below the form [cite: 101] */}
      {submittedData && (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', display: 'inline-block', padding: '20px' }}>
          <h3>Submitted Information:</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
        </div>
      )}
    </div>
  );
}

export default UserForm;