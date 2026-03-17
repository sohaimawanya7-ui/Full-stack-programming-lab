import React, { useState } from 'react';

function Actions() {
  const [bgColor, setBgColor] = useState('white');
  const [message, setMessage] = useState('');
  const [textColor, setTextColor] = useState('black');

  const handleShowMessage = () => {
    setMessage('Hello! This is your event handling message.');
  };


  const handleChangeBg = () => {
    const colors = ['#f0f8ff', '#e6fffa', '#fff5f5', '#fffaf0'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  };

  const handleShowAlert = () => {
    alert('This is a React Event Alert!');
  };

  return (
    <div style={{ 
      backgroundColor: bgColor, 
      height: '100vh', 
      textAlign: 'center', 
      padding: '50px',
      transition: '0.3s' 
    }}>
      <h1 
        onMouseOver={() => setTextColor('blue')} 
        onMouseOut={() => setTextColor('black')}
        style={{ color: textColor, cursor: 'pointer' }}
      >
        Interactive Buttons App
      </h1>
      <p>Hover over the heading above to change its color!</p>

      <div style={{ marginTop: '30px' }}>
        <button onClick={handleShowMessage} style={btnStyle}>Show Message</button>
        <button onClick={handleChangeBg} style={btnStyle}>Change Background</button>
        <button onClick={handleShowAlert} style={btnStyle}>Show Alert</button>
      </div>

      {message && <h2 style={{ marginTop: '20px', color: '#333' }}>{message}</h2>}
    </div>
  );
}

const btnStyle = {
  margin: '10px',
  padding: '12px 24px',
  fontSize: '16px',
  cursor: 'pointer'
};

export default Actions;