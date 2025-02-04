import db from "../../../db.js";

const deleteFinanceiro = async (req, reply) => {
  const sql = "DELETE FROM financeiro WHERE idUsuarios = ?";

  try {
    await db.query(sql, [req.params.id]);
    reply.status(200).send("Entrada deletada!");
  } catch (error) {
    console.error("Erro ao deletar entrada:", error);
    reply.status(500).send("Erro ao deletar entrada: " + error);
  }
}

export default deleteFinanceiro;