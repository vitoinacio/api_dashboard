import mysql from "mysql2";
import dotenv from 'dotenv';

// configura as variáveis de ambiente
dotenv.config();

// define a URL da database
const dbUrl = process.env.DATABASE_URL;


// database de desenvolvimento usando localhost
// const dbUrl = process.env.DATABASE_LOCAL;


// cria uma variável para usar a database
let db;

// função para conectar à database e reconectar, caso de erro ou desconexão
const handleConect = () => {
  // cria a conexão com banco de dados
    db = mysql.createConnection(dbUrl);

  // reconecta à database caso a conexão seja perdida
  db.connect((error) => {
    if (error) {
      console.error("Erro ao conectar à Data Base: ", error);
      setTimeout(handleConect, 2000); // reconecta à database após 2 segundos
    } else {
      console.log("Conectado à Data Base!");
    }
  });

  // reconecta ou informa o erro caso a conexão seja negada
  db.on('error', (error) => {
    console.error("Erro na Data Base: ", error);
    if (error.code === 'PROTOCOL_CONNECTION_LOST' || error.fatal) {
      handleConect();
    } else {
      throw error;
    }
  });
};

// inicia a função de conectar à database
handleConect();

export default db;