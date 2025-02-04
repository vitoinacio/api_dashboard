import db from '../../../db.js';

const addDebitos = async (req, reply) => {
  const sql = "INSERT INTO debitos (idUsuario, identificacao, dataVenc, observacao, valor, notificacao) VALUES (?)";

  const values = [
    req.params.id,
    req.body.identificacao,
    req.body.dataVenc,
    req.body.observacao,
    req.body.valor,
    req.body.notificacao,
  ];

  try {
    await db.query(sql, values);
    reply.status(200).send("Debito adicionado!");
  } catch (error) {
    console.error("Erro ao adicionar debito:", error);
    reply.status(500).send("Erro ao adicionar debito: " + error);
  }
}

export default addDebitos;