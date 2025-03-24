const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/love', async (req, res) => {
  try {
    const response = await axios.get('https://joaovargas.dev.br/love/db.json');
    const love = response.data.love;
    res.json({
      love,
      indiceLove: `O índice love atual é de ${love} infinitos!`,
      memberOne: 'João Vargas',
      memberTwo: 'Guilherme Mocelin',
    });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar o valor de love' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});