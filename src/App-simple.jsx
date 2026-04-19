import React from 'react';

function App() {
  return (
    <div className="App">
      <nav style={{ 
        backgroundColor: 'white', 
        padding: '1rem', 
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginBottom: '2rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ 
            color: 'purple', 
            fontSize: '1.5rem',
            fontWeight: 'bold',
            margin: 0
          }}>
            FoodHub Restaurant
          </h1>
        </div>
      </nav>
      
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Welcome to FoodHub</h2>
          <p style={{ color: '#666', fontSize: '1.1rem' }}>
            Your modern restaurant ordering experience
          </p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          <div style={{ 
            backgroundColor: 'white', 
            padding: '2rem', 
            borderRadius: '16px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: 'purple', marginBottom: '1rem' }}>Browse Menu</h3>
            <p style={{ color: '#666', marginBottom: '1rem' }}>
              Explore our delicious menu items organized by categories
            </p>
            <button style={{ 
              backgroundColor: 'purple', 
              color: 'white', 
              padding: '12px 24px',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}>
              View Menu
            </button>
          </div>
          
          <div style={{ 
            backgroundColor: 'white', 
            padding: '2rem', 
            borderRadius: '16px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: 'purple', marginBottom: '1rem' }}>Features</h3>
            <ul style={{ color: '#666', lineHeight: '1.8' }}>
              <li>Mobile responsive design</li>
              <li>Real-time cart updates</li>
              <li>Secure checkout process</li>
              <li>Admin dashboard</li>
            </ul>
          </div>
        </div>
        
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '2rem', 
          borderRadius: '16px',
          textAlign: 'center'
        }}>
          <h3 style={{ marginBottom: '1rem' }}>Restaurant Ordering App</h3>
          <p style={{ color: '#666' }}>
            Complete with menu, cart, checkout, and admin panel functionality
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
