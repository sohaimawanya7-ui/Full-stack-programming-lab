// Task 1: Student List Display (GET Only)
// Shows list of students in browser using HTML <li>
// Data stored in array

const express = require('express');
const app = express();

const students = [
    { id: 1, name: "Sohaima Wanya", age: 20 },
    { id: 2, name: "Ahmed Ali", age: 21 },
    { id: 3, name: "Sara amer", age: 22 },
    { id: 4, name: "Daneen Malik", age: 20 },
    { id: 5, name: "Ayesha Mahnoor", age: 23 }
];

app.get('/students', (req, res) => {
    const listItems = students
        .map(s => `<li><strong>${s.name}</strong> - Age: ${s.age}</li>`)
        .join('\n');

    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Student List</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 40px; background: #f0f4f8; }
                h1 { color: #2c3e50; }
                ul { list-style: none; padding: 0; }
                li {
                    background: white;
                    margin: 8px 0;
                    padding: 12px 18px;
                    border-left: 5px solid #3498db;
                    border-radius: 4px;
                    box-shadow: 1px 1px 4px rgba(0,0,0,0.1);
                }
            </style>
        </head>
        <body>
            <h1>📚 Student List</h1>
            <ul>
                ${listItems}
            </ul>
        </body>
        </html>
    `);
});

app.listen(3001, () => {
    console.log('Task 1 running at http://localhost:3001/students');
});
