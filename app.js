const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}))

app.get('/forms', (req, res)=>{
  res.sendFile(__dirname+'/index.html')
})

app.post('/submit/{produto}', (req, res)=>{
  const produto = req.body;
  const prod = red.produto;
  
  res.send(`
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Produto Cadastrado</title>
      <style>
          body {
              font-family: 'Roboto', sans-serif;
              background-color: #f8f9fa;
              margin: 0;
              padding: 20px;
          }
  
          .container {
              max-width: 600px;
              margin: auto;
              background-color: #ffffff;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              text-align: center;
          }
  
          .mdc-button {
              margin-top: 20px;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <h2>Produto Cadastrado</h2>
          <p>O produto foi cadastrado com sucesso!</p>
      </div>

  </body>
  </html>
  
  
  `);
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
