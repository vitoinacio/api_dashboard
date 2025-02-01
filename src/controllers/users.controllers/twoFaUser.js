import db from "../../../db.js";

const twoFaUser = (req, reply) => {
  const sql = "UPDATE usuarios SET twoFa = ? WHERE id = ?"

  const values = [
    req.body.twoFa,
  ]

  db.query(sql, [...values, req.params.id], (error, response)=>{
    if (error) return reply.status(500).send("Erro ao alterar verificação", error)

    reply.status(200).send("verifaçao alterada!")
  })
}

export default twoFaUser;