import db from "../../../db.js";

const deleteUser = async (req, reply) => {
  // Usando o placeholder PostgreSQL ($1) para o valor do id
  const sql = "DELETE FROM usuarios WHERE id = $1";

  try {
    // Executa a consulta passando o id como parâmetro
    await db.query(sql, [req.params.id]);
    reply.status(200).send("Usuário deletado!");
  } catch (error) {
    console.error('Erro ao deletar usuário:', error);
    reply.status(500).send("Erro ao deletar usuário: " + error.message);
  }
};

export default deleteUser;
