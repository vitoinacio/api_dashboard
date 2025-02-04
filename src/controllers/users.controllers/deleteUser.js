import db from "../../../db.js";

const deleteUser = async (req, reply) => {
  const sql = "DELETE FROM usuarios WHERE id = ?";

  try {
    await db.query(sql, [req.params.id]);
    reply.status(200).send("Usuário deletado!");
  } catch (error) {
    console.error('Erro ao deletar usuário:', error);
    reply.status(500).send(error);
  }
};

export default deleteUser;