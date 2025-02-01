import db from "../../../db.js";

const deleteUser = (req, reply) => {
  const sql = "DELETE FROM usuarios WHERE id = ?";

  db.query(sql, [req.params.id], (error) => {
    if (error) {
      return reply.status(500).send(error);
    }

    reply.status(200).send("Usuário deletado!");
  });
};

export default deleteUser;