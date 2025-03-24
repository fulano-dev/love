const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/love', (req, res) => {
  fs.readFile('db.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao ler o banco' });
    }
    const json = JSON.parse(data);
    res.json({ love: json.love });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});