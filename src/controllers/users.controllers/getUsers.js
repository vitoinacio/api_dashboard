import db from "../../../db.js";

const getUsers = async (req, reply) => {
  const sql = 'SELECT * FROM usuarios';

  try {
    const [results] = await db.query(sql);
    reply.status(200).send(results);
  } catch (error) {
    console.error('Erro ao executar a query:', error);
    reply.status(500).send(error);
  }
}

export default getUsers;