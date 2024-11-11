// src/app/contact/page.tsx

'use client';  // Marks this as a client component

import React, { useEffect, useState } from 'react';

interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
  username: string;
  createdAt: string;
}

// Interface for the API response structure
interface ApiResponse {
  message: User[];
}


const ContactPage = () => {
  const [data, setData] = useState<User[]>([]);
  const [responseMessage, setResponseMessage] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/users');
      const result: ApiResponse = await response.json();
      console.log("GET Response:", result);
      setData(result.message);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Fetch data from the GET API on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Function to handle POST request to add a new user
  const handleAddUser = async () => {
    const newUser = {
      name: "Leanne Graham",
      username: "Bret",
      email: "sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    };

    try {
      const postResponse = await fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      const postResult = await postResponse.json();
      console.log("POST Response:", postResult);

      if (postResult.message) {
        setResponseMessage('User added successfully');
        // Optionally, add the new user to the current data without re-fetching
        // setData((prevData) => [...prevData, postResult.data]);
          await fetchData();
      } else {
        setResponseMessage('Error adding user: ' + postResult.message);
      }
    } catch (error) {
      console.error('Error posting data:', error);
      setResponseMessage('Error posting data');
    }
  };

  return (

    
    <div>

      <button  style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          margin: '10px 0 10px 85%',
        }}  onClick={handleAddUser}>Add New User</button>

      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Product Table</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', margin:'10px' }}>
        <thead>
          <tr style={{ backgroundColor: '#4CAF50', color: 'white' }}>
          <th style={tableHeaderStyle}>Sr No.</th>
            <th style={tableHeaderStyle}>Name</th>
            <th style={tableHeaderStyle}>Email</th>
            <th style={tableHeaderStyle}>Phone</th>
            <th style={tableHeaderStyle}>Username</th>
            <th style={tableHeaderStyle}>Created On</th>

          </tr>
        </thead>
        <tbody>
          {data.map((item:any, index) => (
            <tr key={item.id} style={rowStyle}>
               <td style={cellStyle}> {index + 1}</td>
              <td style={cellStyle}>{item.name}</td>
              <td style={cellStyle}>{item.email}</td>
              <td style={cellStyle}>{item.phone}</td>
              <td style={cellStyle}>{item.username}</td>
              <td style={cellStyle}>{item.createdAt ? new Date(item.createdAt).toLocaleString() : 'medium'}</td>

            </tr>
          ))}
        </tbody>
      </table>  
    </div>
  );
};


// Style definitions
const tableHeaderStyle: React.CSSProperties = {
  padding: '10px',
  textAlign: 'left',
  fontWeight: 'bold',
  borderBottom: '2px solid #ddd',
};

const rowStyle: React.CSSProperties ={
  backgroundColor: '#f9f9f9',
  borderBottom: '1px solid #ddd',
};

const cellStyle: React.CSSProperties = {
  padding: '10px',
  textAlign: 'left',
};
export default ContactPage;
