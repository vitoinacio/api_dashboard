import db from '../../../db.js'; // Importando a conexão com o banco PostgreSQL

const deleteDebitos = async (req, reply) => {
  const sql = "DELETE FROM debito WHERE idUsuarios = $1 AND idDeb = $2"; // Usando $1 e $2 para parâmetros

  const values = [req.params.id, req.params.idDeb]; // Definindo os valores para a consulta

  try {
    // Executando a consulta no banco de dados
    await db.query(sql, values);

    reply.status(200).send('Débito deletado com sucesso!');
  } catch (error) {
    console.error('Erro ao deletar:', error);
    reply.status(500).send('Erro ao deletar: ' + error.message); // Exibindo mensagem de erro
  }
};

export default deleteDebitos;