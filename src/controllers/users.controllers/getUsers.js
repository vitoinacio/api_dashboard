import db from "../../../db.js";

const getUsers = (req, reply) => {
  const sql = 'SELECT * FROM usuarios';
  db.query(sql, (error, results) => {
    if (error) {
      console.error('Erro ao executar a query:', error);
      return reply.status(500).send(error);
    }
    reply.status(200).send(results);
  });
}

export default getUsers;