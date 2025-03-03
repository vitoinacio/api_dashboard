import db from "../../../db.js";

const addUsers = async (req, reply) => {
  // Utilizando placeholders do PostgreSQL ($1, $2, ..., $12)
  const sql = `
    INSERT INTO usuarios 
    (nome, sexo, dataNasc, email, senha, cpf, tel, cep, cidade, bairro, rua, numeroCasa) 
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
  `;

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
    req.body.numeroCasa
  ];

  try {
    // Executando a query com os valores fornecidos
    await db.query(sql, values);
    reply.status(200).send("Usuario cadastrado!");
  } catch (error) {
    console.error("Erro ao cadastrar usuario:", error);
    reply.status(500).send("Erro ao cadastrar usuario: " + error.message);
  }
};

export default addUsers;
