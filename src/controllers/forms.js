// const index = require('../public/forms/index.html');
// const path = require('path')
// module.exports = (req, res) => {
//     res.render('index', path.join('/public/forms'));
// }

// module.exports = (req, res) => {
//     res.send(`
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <link rel="stylesheet" href="style.css">
//         <title>Formulário de Contato</title>
//         <style>
//             body {
//         font-family: Arial, sans-serif;
//         background-color: #f9f9f9;
//         margin: 0;
//         padding: 20px;
//     }
    
//     h2 {
//         color: #202124;
//     }
    
//     form {
//         background-color: #fff;
//         padding: 20px;
//         border-radius: 8px;
//         box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
//     }
    
//     label {
//         display: block;
//         font-weight: bold;
//         margin-bottom: 5px;
//     }
    
//     input[type="text"],
//     textarea {
//         width: 100%;
//         padding: 10px;
//         margin-bottom: 20px;
//         border: 1px solid #ccc;
//         border-radius: 4px;
//         box-sizing: border-box;
//     }
    
//     textarea {
//         resize: vertical;
//     }
    
//     button[type="submit"] {
//         background-color: #1a73e8;
//         color: #fff;
//         padding: 10px 20px;
//         border: none;
//         border-radius: 4px;
//         cursor: pointer;
//         font-size: 16px;
//     }
    
//     button[type="submit"]:hover {
//         background-color: #0f65ef;
//     }
    
//         </style>
//     </head>
//     <body>
//         <h2>Formulário de Contato</h2>
//         <form action="/submit" method="post">
//             <div>
//                 <label for="nome">Nome:</label>
//                 <input type="text" id="nome" name="nome" required>
//             </div>
//             <div>
//                 <label for="endereco">Endereço:</label>
//                 <textarea id="endereco" name="endereco" required></textarea>
//             </div>
//             <button type="submit">Enviar</button>
//         </form>
//     </body>
//     </html>
    
//     `);
// }