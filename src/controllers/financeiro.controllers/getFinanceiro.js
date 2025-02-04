import db from '../../../db.js';

const getFinanceiro = async (req, reply) => {
  const sql = "SELECT * FROM financeiro";

  try {
    const [response] = await db.query(sql);
    reply.status(200).send(response);
  } catch (error) {
    console.error("Erro ao retornar a entrada:", error);
    reply.status(500).send("Erro ao retornar a entrada: " + error);
  }
}

export default getFinanceiro;