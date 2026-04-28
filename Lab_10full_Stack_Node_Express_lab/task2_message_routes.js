// Task 2: Simple Message Routes System
// Routes: /home, /about, /contact — each shows a message in browser

const express = require('express');
const app = express();

const pageStyle = `
    <style>
        body { font-family: Arial, sans-serif; margin: 0; background: #f0f4f8; }
        nav {
            background: #2c3e50;
            padding: 14px 30px;
            display: flex;
            gap: 20px;
        }
        nav a {
            color: white;
            text-decoration: none;
            font-size: 16px;
            padding: 6px 14px;
            border-radius: 4px;
            transition: background 0.2s;
        }
        nav a:hover { background: #3498db; }
        .content {
            max-width: 600px;
            margin: 60px auto;
            background: white;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            text-align: center;
        }
        h1 { color: #2c3e50; }
        p  { color: #555; font-size: 16px; }
    </style>
`;

const nav = `
    <nav>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
    </nav>
`;

app.get('/', (req, res) => res.redirect('/home'));

app.get('/home', (req, res) => {
    res.send(`<!DOCTYPE html><html><head><title>Home</title>${pageStyle}</head><body>
        ${nav}
        <div class="content">
            <h1>🏠 Welcome Home</h1>
            <p>This is the Home page of our Express application.</p>
        </div>
    </body></html>`);
});

app.get('/about', (req, res) => {
    res.send(`<!DOCTYPE html><html><head><title>About</title>${pageStyle}</head><body>
        ${nav}
        <div class="content">
            <h1>ℹ️ About Us</h1>
            <p>We are learning Node.js and Express.js in Lab 10 — Full Stack Programming.</p>
        </div>
    </body></html>`);
});

app.get('/contact', (req, res) => {
    res.send(`<!DOCTYPE html><html><head><title>Contact</title>${pageStyle}</head><body>
        ${nav}
        <div class="content">
            <h1>📬 Contact Us</h1>
            <p>Reach us at: <strong>contact@fullstacklab.com</strong></p>
        </div>
    </body></html>`);
});

app.listen(3002, () => {
    console.log('Task 2 running at http://localhost:3002/home');
});
