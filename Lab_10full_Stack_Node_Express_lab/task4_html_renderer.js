// Task 4: Simple HTML Page Renderer
// Route / that returns full HTML page using Express
// Includes: title, paragraph, and simple list

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Full Stack Lab — Home</title>
            <style>
                * { box-sizing: border-box; margin: 0; padding: 0; }
                body {
                    font-family: 'Segoe UI', Arial, sans-serif;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    min-height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 30px;
                }
                .container {
                    background: white;
                    padding: 50px 60px;
                    border-radius: 16px;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.2);
                    max-width: 650px;
                    width: 100%;
                }
                h1 {
                    color: #2c3e50;
                    font-size: 2rem;
                    margin-bottom: 20px;
                    border-bottom: 3px solid #667eea;
                    padding-bottom: 12px;
                }
                p {
                    color: #555;
                    font-size: 1.05rem;
                    line-height: 1.7;
                    margin-bottom: 28px;
                }
                h2 {
                    color: #34495e;
                    font-size: 1.2rem;
                    margin-bottom: 14px;
                }
                ul {
                    list-style: none;
                    padding: 0;
                }
                ul li {
                    padding: 10px 16px;
                    margin: 8px 0;
                    background: #f4f6fb;
                    border-left: 4px solid #667eea;
                    border-radius: 4px;
                    color: #2c3e50;
                    font-size: 0.98rem;
                }
                ul li::before {
                    content: "✅ ";
                }
                footer {
                    margin-top: 30px;
                    text-align: center;
                    color: #aaa;
                    font-size: 0.85rem;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>🚀 Full Stack Programming — Lab 10</h1>

                <p>
                    Welcome to the Node.js + Express.js Lab! In this lab, we explore
                    how to build a web server from scratch using Express, handle HTTP routes,
                    work with dynamic URL parameters, and serve HTML directly from the server.
                </p>

                <h2>📋 Topics Covered in This Lab</h2>
                <ul>
                    <li>Setting up Node.js and Express.js</li>
                    <li>Creating GET routes and serving HTML responses</li>
                    <li>Using dynamic route parameters (/user/:name)</li>
                    <li>Building multiple page routes (/home, /about, /contact)</li>
                    <li>Displaying data stored in arrays as HTML lists</li>
                    <li>Understanding REST API methods (GET, POST, PUT, DELETE)</li>
                </ul>

                <footer>Lab 10 · BSSE-VI-B &amp; A · Instructor: Mr. Sharif Hussain</footer>
            </div>
        </body>
        </html>
    `);
});

app.listen(3004, () => {
    console.log('Task 4 running at http://localhost:3004');
});
