const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

// Rota HTML na raiz "/"
app.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://joaovargas.dev.br/love/db.json');
    const love = response.data.love;

    res.send(`
      <!DOCTYPE html>
      <html lang="pt-br">
      <head>
        <meta charset="UTF-8">
        <title>Índice Love</title>
        <style>
          body {
            background-color: #ffe6f0;
            color: #cc0066;
            font-family: 'Comic Sans MS', cursive, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
          }
          h1 {
            font-size: 3em;
            text-align: center;
          }
          .heart {
            font-size: 4em;
            animation: pulse 1s infinite;
          }
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
        </style>
      </head>
      <body>
        <h1>O índice love atual é de ${love} infinitos! 💗</h1>
        <div class="heart">❤️</div>
      </body>
      </html>
    `);
  } catch (error) {
    res.status(500).send('Erro ao carregar o índice love 💔');
  }
});

// Rota JSON original "/love"
app.get('/love', async (req, res) => {
  try {
    const response = await axios.get('https://joaovargas.dev.br/love/db.json');
    const love = response.data.love;
    res.json({
      love,
      indiceLove: `O índice love atual é de ${love} infinitos!`
    });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar o valor de love' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});