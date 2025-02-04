import db from "../../../db.js";

const addUserFoto = async (req, reply) => {
  const sql = "UPDATE usuarios SET foto = ? WHERE id = ?";

  const values = [
    req.body.foto,
    req.params.id
  ];

  try {
    await db.query(sql, values);
    reply.status(200).send("Foto alterada!");
  } catch (error) {
    console.error("Erro ao adicionar Foto:", error);
    reply.status(500).send("Erro ao adicionar Foto: " + error);
  }
}

export default addUserFoto;