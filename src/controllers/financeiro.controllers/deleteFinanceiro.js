import db from "../../../db.js";

const deleteFinanceiro = (req, reply) => {
  const sql = "DELETE FROM financeiro WHERE idUsuarios = ?"

  db.query(sql , req.params.id, (error, response)=>{
    if (error) return reply.status(500).send("Erro ao deletar entrada: ", error)

    reply.status(200).send("Entrada deletada!")
  })
}

export default deleteFinanceiro;