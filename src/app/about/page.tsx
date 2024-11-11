// src/app/about/page.tsx
"use client";
import React, { useEffect, useState } from 'react';

const AboutPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const result = await response.json();
        setData(result.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Product Table</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <thead>
          <tr style={{ backgroundColor: '#4CAF50', color: 'white' }}>
            <th style={tableHeaderStyle}>ID</th>
            <th style={tableHeaderStyle}>Title</th>
            <th style={tableHeaderStyle}>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item:any) => (
            <tr key={item.id} style={rowStyle}>
              <td style={cellStyle}>{item.id}</td>
              <td style={cellStyle}>{item.title}</td>
              <td style={cellStyle}>${item.price}</td>
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

export default AboutPage;
