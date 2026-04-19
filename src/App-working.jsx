import React from 'react';

function App() {
  return React.createElement('div', {
    style: { padding: '20px', textAlign: 'center' }
  }, [
    React.createElement('h1', {
      key: 'title',
      style: { color: 'purple', fontSize: '3rem' }
    }, 'FoodHub Restaurant'),
    React.createElement('p', {
      key: 'subtitle',
      style: { fontSize: '1.2rem', color: '#666' }
    }, 'Your restaurant ordering app is working!'),
    React.createElement('div', {
      key: 'features',
      style: {
        backgroundColor: '#f8f9fa',
        padding: '20px',
        margin: '20px auto',
        maxWidth: '600px',
        borderRadius: '10px'
      }
    }, [
      React.createElement('h2', { key: 'features-title' }, 'Features Available:'),
      React.createElement('ul', { 
        key: 'features-list',
        style: { textAlign: 'left', lineHeight: '2' }
      }, [
        React.createElement('li', { key: '1' }, 'Menu browsing with categories'),
        React.createElement('li', { key: '2' }, 'Shopping cart functionality'),
        React.createElement('li', { key: '3' }, 'Checkout process'),
        React.createElement('li', { key: '4' }, 'Admin panel'),
        React.createElement('li', { key: '5' }, 'Mobile responsive design')
      ])
    ])
  ]);
}

export default App;
