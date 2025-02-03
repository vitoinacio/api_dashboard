import mysql from "mysql2";
import dotenv from 'dotenv';

// configura as variaveis de ambiante
dotenv.config();

// define a url da database e da localdatabase
const dbUrl = process.env.DATABASE_URL;
const dbLocalUrl = process.env.DATABASE_LOCAL;

// cria uma variavel para usar a database
let db; 

// função para conectara adata base e reconectara, caso de erro ou desconexão
const handleConect = () => {

  // define o banco de dados como local se nao existir url no arquivo .env
  if (dbUrl.length) {
    db = mysql.createConnection(dbUrl)
  } else {
    db = mysql.createConnection(dbLocalUrl)
  }

  // reconecta a database caso a aconexão seja perdida
  db.connect((error)=>{
    if (error) {
      console.error("Erro ao conectar a Data Base: ", error)
      setTimeout(handleConect, 2000) // reconecta a database apos 2segundos
    } else {
      console.log("Conectado a Data Base!")
    }
  })

  // reconecta ou informa o erro caso a conexão seja negada
  db.on('error', (error)=>{
    console.error("Erro na Data Base: ", error)
    if (error.code === 'PROTOCOL_CONNECTION_LOST' || error.fatal) {
      handleConect();
    } else {
      throw error;
    }
  })
}

// inicia a função de conectar a database
handleConect();

export default db;