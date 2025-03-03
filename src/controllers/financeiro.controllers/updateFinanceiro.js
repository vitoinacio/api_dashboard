import db from "../../../db.js";

const updateFinanceiro = async (req, reply) => {
  // Atualizando a entrada de acordo com o idUsuario
  const sql = "UPDATE financeiro SET entrada = $1 WHERE idUsuarios = $2"; 

  const values = [
    req.body.entrada,  // $1
    req.params.id      // $2
  ];

  try {
    // A execução da consulta no PostgreSQL
    await db.query(sql, values);
    reply.status(200).send("Entrada atualizada!");
  } catch (error) {
    console.error("Erro ao atualizar entrada:", error);
    reply.status(500).send("Erro ao atualizar entrada: " + error.message); // Fornecendo detalhes do erro
  }
}

export default updateFinanceiro;