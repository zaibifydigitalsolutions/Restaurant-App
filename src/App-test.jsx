import React from 'react';

function App() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1 style={{ color: 'purple', fontSize: '3rem' }}>FoodHub Restaurant</h1>
      <p style={{ fontSize: '1.2rem', color: '#666' }}>Your restaurant ordering app is working!</p>
      <div style={{ 
        backgroundColor: '#f0f0f0', 
        padding: '20px', 
        margin: '20px auto',
        maxWidth: '600px',
        borderRadius: '10px'
      }}>
        <h2>Features:</h2>
        <ul style={{ textAlign: 'left', lineHeight: '2' }}>
          <li>Menu browsing with categories</li>
          <li>Shopping cart functionality</li>
          <li>Checkout process</li>
          <li>Admin panel</li>
          <li>Mobile responsive design</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
