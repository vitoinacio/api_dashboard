import db from '../../../db.js';

const addDebitos = (req, reply) => {
  const sql = "INSERT INTO debitos (idUsuario, identificacao, dataVenc, observacao, valor, notificacao) VALUES (?)"

  const values = [
    req.params.id,
    req.body.identificacao,
    req.body.dataVenc,
    req.body.observacao,
    req.body.valor,
    req.body.notificacao,
  ]

  db.query(sql, [values], (error, response)=>{
    if (error) return reply.status(500).send("Erro ao adiconar debito: ", error)

    reply.status(200).send("Debito adicionado!")
  })
}

export default addDebitos;