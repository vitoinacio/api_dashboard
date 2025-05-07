import db from '../../../db.js';

const getFinanceiro = async (req, reply) => {
  const { id } = req.query;

  let sql = "SELECT * FROM financeiro";
  let params = [];

  if (id) {
    sql += " WHERE idUsuarios = $1";
    params = [id];
  }

  try {
    const result = await db.query(sql, params);
    reply.status(200).send(result.rows);
  } catch (error) {
    console.error("Erro ao retornar a entrada:", error);
    reply.status(500).send("Erro ao retornar a entrada: " + error.message);
  }
};

export default getFinanceiro;