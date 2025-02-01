import db from "../../../db.js";

const updateUser = (req, reply) => {
  const sql = "UPDATE usuarios SET nome = ?, sexo = ?, dataNasc = ?, email = ?, senha = ?, cpf = ?, tel = ?, cep = ?, cidade = ?, bairro = ?, rua = ?, numeroCasa = ? WHERE id = ?";

  const values = [
    req.body.nome,
    req.body.sexo,
    req.body.dataNasc,
    req.body.email,
    req.body.senha,
    req.body.cpf,
    req.body.tel,
    req.body.cep,
    req.body.cidade,
    req.body.bairro,
    req.body.rua,
    req.body.numeroCasa,
  ]

  db.query(sql, [...values, req.params.id], (error, response)=>{
    if (error) return reply.status(500).send("Erro ao atualizar usuario: ", error)

    reply.status(200).send("Usuario atualizado!")
  } )
}

export default updateUser;