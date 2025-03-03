import db from "../../../db.js"; // Importando a conexão com o banco PostgreSQL

const deleteFinanceiro = async (req, reply) => {
  // SQL para deletar uma entrada da tabela financeiro com base no idUsuarios
  const sql = "DELETE FROM financeiro WHERE idUsuarios = $1";

  try {
    // Executa a consulta SQL no banco de dados PostgreSQL
    await db.query(sql, [req.params.id]);

    // Envia a resposta de sucesso
    reply.status(200).send("Entrada deletada!");
  } catch (error) {
    // Tratamento de erro caso a consulta falhe
    console.error("Erro ao deletar entrada:", error);
    reply.status(500).send("Erro ao deletar entrada: " + error.message);
  }
}

export default deleteFinanceiro;