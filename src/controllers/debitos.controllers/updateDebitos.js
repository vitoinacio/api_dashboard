import db from "../../../db.js"; // Importando a conexão com o banco PostgreSQL

const updateDebito = async (req, reply) => {
  // Consulta SQL para atualizar os dados na tabela debitos
  const sql = `
    UPDATE debito 
    SET identificacao = $1, dataVenc = $2, observacao = $3, valor = $4, notificacao = $5 
    WHERE idUsuarios = $6 AND id = $7
  `;

  // Array com os valores a serem passados para a consulta SQL
  const values = [
    req.body.identificacao,
    req.body.dataVenc,
    req.body.observacao,
    req.body.valor,
    req.body.notificacao,
    req.params.id,
    req.params.idDeb
  ];

  try {
    // Executando a consulta no banco de dados PostgreSQL
    await db.query(sql, values);

    // Enviando uma resposta de sucesso
    reply.status(200).send("Débito atualizado!");
  } catch (error) {
    // Tratamento de erro caso algo dê errado
    console.error("Erro ao atualizar débito:", error);
    reply.status(500).send("Erro ao atualizar débito: " + error.message); // Mensagem de erro
  }
}

export default updateDebito;