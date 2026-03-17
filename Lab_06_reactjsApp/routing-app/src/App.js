import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const Home = () => (
  <div style={pageStyle}>
    <h2>Welcome to Our Home Page</h2>
    <p>This is the starting point of our React Multi-Page Website.</p>
  </div>
);

const About = () => (
  <div style={pageStyle}>
    <h2>About Us</h2>
    <p>This website was built to practice React Routing and component structure.</p>
  </div>
);

const Contact = () => (
  <div style={pageStyle}>
    <h2>Contact Us</h2>
    <form style={{ display: 'flex', flexDirection: 'column', width: '300px', margin: 'auto' }}>
      <input type="text" placeholder="Name" style={inputStyle} />
      <input type="email" placeholder="Email" style={inputStyle} />
      <textarea placeholder="Your Message" style={inputStyle}></textarea>
      <button type="button" style={btnStyle}>Send Message</button>
    </form>
  </div>
);

const Products = () => (
  <div style={pageStyle}>
    <h2>Our Products</h2>
    <div style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
      <h3>React Course</h3>
      <p>Master React JS from scratch.</p>
      <button style={btnStyle}>Add to Cart</button>
    </div>
    <div style={{ border: '1px solid #ddd', padding: '10px' }}>
      <h3>Web Design Tool</h3>
      <p>Create beautiful UI designs easily.</p>
      <button style={btnStyle}>Add to Cart</button>
    </div>
  </div>
);

const NotFound = () => (
  <div style={pageStyle}>
    <h2>404 - Page Not Found</h2>
    <p>Oops! The page you are looking for does not exist.</p>
    <Link to="/">Go Back Home</Link>
  </div>
);


function App() {
  return (
    <Router>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>Home</Link> | 
        <Link to="/about" style={linkStyle}> About</Link> | 
        <Link to="/products" style={linkStyle}> Products</Link> | 
        <Link to="/contact" style={linkStyle}> Contact Us</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        {/* The * matches any URL that doesn't exist above */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

const pageStyle = { textAlign: 'center', padding: '20px' };
const navStyle = { padding: '20px', backgroundColor: '#282c34', color: 'white', textAlign: 'center' };
const linkStyle = { color: 'white', margin: '0 10px', textDecoration: 'none', fontWeight: 'bold' };
const inputStyle = { margin: '10px 0', padding: '8px' };
const btnStyle = { padding: '10px', backgroundColor: '#61dafb', border: 'none', cursor: 'pointer' };

export default App;