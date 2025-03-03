import db from '../../../db.js'; // Importando a conexão com o banco PostgreSQL

const getDebitos = async (req, reply) => {
  const sql = "SELECT * FROM debitos"; // A consulta SQL para buscar todos os débitos

  try {
    // Executando a consulta no banco de dados PostgreSQL
    const response = await db.query(sql); // Usando o método query do cliente PostgreSQL

    // Enviando a resposta com os resultados da consulta
    reply.status(200).send(response.rows); // response.rows contém os dados da consulta
  } catch (error) {
    // Tratamento de erro em caso de falha na consulta
    console.error("Erro ao retornar os débitos:", error);
    reply.status(500).send("Erro ao retornar os débitos: " + error.message); // Mensagem de erro
  }
}

export default getDebitos;