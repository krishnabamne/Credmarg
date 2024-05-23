import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmailList = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    axios.get('/api/vendors/emails')
      .then(response => {
        setEmails(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the emails!', error);
      });
  }, []);

  return (
    <div>
      <h2>Sent Emails</h2>
      <ul>
        {emails.map(email => (
          <li key={email.id}>{email.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmailList;
