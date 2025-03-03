import db from "../../../db.js";

const updateUser = async (req, reply) => {
  const sql = `
    UPDATE usuarios 
    SET nome = $1, sexo = $2, dataNasc = $3, email = $4, senha = $5, cpf = $6, 
        tel = $7, cep = $8, cidade = $9, bairro = $10, rua = $11, numeroCasa = $12 
    WHERE id = $13
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
    req.body.numeroCasa,
    req.params.id
  ];

  try {
    // Executa a consulta no PostgreSQL
    const result = await db.query(sql, values);

    // Verifica se a atualização foi bem-sucedida
    if (result.rowCount > 0) {
      reply.status(200).send("Usuário atualizado!");
    } else {
      reply.status(404).send("Usuário não encontrado!");
    }
  } catch (error) {
    console.error("Erro ao atualizar usuário: ", error);
    reply.status(500).send("Erro ao atualizar usuário: " + error.message);
  }
};

export default updateUser;
