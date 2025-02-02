import db from '../../../db.js';

const deleteDebitos = (req, reply) => {
  const sql = "DELETE FROM debitos WHERE idUsuario = ? AND id = ?";

  const values = [req.params.id, req.params.idDeb];

  db.query(sql, values, (error, response) => {
    if (error) return reply.status(500).send('Erro ao deletar: ', error);

    reply.status(200).send('Debito deletado!');
  });
};

export default deleteDebitos;
