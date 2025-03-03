import db from '../../../db.js';

const getFinanceiro = async (req, reply) => {
  const sql = "SELECT * FROM financeiro"; // SQL para selecionar todas as entradas da tabela financeiro

  try {
    // No PostgreSQL, db.query retorna um objeto com a propriedade 'rows' que contém os resultados
    const result = await db.query(sql);
    
    // Acessando a propriedade 'rows' para obter os dados
    const response = result.rows;

    // Envia os dados de volta como resposta
    reply.status(200).send(response);
  } catch (error) {
    console.error("Erro ao retornar a entrada:", error);
    reply.status(500).send("Erro ao retornar a entrada: " + error.message);
  }
}

export default getFinanceiro;