import db from "../../../db.js";

const addFinanceiro = async (req, reply) => {
  const { idUsuarios, entrada } = req.body;

  if (!idUsuarios || !entrada) {
    return reply.status(400).send("Campos obrigatórios: idUsuarios e entrada");
  }

  const sql = `
    INSERT INTO financeiro (idUsuarios, entrada)
    VALUES ($1, $2)
    RETURNING *;
  `;

  const values = [idUsuarios, entrada];

  try {
    const result = await db.query(sql, values);
    reply.status(201).send(result.rows[0]); // retorna o registro criado
  } catch (error) {
    console.error("Erro ao adicionar financeiro:", error);
    reply.status(500).send("Erro ao adicionar financeiro: " + error.message);
  }
};

export default addFinanceiro;