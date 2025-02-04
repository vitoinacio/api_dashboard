import db from "../../../db.js";

const updateFinanceiro = async (req, reply) => {
  const sql = "UPDATE financeiro SET entrada = ? WHERE idUsuarios = ?";

  const values = [
    req.body.entrada,
    req.params.id
  ];

  try {
    await db.query(sql, values);
    reply.status(200).send("Entrada atualizada!");
  } catch (error) {
    console.error("Erro ao atualizar entrada:", error);
    reply.status(500).send("Erro ao atualizar entrada: " + error);
  }
}

export default updateFinanceiro;