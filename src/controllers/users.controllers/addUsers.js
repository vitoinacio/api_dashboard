import db from "../../../db.js";

const addUsers = async (req, reply) => {
  const sql = "INSERT INTO usuarios (nome, sexo, dataNasc, email, senha, cpf, tel, cep, cidade, bairro, rua, numeroCasa) VALUES (?)";

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
  ];

  try {
    await db.query(sql, [values]);
    reply.status(200).send("Usuario cadastrado!");
  } catch (error) {
    console.error("Erro ao cadastrar usuario:", error);
    reply.status(500).send("Erro ao cadastrar usuario: " + error);
  }
};

export default addUsers;