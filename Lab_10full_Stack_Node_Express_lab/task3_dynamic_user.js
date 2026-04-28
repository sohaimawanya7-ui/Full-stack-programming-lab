// Task 3: Dynamic User Page
// Route /user/:name — displays name in browser
// Example: /user/Sohaima -> Hello Sohaima

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Dynamic User Page</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 40px; background: #f0f4f8; text-align: center; }
                input, button {
                    padding: 10px 14px;
                    font-size: 16px;
                    border-radius: 4px;
                    border: 1px solid #ccc;
                    margin: 6px;
                }
                button { background: #3498db; color: white; border: none; cursor: pointer; }
                button:hover { background: #2980b9; }
                p { color: #555; }
            </style>
        </head>
        <body>
            <h1>👤 Dynamic User Page</h1>
            <p>Enter a name below or visit <code>/user/YourName</code> directly in the address bar.</p>
            <input type="text" id="nameInput" placeholder="Enter a name..." />
            <button onclick="goToUser()">Go</button>
            <script>
                function goToUser() {
                    const name = document.getElementById('nameInput').value.trim();
                    if (name) window.location.href = '/user/' + encodeURIComponent(name);
                }
            </script>
        </body>
        </html>
    `);
});

app.get('/user/:name', (req, res) => {
    const name = req.params.name;

    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Hello Sohaima</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background: #f0f4f8;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                }
                .card {
                    background: white;
                    padding: 50px 60px;
                    border-radius: 12px;
                    box-shadow: 0 6px 20px rgba(0,0,0,0.12);
                    text-align: center;
                }
                h1 { color: #2c3e50; font-size: 2.5rem; margin-bottom: 10px; }
                p  { color: #7f8c8d; font-size: 1.1rem; }
                a  { color: #3498db; text-decoration: none; }
            </style>
        </head>
        <body>
            <div class="card">
                <h1>👋 Hello Sohaima!</h1>
                <p>Welcome to your dynamic user page.</p>
                <p><a href="/">← Try another name</a></p>
            </div>
        </body>
        </html>
    `);
});

app.listen(3003, () => {
    console.log('Task 3 running at http://localhost:3003/user/Sohaima');
});