import db from '../../../db.js';

const getDebitos = (req, reply) => {
  const sql = "SELECT * FROM debitos"

  db.query(sql, (error, response)=>{
    if (error) return reply.status(500).send("Erro ao retornar os debitos", error)

    reply.status(200).send(response)
  })
}

export default getDebitos;