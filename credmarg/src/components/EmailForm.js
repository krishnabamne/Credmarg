import React, { useState } from 'react';
import axios from 'axios';

const VendorForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [upi, setUpi] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const vendor = { name, email, upi };
    axios.post('/api/vendors', vendor)
      .then(response => {
        console.log(response.data);
        setName('');
        setEmail('');
        setUpi('');
      })
      .catch(error => {
        console.error('There was an error creating the vendor!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Vendor</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>UPI:</label>
        <input type="text" value={upi} onChange={(e) => setUpi(e.target.value)} />
      </div>
      <button type="submit">Create Vendor</button>
    </form>
  );
};

export default VendorForm;
