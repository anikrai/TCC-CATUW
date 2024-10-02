const sqlite3 = require('sqlite3').verbose();

// Conectar ao banco de dados (ou criar um novo se não existir)
const db = new sqlite3.Database('meu_banco_de_dados.db');

// Criar uma tabela
db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY, nome TEXT)");

  // Inserir um registro
  const stmt = db.prepare("INSERT INTO usuarios (nome) VALUES (?)");
  stmt.run("João");
  stmt.finalize();

  // Consultar registros
  db.each("SELECT id, nome FROM usuarios", (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(`${row.id}: ${row.nome}`);
  });
});

// Fechar a conexão com o banco de dados
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Conexão com o banco de dados fechada.');
});
