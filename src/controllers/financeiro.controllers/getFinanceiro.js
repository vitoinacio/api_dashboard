import db from '../../../db.js';

const getFinanceiro = (req, reply) =>{
  const sql = "SELECT * FROM  financeiro"

  db.query(sql, (error, response)=>{
    if (error) return reply.status(500).send("Erro ao retornar a entrada: ", error)

    reply.status(200).send(response)
  })
}

export default getFinanceiro;