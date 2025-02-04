import db from '../../../db.js';

const deleteDebitos = async (req, reply) => {
  const sql = "DELETE FROM debitos WHERE idUsuario = ? AND id = ?";

  const values = [req.params.id, req.params.idDeb];

  try {
    await db.query(sql, values);
    reply.status(200).send('Debito deletado!');
  } catch (error) {
    console.error('Erro ao deletar:', error);
    reply.status(500).send('Erro ao deletar: ' + error);
  }
};

export default deleteDebitos;