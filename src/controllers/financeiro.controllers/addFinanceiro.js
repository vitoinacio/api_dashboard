import db from "../../../db.js";

const addFinanceiro = async (req, reply) => {
  const sql = "INSERT INTO financeiro (idUsuarios, entrada) VALUES (?)";

  const values = [
    req.params.id,
    req.body.entrada
  ];

  try {
    await db.query(sql, values);
    reply.status(200).send("Financeiro adicionado!");
  } catch (error) {
    console.error("Erro ao adicionar financeiro:", error);
    reply.status(500).send("Erro ao adicionar financeiro: " + error);
  }
}

export default addFinanceiro;