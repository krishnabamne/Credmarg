import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VendorList = () => {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    axios.get('/api/vendors')
      .then(response => {
        setVendors(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the vendors!', error);
      });
  }, []);

  return (
    <div>
      <h2>Vendors</h2>
      <ul>
        {vendors.map(vendor => (
          <li key={vendor.id}>
            {vendor.name} - {vendor.email} - {vendor.upi}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VendorList;
