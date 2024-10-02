const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

// Conectar ao banco de dados
const db = new sqlite3.Database('meu_banco_de_dados.db');

// Criar as tabelas se não existirem
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    email TEXT UNIQUE,
    senha TEXT
  )`);
});

// Rota para registrar um novo usuário
app.post('/register', (req, res) => {
  const { nome, email, senha } = req.body;
  const stmt = db.prepare("INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)");
  stmt.run(nome, email, senha, function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: this.lastID });
  });
  stmt.finalize();
});

// Rota para login de um usuário
app.post('/login', (req, res) => {
  const { email, senha } = req.body;
  db.get("SELECT * FROM usuarios WHERE email = ? AND senha = ?", [email, senha], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (row) {
      res.status(200).json({ message: 'Login bem-sucedido' });
    } else {
      res.status(401).json({ message: 'Credenciais inválidas' });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
