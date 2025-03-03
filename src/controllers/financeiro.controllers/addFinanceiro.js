import db from "../../../db.js"; // Importando a conexão com o banco PostgreSQL

const addFinanceiro = async (req, reply) => {
  // Consulta SQL para adicionar dados na tabela financeiro
  const sql = "INSERT INTO financeiro (idUsuarios, entrada) VALUES ($1, $2)";

  // Array com os valores a serem passados para a consulta SQL
  const values = [
    req.params.id, // id do usuário
    req.body.entrada // valor de entrada
  ];

  try {
    // Executando a consulta no banco de dados PostgreSQL
    await db.query(sql, values);

    // Enviando uma resposta de sucesso
    reply.status(200).send("Financeiro adicionado!");
  } catch (error) {
    // Tratamento de erro caso algo dê errado
    console.error("Erro ao adicionar financeiro:", error);
    reply.status(500).send("Erro ao adicionar financeiro: " + error.message); // Mensagem de erro
  }
}

export default addFinanceiro;