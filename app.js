// const express = require('express');
// const mysql = require('mysql2');
const app = require('./src/config/config-express');
const PORT = process.env.PORT || 3000;


// Create a MySQL connection
// const db = mysql.createConnection({
//   host: 'mysql-container', 
//   user: 'user',
//   password: 'password',
// });

// // Connect to MySQL
// db.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL:', err);
//     return;
//   }
//   console.log('Connected to MySQL');
// });


// app.get('/', (req, res) => {
//   db.query('SELECT * FROM formularios', (err, results) => {
//     if (err) {
//       console.error('Error executing query:', err);
//       return;
//     }
//     res.json({ message: 'Welcome to the Node.js API!', data: results });
//   });
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
