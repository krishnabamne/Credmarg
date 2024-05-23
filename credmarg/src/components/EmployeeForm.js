import React, { useState } from 'react';
import axios from 'axios';

const EmployeeForm = () => {
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [ctc, setCtc] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const employee = { name, designation, ctc, email };
    axios.post('/api/employees', employee)
      .then(response => {
        console.log(response.data);
        setName('');
        setDesignation('');
        setCtc('');
        setEmail('');
      })
      .catch(error => {
        console.error('There was an error creating the employee!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Employee</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Designation:</label>
        <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} />
      </div>
      <div>
        <label>CTC:</label>
        <input type="text" value={ctc} onChange={(e) => setCtc(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button type="submit">Create Employee</button>
    </form>
  );
};

export default EmployeeForm;
