import db from "../../../db.js";

const getUsers = async (req, reply) => {
  const sql = 'SELECT * FROM usuarios';

  try {
    // Executando a consulta no PostgreSQL
    const { rows } = await db.query(sql);  // PostgreSQL usa 'rows' para os resultados
    reply.status(200).send(rows);  // Enviando a resposta com os dados dos usuários
  } catch (error) {
    console.error('Erro ao executar a query:', error);
    reply.status(500).send("Erro ao obter usuários: " + error.message);
  }
};

export default getUsers;
