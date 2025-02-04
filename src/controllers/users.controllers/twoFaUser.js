import db from "../../../db.js";

const twoFaUser = async (req, reply) => {
  const sql = "UPDATE usuarios SET twoFa = ? WHERE id = ?";

  const values = [
    req.body.twoFa,
    req.params.id
  ];

  try {
    const [response] = await db.query(sql, values);
    reply.status(200).send("Verificação alterada!");
  } catch (error) {
    console.error("Erro ao alterar verificação:", error);
    reply.status(500).send("Erro ao alterar verificação: " + error);
  }
}

export default twoFaUser;