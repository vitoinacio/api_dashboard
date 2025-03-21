import db from '../../../db.js'; // Importando o db.js para usar a conexão com PostgreSQL

const addDebitos = async (req, reply) => {
  const sql = `
    INSERT INTO debito (idUsuario, identificacao, dataVenc, observacao, valor, notificacao)
    VALUES ($1, $2, $3, $4, $5, $6)
  `;

  const values = [
    req.params.id, // idUsuario
    req.body.identificacao,
    req.body.dataVenc,
    req.body.observacao,
    req.body.valor,
    req.body.notificacao,
  ];

  try {
    // Usando a função query para inserir dados no PostgreSQL
    await db.query(sql, values); // Faz a consulta ao banco com a query e os parâmetros

    reply.status(200).send("Débito adicionado com sucesso!");
  } catch (error) {
    console.error("Erro ao adicionar débito:", error);
    reply.status(500).send("Erro ao adicionar débito: " + error.message);
  }
};

export default addDebitos;