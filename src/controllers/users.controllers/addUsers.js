import db from "../../../db.js";

const addUsers = (req, reply) => {
  const sql = "INSERT INTO usuarios (nome, sexo, dataNasc, email, senha, cpf, tel, cep, cidade, bairro, rua, numeroCasa) VALUES (?)"

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

  db.query(sql, [values], (error, results)=>{
    if (error) {
      return reply.status(500).send("Erro ao cadastrar usuario", error)
    }

    reply.status(200).send("Usuario cadastrado!")
  })
} 

export default addUsers;