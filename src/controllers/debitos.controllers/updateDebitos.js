import db from "../../../db.js"

const updateDebito = (req, reply) => {
  const sql = "UPDATE debitos SET identificacao = ?, dataVenc = ?, observacao = ?, valor = ?, notificacao = ? WHERE idUsuario = ? AND id = ? "

  const values = [
    req.body.identificacao,
    req.body.dataVenc,
    req.body.observacao,
    req.body.valor,
    req.body.notificacao,
    req.params.id, 
  ]

  db.query(sql, [...values, req.params.idDeb], (error, response)=>{
    if (error) return reply.status(500).send("Erro ao atualizar debito: ", error)

    return reply.status(200).send("Debito atualizado!")
  })
}

export default updateDebito;