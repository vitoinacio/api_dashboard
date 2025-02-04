import db from "../../../db.js";

const updateUser = async (req, reply) => {
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
    req.params.id
  ];

  try {
    const [response] = await db.query(sql, values);
    reply.status(200).send("Usuario atualizado!");
  } catch (error) {
    console.error("Erro ao atualizar usuario: ", error);
    reply.status(500).send("Erro ao atualizar usuario: " + error);
  }
}

export default updateUser;