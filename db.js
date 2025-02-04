import mysql from "mysql2/promise";
import dotenv from 'dotenv';

// configura as variáveis de ambiente
dotenv.config();

// define a URL da database e da localdatabase
const dbUrl = process.env.DATABASE_URL;

// cria uma variável para usar a database
let db;

// função para conectar à database e reconectar, caso de erro ou desconexão
const handleConect = async () => {
  try {
    db = await mysql.createConnection(dbUrl);
    console.log("Conectado à Data Base!");
  } catch (error) {
    console.error("Erro ao conectar à Data Base: ", error);
    setTimeout(handleConect, 2000); // reconecta à database após 2 segundos
  }
};

// inicia a função de conectar à database
handleConect();

export default db;