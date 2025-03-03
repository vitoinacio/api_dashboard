import db from "../../../db.js";

const twoFaUser = async (req, reply) => {
  const sql = "UPDATE usuarios SET twoFa = $1 WHERE id = $2"; // Usando placeholders do PostgreSQL ($1, $2)

  const values = [
    req.body.twoFa,  // Valor para o campo 'twoFa' que será atualizado
    req.params.id    // ID do usuário para filtrar a atualização
  ];

  try {
    // Executando a consulta no PostgreSQL
    const result = await db.query(sql, values);

    // Verificando se a atualização foi realizada
    if (result.rowCount > 0) {
      reply.status(200).send("Verificação alterada!");
    } else {
      reply.status(404).send("Usuário não encontrado!");
    }
  } catch (error) {
    console.error("Erro ao alterar verificação:", error);
    reply.status(500).send("Erro ao alterar verificação: " + error.message);
  }
};

export default twoFaUser;
