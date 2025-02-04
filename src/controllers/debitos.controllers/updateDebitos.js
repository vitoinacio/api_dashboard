import db from "../../../db.js";

const updateDebito = async (req, reply) => {
  const sql = "UPDATE debitos SET identificacao = ?, dataVenc = ?, observacao = ?, valor = ?, notificacao = ? WHERE idUsuario = ? AND id = ?";

  const values = [
    req.body.identificacao,
    req.body.dataVenc,
    req.body.observacao,
    req.body.valor,
    req.body.notificacao,
    req.params.id,
    req.params.idDeb
  ];

  try {
    await db.query(sql, values);
    reply.status(200).send("Debito atualizado!");
  } catch (error) {
    console.error("Erro ao atualizar debito:", error);
    reply.status(500).send("Erro ao atualizar debito: " + error);
  }
}

export default updateDebito;