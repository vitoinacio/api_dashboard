import db from "../../../db.js";

const addUserFoto = async (req, reply) => {
  // Usando a sintaxe PostgreSQL para placeholders com $1, $2
  const sql = "UPDATE usuarios SET foto = $1 WHERE id = $2";

  const values = [
    req.body.foto,  // $1
    req.params.id   // $2
  ];

  try {
    // Executa a query no PostgreSQL
    await db.query(sql, values);
    reply.status(200).send("Foto alterada!");
  } catch (error) {
    console.error("Erro ao adicionar Foto:", error);
    reply.status(500).send("Erro ao adicionar Foto: " + error.message);  // Mensagem de erro mais detalhada
  }
}

export default addUserFoto;
