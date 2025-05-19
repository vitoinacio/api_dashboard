import db from "../../../db.js";

const updateDebito = async (req, reply) => {
  let setClause = [];
  let values = [];
  let counter = 1; 

  if (req.body.identificacao) {
    setClause.push(`identificacao = $${counter++}`);
    values.push(req.body.identificacao);
  }
  if (req.body.dataVenc) {
    setClause.push(`dataVenc = $${counter++}`);
    values.push(req.body.dataVenc);
  }
  if (req.body.observacao) {
    setClause.push(`observacao = $${counter++}`);
    values.push(req.body.observacao);
  }
  if (req.body.valor) {
    setClause.push(`valor = $${counter++}`);
    values.push(req.body.valor);
  }
  if (req.body.notificacao !== undefined) {
    setClause.push(`notificacao = $${counter++}`);
    values.push(req.body.notificacao);
  }
  if (req.body.pago !== undefined) {
    setClause.push(`pago = $${counter++}`);
    values.push(req.body.pago);
  }
  if (req.body.notificacao_enviada !== undefined) {
    setClause.push(`notificacao_enviada = $${counter++}`);
    values.push(req.body.notificacao_enviada);
  }

  // Verifica se há pelo menos um campo para atualizar
  if (setClause.length === 0) {
    return reply.status(400).send("Nenhum dado para atualizar.");
  }

  // Consulta SQL com as colunas dinâmicas
  const sql = `
    UPDATE debito 
    SET ${setClause.join(", ")} 
    WHERE idUsuarios = $${counter++} AND id_deb = $${counter}
  `;

  // Adiciona os parâmetros do ID na lista de valores
  values.push(req.params.id, req.params.id_deb);

  try {
    await db.query(sql, values);
    reply.status(200).send("Débito atualizado com sucesso!");
  } catch (error) {
    console.error("Erro ao atualizar débito:", error);
    reply.status(500).send("Erro ao atualizar débito: " + error.message);
  }
}

export default updateDebito;
