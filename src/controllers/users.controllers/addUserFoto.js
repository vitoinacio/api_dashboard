import db from "../../../db.js";

const addUserFoto = (req, reply) => {
  const sql = "UPDATE usuarios SET foto = ? WHERE id = ?"

  const values = [
    req.body.foto,
  ]

  db.query(sql, [...values, req.params.id], (error, response) =>{
    if (error) return reply.status(500).send("Erro ao adicionar Foto: ", error)

    reply.status(200).send("Foto alterada!")
  })
}

export default addUserFoto;