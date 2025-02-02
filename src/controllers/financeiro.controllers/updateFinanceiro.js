import db from "../../../db.js";

const updateFinanceiro = (req, reply) => {
  const sql = "UPDATE financeiro SET entrada = ? WHERE idUsuarios = ?"

  const values = [
    req.body.entrada
  ]

  db.query(sql, [...values, req.params.id], (error, response) =>{
    if (error) return reply.status(500).send("Erro ao atualizar entrada: ", error)

    reply.status(200).send("Entrada atualizada!")
  })
}

export default updateFinanceiro;