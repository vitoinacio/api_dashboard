import db from '../../../db.js';

const getDebitos = async (req, reply) => {
  const sql = "SELECT * FROM debitos";

  try {
    const [response] = await db.query(sql);
    reply.status(200).send(response);
  } catch (error) {
    console.error("Erro ao retornar os debitos:", error);
    reply.status(500).send("Erro ao retornar os debitos: " + error);
  }
}

export default getDebitos;