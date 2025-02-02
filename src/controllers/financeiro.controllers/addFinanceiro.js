import db from "../../../db.js";

const addFinanceiro = (req, reply) => {
  const sql = "INSERT INTO financeiro (idUsuarios, entrada) VALUES (?)";

  const values = [
    req.params.id,
    req.body.entrada
  ];

  db.query(sql, [values], (error, response) => {
    if (error) {
      return reply.status(500).send("Erro ao adicionar financeiro: " + error);
    }

    reply.status(200).send("Financeiro adicionado!");
  });
}

export default addFinanceiro;